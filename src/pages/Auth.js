import React, { useState } from 'react';
import { register, login, setAuthToken } from '../api';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

export default function Auth() {
    const [mode, setMode] = useState('login');
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const submit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (mode === 'login') {
                const res = await login({ email: form.email, password: form.password });
                const token = res.data && res.data.token;
                if (token) {
                    localStorage.setItem('ta_token', token);
                    setAuthToken(token);
                    navigate('/');
                }
            } else {
                const res = await register({ name: form.name, email: form.email, password: form.password });
                const token = res.data && res.data.token;
                if (token) {
                    localStorage.setItem('ta_token', token);
                    setAuthToken(token);
                    navigate('/');
                }
            }
        } catch (err) {
            alert((err && err.response && err.response.data && err.response.data.msg) || 'Auth failed');
        } finally {
            setLoading(false);
        }
    };

    const children = [];

    // header
    children.push(React.createElement('h2', { key: 'h2' }, mode === 'login' ? 'Sign In' : 'Create Account'));

    // form
    const formChildren = [];
    if (mode === 'register') {
        formChildren.push(
            React.createElement(
                'div', { key: 'name-group', className: 'form-group' },
                React.createElement('label', null, 'Full Name'),
                React.createElement('input', {
                    value: form.name,
                    onChange: (e) => setForm({...form, name: e.target.value }),
                    required: true,
                })
            )
        );
    }

    formChildren.push(
        React.createElement(
            'div', { key: 'email-group', className: 'form-group' },
            React.createElement('label', null, 'Email'),
            React.createElement('input', {
                type: 'email',
                value: form.email,
                onChange: (e) => setForm({...form, email: e.target.value }),
                required: true,
            })
        )
    );

    formChildren.push(
        React.createElement(
            'div', { key: 'password-group', className: 'form-group' },
            React.createElement('label', null, 'Password'),
            React.createElement('input', {
                type: 'password',
                value: form.password,
                onChange: (e) => setForm({...form, password: e.target.value }),
                required: true,
            })
        )
    );

    formChildren.push(
        React.createElement(
            'button', { className: 'btn-primary', key: 'submit', type: 'submit', disabled: loading },
            loading ? 'Please wait...' : (mode === 'login' ? 'Sign In' : 'Create Account')
        )
    );

    children.push(
        React.createElement(
            'form', { key: 'form', onSubmit: submit, className: 'auth-form' },
            formChildren
        )
    );

    // footer
    const footer =
        mode === 'login' ?
        React.createElement(
            'span', { key: 'footer-login' },
            "Don't have an account? ",
            React.createElement(
                'button', { className: 'link-btn', onClick: () => setMode('register') },
                'Register'
            )
        ) :
        React.createElement(
            'span', { key: 'footer-register' },
            'Already have an account? ',
            React.createElement(
                'button', { className: 'link-btn', onClick: () => setMode('login') },
                'Sign In'
            )
        );

    children.push(React.createElement('div', { key: 'footer', style: { marginTop: 12 } }, footer));

    const card = React.createElement('div', { className: 'auth-card', key: 'card' }, children);
    const inner = React.createElement('div', { className: 'container auth-inner', key: 'inner' }, card);
    return React.createElement('div', { className: 'auth-page' }, inner);
}
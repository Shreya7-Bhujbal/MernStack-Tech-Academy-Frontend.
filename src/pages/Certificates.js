import React, { useEffect, useState } from 'react';
import { me } from '../api';
import './Certificates.css';

export default function Certificates() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        me()
            .then((r) => {
                const data = r && r.data;
                setUser(data && data.user ? data.user : data);
            })
            .catch(() => setUser(null))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div className = "loading"
    style = {
        { paddingTop: 120 } } > Loading... < /div>;
    if (!user) return <div style = {
        { padding: 48 } } > Please sign in to view your certificates. < /div>;

    return ( <
        div className = "certificates-page" >
        <
        div className = "container" >
        <
        h1 > Your Certificates < /h1> {
            (!user.certificates || user.certificates.length === 0) ? ( <
                div className = "empty-state" > No certificates yet— complete a course to earn one. < /div>
            ) : ( <
                div className = "cert-grid" > {
                    user.certificates.map((c) => ( <
                        div key = { c.id }
                        className = "cert-card" >
                        <
                        div className = "cert-title" > { c.courseTitle } < /div> <
                        div className = "cert-meta" > Issued: { new Date(c.issuedAt).toLocaleDateString() } < /div> <
                        a className = "btn-outline"
                        href = { `data:text/plain,Certificate%20ID:%20${c.id}%0ACourse:%20${encodeURIComponent(c.courseTitle)}` }
                        download = { `${c.id}.txt` } > Download < /a> <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div> <
        /div>
    );
}
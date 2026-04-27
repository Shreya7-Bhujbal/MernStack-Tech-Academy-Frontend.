:root {
  --bg: #0a0a0f;
  --surface: #111118;
  --card: #16161f;
  --border: #2a2a3a;
  --accent: #6c63ff;
  --accent2: #ff6b6b;
  --accent3: #43e97b;
  --text: #f0f0f8;
  --muted: #8888aa;
  --radius: 12px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Sora', sans-serif;
  line-height: 1.6;
}

a { color: inherit; text-decoration: none; }

button {
  cursor: pointer;
  border: none;
  font-family: 'Sora', sans-serif;
  transition: all 0.2s;
}

input, select, textarea {
  font-family: 'Sora', sans-serif;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 12px 16px;
  border-radius: var(--radius);
  width: 100%;
  outline: none;
  transition: border 0.2s;
}

input:focus, select:focus, textarea:focus {
  border-color: var(--accent);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn-primary {
  background: var(--accent);
  color: white;
  padding: 12px 28px;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 15px;
  display: inline-block;
}

.btn-primary:hover {
  background: #5a52e0;
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: var(--accent);
  padding: 10px 24px;
  border-radius: var(--radius);
  font-weight: 600;
  border: 2px solid var(--accent);
  display: inline-block;
}

.btn-outline:hover {
  background: var(--accent);
  color: white;
}

.section-title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
}

.section-sub {
  color: var(--muted);
  margin-bottom: 40px;
  font-size: 15px;
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.badge-purple { background: rgba(108,99,255,0.2); color: var(--accent); }
.badge-green { background: rgba(67,233,123,0.2); color: var(--accent3); }
.badge-red { background: rgba(255,107,107,0.2); color: var(--accent2); }
.badge-blue { background: rgba(67,182,233,0.2); color: #43b8e9; }

.toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: var(--card);
  border: 1px solid var(--accent3);
  padding: 16px 24px;
  border-radius: var(--radius);
  color: var(--accent3);
  font-weight: 600;
  z-index: 9999;
  animation: slideIn 0.3s ease;
}

.toast.error {
  border-color: var(--accent2);
  color: var(--accent2);
}

@keyframes slideIn {
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: var(--muted);
  font-size: 18px;
}

@media (max-width: 768px) {
  .section-title { font-size: 1.6rem; }
}

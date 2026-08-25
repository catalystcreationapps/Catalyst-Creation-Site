const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'app');

const globalsCss = @import  tailwindcss;

:root {
  --bg-dark: #080c14;
  --bg-card: rgba(15, 23, 42, 0.75);
  --border-glass: rgba(255, 255, 255, 0.08);
  --accent-primary: #6366f1;
  --accent-purple: #8b5cf6;
  --accent-cyan: #06b6d4;
  --text-main: #f3f4f6;
  --text-muted: #9ca3af;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-main);
}

body {
  overflow-x: hidden;
  min-height: 100vh;
  background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.05) 40%, rgba(8, 12, 20, 1) 80%);
}

.glass-card {
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  border-color: rgba(99, 102, 241, 0.35);
  box-shadow: 0 12px 40px -10px rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.text-gradient {
  background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
  font-weight: 600;
  padding: 0.85rem 1.75rem;
  border-radius: 0.85rem;
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.5);
  background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: #f3f4f6;
  font-weight: 600;
  padding: 0.85rem 1.75rem;
  border-radius: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition: all 0.25s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1rem;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
}

.badge-glow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1.1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: #a5b4fc;
}

.container-custom {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
;

fs.writeFileSync(path.join(appDir, 'globals.css'), globalsCss);

const layoutJs = import './globals.css';

export const metadata = {
  title: 'Catalyst Creations Apps | 5+ Years Shopify Engineering & App Solutions',
  description: 'High-performance Shopify apps and custom e-commerce engineering. Built by store owners with 5+ years of Shopify development experience.',
  keywords: 'Shopify Apps, SKU Bulk Generator, Custom Shopify Development, E-commerce Automation',
};

export default function RootLayout({ children }) {
  return (
    <html lang=en>
      <body>{children}</body>
    </html>
  );
}
;

fs.writeFileSync(path.join(appDir, 'layout.js'), layoutJs);
console.log('globals.css and layout.js written successfully');

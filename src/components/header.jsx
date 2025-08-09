import { useState } from 'react';
import './header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1>Gestão sustentável</h1>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
        <a href="#acoes" onClick={() => setMenuOpen(false)}>Ações</a>
        <a href="#galeria" onClick={() => setMenuOpen(false)}>Galeria</a>
        <a href="#footer" onClick={() => setMenuOpen(false)}>Contato</a>
      </nav>
    </header>
  );
}

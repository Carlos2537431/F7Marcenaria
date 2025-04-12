import '../styles/header.css';
function Header() {
    return (
        <header className="header">
            <h1>F7 Marcenaria</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/carrinho">Carrinho</a>
            </nav>
        </header>
    );
}

export default Header;
import '../styles/Footer.css';
function Footer() {;
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} F7 Marcenaria. Todos os direitos reservados.</p>
            <p>
                Desenvolvido por <a href="https://github.com/" target="_blank" rel="noopener noreferrer">F7 Devs</a>
            </p>
        </footer>
    );
}

export default Footer;
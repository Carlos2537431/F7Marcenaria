import React from "react";
import { useNavigate } from "react-router-dom"; // Importa o useNavigate para redirecionamento
import "./Site.css"; // Arquivo de estilo para o design moderno

const Site = () => {
  const navigate = useNavigate(); // Hook para navegação

  // Função para lidar com o clique no botão "Comprar"
  const handleBuy = (product) => {
    navigate("/compra", { state: { product } }); // Redireciona para a página de compra com os detalhes do produto
  };

  return (
    <div className="site-container">
      {/* Cabeçalho com navegação */}
      <header className="header">
        <h1 className="site-title">F7 Marcenaria</h1>
        <p className="site-subtitle">Móveis exclusivos para manicures</p>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção Início */}
      <section id="inicio" className="inicio-section">
        <h2 className="section-title">Bem-vindo à F7 Marcenaria</h2>
        <p>
          Seja muito bem-vinda(o) à D7marcenaria – o lugar ideal para transformar seu espaço de manicure! 💅
        </p>
        <p>
          Aqui, você encontra móveis planejados e funcionais que unem estilo, conforto e praticidade, pensados especialmente para profissionais da beleza que buscam excelência em cada detalhe.
        </p>
        <p>
          💼 Seja você iniciante ou já experiente no ramo, temos tudo para elevar a qualidade do seu atendimento: mesas, cadeiras, carrinhos auxiliares, expositores e muito mais.
        </p>
        <p>
          🛠️ Qualidade garantida, design moderno e soluções inteligentes para deixar seu ambiente ainda mais profissional e acolhedor.
        </p>
        <p>
          Explore nossa loja, aproveite as ofertas e monte o salão dos seus sonhos!
        </p>
        <p>Sua carreira merece o melhor – e começa com o ambiente certo.</p>
      </section>

      {/* Seção de produtos */}
      <section id="produtos" className="products-section">
        <h2 className="section-title">Nossos Produtos</h2>
        <div className="products-grid">
          {/* Produto 1 */}
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Apoiador de Mão"
              className="product-image"
            />
            <h3 className="product-name">Apoiador de Mão</h3>
            <p className="product-description">
              Conforto e ergonomia para suas clientes.
            </p>
            <p className="product-price">R$ 120,00</p>
            <button
              className="buy-button"
              onClick={() =>
                handleBuy({
                  name: "Apoiador de Mão",
                  description: "Conforto e ergonomia para suas clientes.",
                  price: "R$ 120,00",
                  image: "https://via.placeholder.com/150",
                })
              }
            >
              Comprar
            </button>
          </div>

          {/* Produto 2 */}
          <div className="product-card">
            <img
              src="https://via.placeholder.com/150"
              alt="Apoiador de Cotovelo"
              className="product-image"
            />
            <h3 className="product-name">Apoiador de Cotovelo</h3>
            <p className="product-description">
              Design moderno e funcional para o dia a dia.
            </p>
            <p className="product-price">R$ 150,00</p>
            <button
              className="buy-button"
              onClick={() =>
                handleBuy({
                  name: "Apoiador de Cotovelo",
                  description: "Design moderno e funcional para o dia a dia.",
                  price: "R$ 150,00",
                  image: "https://via.placeholder.com/150",
                })
              }
            >
              Comprar
            </button>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="contact-section">
        <h2 className="section-title">Contato</h2>
        <p>Entre em contato conosco para mais informações:</p>
        <p>Email: <a href="mailto:contato@f7marcenaria.com">contato@f7marcenaria.com</a></p>
        <p>Telefone: (11) 1234-5678</p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 F7 Marcenaria. Todos os direitos reservados.</p>
        <p>
          Entre em contato: <a href="mailto:contato@f7marcenaria.com">contato@f7marcenaria.com</a>
        </p>
      </footer>
    </div>
  );
};

export default Site;
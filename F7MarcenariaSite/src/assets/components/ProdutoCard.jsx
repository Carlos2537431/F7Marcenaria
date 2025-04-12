import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { Link } from "react-router-dom";
import "../styles/ProdutoCard.css";

function ProdutoCard({ id, nome, imagem, preco }) {
    const { adicionarAoCarrinho } = useContext(CarrinhoContext);

    return (
        <div className="produto-card">
            <img src={imagem} alt={nome} />
            <h3>{nome}</h3>
            <p>R$ {preco.toFixed(2)}</p>
            <Link to={`/produto/${id}`} className="detalhes-link">
                Ver detalhes
            </Link>
            <button onClick={() => adicionarAoCarrinho({ id, nome, imagem, preco })}>
                Adicionar ao Carrinho
            </button>
        </div>
    );
}

export default ProdutoCard;
import { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

function Carrinho() {
    const { carrinho, removerDoCarrinho, limparCarrinho } = useContext(CarrinhoContext);
    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

    return (
        <div className="carrinho">
            <h2>Carrinho de Compras</h2>
            {carrinho.length === 0 ? (
                <p>Seu carrinho está vazio. Adicione produtos para continuar.</p>
            ) : (
                <div>
                    <ul className="carrinho-lista">
                        {carrinho.map((item) => (
                            <li key={item.id} className="carrinho-item">
                                <img src={item.imagem} alt={item.nome} className="carrinho-item-imagem" />
                                <div className="carrinho-item-detalhes">
                                    <h3>{item.nome}</h3>
                                    <p>Preço: R$ {item.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                                    <p>Quantidade: {item.quantidade}</p>
                                    <button
                                        className="carrinho-item-remover"
                                        onClick={() => removerDoCarrinho(item.id)}
                                    >
                                        Remover
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="carrinho-total">
                        <h3>Total: R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h3>
                        <button className="carrinho-limpar" onClick={limparCarrinho}>
                            Limpar Carrinho
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrinho;
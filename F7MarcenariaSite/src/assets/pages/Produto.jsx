import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Produto.css";

function Produto() {
    const { id } = useParams();
    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/produtos/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro ao buscar produto");
                }
                return res.json();
            })
            .then((data) => {
                setProduto(data);
                setCarregando(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar produto:", error);
                setErro(error.message);
                setCarregando(false);
            });
    }, [id]);

    if (carregando) {
        return <p>Carregando produto...</p>;
    }

    if (erro) {
        return <p>Erro: {erro}</p>;
    }

    return (
        <div className="produto">
            <h2>{produto.nome}</h2>
            <img src={produto.imagem} alt={produto.nome} />
            <p>Preço: R$ {produto.preco}</p>
            <p>{produto.descricao}</p>
        </div>
    );
}

export default Produto;
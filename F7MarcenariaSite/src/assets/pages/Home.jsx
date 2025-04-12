import "../styles/Home.css";
import ProdutoCard from "../components/ProdutoCard";
import { useState, useEffect } from "react";

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/produtos")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro ao buscar produtos");
                }
                return res.json();
            })
            .then((data) => {
                setProdutos(data);
                setCarregando(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos:", error);
                setErro(error.message);
                setCarregando(false);
            });
    }, []);

    if (carregando) {
        return <p>Carregando produtos...</p>;
    }

    if (erro) {
        return <p>Erro: {erro}</p>;
    }

    return (
        <div className="home">
            <h1>Bem-vindo à nossa loja!</h1>
            <div className="produtos-lista">
                {produtos.map((produto) => (
                    <ProdutoCard
                        key={produto.id}
                        id={produto.id}
                        nome={produto.nome}
                        imagem={produto.imagem}
                        preco={produto.preco}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
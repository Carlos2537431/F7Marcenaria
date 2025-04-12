import { createContext, useContext, useState } from 'react';

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    function adicionarAoCarrinho(produto) {
        setCarrinho((prevCarrinho) => {
            const produtoExistente = prevCarrinho.find((item) => item.id === produto.id);
            if (produtoExistente) {
                return prevCarrinho.map((item) =>
                    item.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                );
            } else {
                return [...prevCarrinho, { ...produto, quantidade: 1 }];
            }
        });
    }

    function removerDoCarrinho(produtoId) {
        setCarrinho((prevCarrinho) =>
            prevCarrinho.filter((item) => item.id !== produtoId)
        );
    }

    function limparCarrinho() {
        setCarrinho([]);
    }

    return (
        <CarrinhoContext.Provider
            value={{
                carrinho,
                adicionarAoCarrinho,
                removerDoCarrinho,
                limparCarrinho,
            }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export function useCarrinho() {
    return useContext(CarrinhoContext);
}
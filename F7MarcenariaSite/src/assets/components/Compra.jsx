import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Compra.css";

const Compra = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div className="compra-container">
      <div className="compra-modal">
        <h2>Finalizar Compra</h2>
        <p>Você está comprando:</p>
        <div className="product-details">
          <img src={product.image} alt={product.name} className="product-image" />
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="product-price">Preço: {product.price}</p>
          </div>
        </div>
        <button className="close-button" onClick={() => navigate("/")}>
          Cancelar
        </button>
        <button className="confirm-button">Confirmar Compra</button>
      </div>
    </div>
  );
};

export default Compra;
import React from 'react';
import './Product.css';

export default function Product(props) {
  return (
    <div className="product" >
      <img src="" />
      <div id="desc">
        <div id="categ">
          <span>Roupa</span>
          <span>Enchoval</span>
        </div>

        <button>
          <i className="fa fa-heart-o"></i>
        </button>
      </div>
      <div id="name">
        <span>Enchoval</span>
      </div>
      <div id="price">
        <span id="name">por:</span>
        <span id="rs">R$</span>
        <span id="value">236</span>
        <span id="rs">,00</span>
      </div>
      <div id="select">
        <select id="selector" defaultValue="Selecione">
        <option value="">Selecione o tamanho</option>
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
        </select>
        <button>
          <i className="fa fa-shopping-basket"></i>
          COMPRAR
        </button>
      </div>
    </div>
  )
}
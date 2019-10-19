import React from 'react';
import './Product.css';

export default function Product(props) {
  return (
    <div className="product" >
      <img src="" />
      <div id="desc">
        <div id="categ">
          <span>Roupa</span>
          <span>Enchoval </span>
        </div>

        <button>
          <i className="fa fa-heart-o"></i>
        </button>
      </div>
      <div id="name">
        <span>Enchoval</span>
      </div>
      <div id="price">
        <div>
          <span>por:</span>
          <span id="rs">R$</span>
        </div>
        <div>
          <span>236</span>
          <span id="rs">,00</span>
        </div>
      </div>
    </div>
  )
}
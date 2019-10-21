import React from 'react';
import './Product.css';

import noimg from '../assets/noimg.png'
import {putOnCart} from '../util/Server'

export default function Product(props) {
  return (
    <div className="product" >
      <img 
      src={props.product.image?props.product.image:noimg} 
      alt="product"
      />
      <div id="desc">
        <div id="categ">
          <span>{
            props.product.categ.map(categ=>(
            `${categ} `
          ))}</span>
          <span>{
            props.product.subCateg.map(categ=>(
            `${categ} `
          ))}</span>
        </div>

        <button>
          <i className="fa fa-heart"></i>
        </button>
      </div>
      <div id="name">
        <span>{props.product.name}</span>
      </div>
      <div id="price">
        <span id="name">por:</span>
        <span id="rs">R$</span>
        <span id="value">{props.product.price}</span>
        <span id="rs">,00</span>
      </div>
      <div id="select">
        <select id="selector" defaultValue="Selecione">
        <option value="">Selecione o tamanho</option>
        <option value="P">P</option>
        <option value="M">M</option>
        <option value="G">G</option>
        </select>
        <button  onClick={()=>putOnCart(props.product)}>
          <i className="fa fa-shopping-basket"></i>
          COMPRAR
        </button>
      </div>
    </div>
  )
}
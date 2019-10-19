import React from 'react';
import './index.css'

import banner from '../../assets/banner.jpg'
import Product from '../../components/Product'

export default function Home(){
  return(
    <div className="container">
      <div className="images">
        <img src={banner}/>
        
      </div>
      <div className="info">
        <div >
          <span>1º TROCA </span>
          <i className="fa fa-exchange"></i>
          <span> GRÁTIS</span>
        </div>
        <div >
          <i className="fa fa-credit-card"></i>
          <span> ATÉ 5x SEM JUROS</span>
          
        </div>
        <div >
          <span>ENTREGA EXPRESS </span>
          <i className="fa fa-truck"></i>
        </div>
      </div>
      <div className="images">
        <img src={banner}/>
        
      </div>
      <div className="products">
        <h3>NOVOS PRODUTOS</h3>
        <h6>PARA SEU BEBÊ</h6>
        <div className="product-grid">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
      
    </div>
  )
}
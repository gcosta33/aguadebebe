import React,{ useEffect, useState} from 'react';
import './index.css';

import banner from '../../assets/banner.jpg';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

import {returnProducts} from '../../util/Server';

export default function Home(){
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(returnProducts)

}, [])

  return(
    <div className="container">
      <div className="images">
        <img src={banner} alt="banner"/>
        
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
        <img src={banner} alt="banner"/>
        
      </div>
      <div className="products">
        <h3>NOVOS PRODUTOS</h3>
        <h6>PARA SEU BEBÊ</h6>
        <div className="product-grid">
          {products.map(product =>(
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className="info">
        <div className="social">
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-twitter-square"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-vimeo-square"></i>
        </div>
        
        <div >
          <span>ACOMPANHE NOSSAS OFERTAS </span>
          <input type="mail" placeholder="seuemail@mail.com"/>
          <button >
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      
      </div>
      <Footer></Footer>
      
    </div>
  )
}
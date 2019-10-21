import React, { useEffect, useState } from 'react';
import './Cart.css'

import { ShowCart, removetoCart} from '../util/Server'

export default function Cart(props, { history }) {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  useEffect(() => {
    setProducts(ShowCart)

  }, [])
  
  function updateList() {
    
    if(products.length>0){
      setCart(products.map(product => (
        <li key={product.id} >
        
          <span id="name">{product.name}</span>
          <span id="value">{product.price}</span>
          <button onClick={()=>
            {
              removetoCart(product)
              setProducts(ShowCart)
              updateList()}
            }>
            <i className="fa fa-times"></i>
          </button>
        </li>
      )))
    }else{
      setCart(<li>
        <span>SEU CARRINHO ESTA LINPO</span>
      </li>)
    }
  }

  return (
    <div className="dropped cart">
      <button onMouseEnter={()=>
       {
         setProducts(ShowCart)
         updateList()
       }}>
        <i className="fa fa-shopping-bag">
        </i>
      </button>
      <div className="dropped-content">
        <ul >
          {cart}
        </ul>
      </div>
    </div>
  )

 
}
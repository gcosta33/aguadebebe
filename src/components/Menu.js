import React from 'react';
import './Menu.css'

import Cart from './Cart'

export default function Menu(props,{history}) {
 
  return (
    <div className="menu">
      <img src={props.logo} alt="logo" />
      <div className="dropped">
        <button>
          <span>ACESSORIOS</span>
          <i className="fa fa-angle-down" ></i>
        </button>
        <div className="dropped-content">
          <button>Mamadeiras</button>
          <button>Mhupetas</button>
          <button>Chocalhos</button>
          <button>Andadores</button>
        </div>
      </div>
      <div className="dropped">
        <button>
          <span>MENINO</span>
          <i className="fa fa-angle-down" ></i>
        </button>
        <div className="dropped-content">
          <button>Mamadeiras</button>
          <button>Mhupetas</button>
          <button>Chocalhos</button>
          <button>Andadores</button>
        </div>
      </div>
      <div className="dropped">
        <button>
          <span>MENINA</span>
          <i className="fa fa-angle-down" ></i>
        </button>
        <div className="dropped-content">
          <button>Mamadeiras</button>
          <button>Mhupetas</button>
          <button>Chocalhos</button>
          <button>Andadores</button>
        </div>
      </div>
      <div className="dropped">
        <button>
          <span>ENCHOVAL</span>
          <i className="fa fa-angle-down" ></i>
        </button>
        <div className="dropped-content">
          <button>Mamadeiras</button>
          <button>Mhupetas</button>
          <button>Chocalhos</button>
          <button>Andadores</button>
        </div>
      </div>
     
     <Cart></Cart>
    </div>
  )
}
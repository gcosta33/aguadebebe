import React from 'react';
import './Footer.css'

import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <div id="footer">
      <img src={logo} alt="logo"/>
      <button>SOBRE</button>
      <button>FALE CONOSCO</button>
      <button>AJUDA</button>
      <button>CONTATO: 85 3000-0000</button>
    </div>
  )
}
import React from 'react';
import Social from './SocialAccount'
import './Header.css'

import logo from '../assets/logo.jpg'
import Menu from './Menu';

export default function Header() {
  return (
    <div id="header">
      <Social></Social>
      <Menu logo={logo}></Menu>
    </div>
  )
}
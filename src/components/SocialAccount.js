import React from 'react';

export default function SocialAccount() {
  return (
    <div className="head">
        <div className="social">
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-twitter-square"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-vimeo-square"></i>
        </div>
        <div>

        <div className="dropped">
          <button>MINHA CONTA
            <i className="fa fa-angle-down" ></i>
          </button>
          <div className="dropped-content">
            <button>MINHA CONTA</button>
            <button>MEUS FAVORITOS</button>
            <button>ALUGAR</button>
            <button>ENTRAR</button>
          </div>
        </div>
        <div className="dropped">
          <button>
            <i className="fa fa-search"></i>
            PESQUISAR
          </button>
          <div className="dropped-content">
            <form >
              <input type="text" placeholder="O que você procura?"/>
            </form>
          </div>
          </div>
        </div>
      </div>
  )
}
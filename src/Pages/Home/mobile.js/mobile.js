import React from 'react'
import './mobile.css'
import { Link } from 'react-router-dom';
import logo from '../mobile.js/images-removebg-preview (1).png'


function Mobile(){

    return (
      <footer>
        <img id='logo' src={logo}/>
        <span>Todos os direitos Reservados ©</span>
        <span>Desenvolvido Por: Saniel Carneiro</span>

        <nav class="footer-navigation">
        <ul class="footer-list">
        <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='./Contato'>
                        <li>Contatos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='./Fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='./Comentários'>
                     <li>Comentários</li>
                    </Link>
        </ul>
    </nav>

      </footer>
    )
}

export default Mobile;
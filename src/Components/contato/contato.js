import React from 'react';
import { Link, NavLink, } from 'react-router-dom';
import './style.conta.css'
import logo from '../../assets/images-removebg-preview (1).png'


function Contato(){
    return (
        <>
        <header>
            <img id='logo' src={logo}/>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <NavLink style={{textDecoration: 'none'}} to='./contato'>
                    <li>Contato</li>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none'}} to='./fotos'>
                    <li>Fotos</li>
                    </NavLink>
                    <Link style={{textDecoration: 'none'}} to='./Comentários'>
                     <li>Comentários</li>
                     </Link>
        
                </ul>
            </nav>
        </header>
         
              <div className="Primeiro-h1">
                 <div> Contato: (55) 11959527396</div>
              </div>  
              

      <div className="Primeiro-h2">
        <div> E-mail: Sanielcarneirodasilva@gmail.com </div>
    </div>  

             <div className="Primeiro-h3">
                 <div> E-mail: Saniel<br/>carneiroda<br/>silva@gmail.com </div>
              </div>  
              


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
          </>


    )
    
}



export default Contato;
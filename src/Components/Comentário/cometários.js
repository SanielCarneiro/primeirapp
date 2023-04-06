import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images-removebg-preview (1).png'
import './Comentários.css';

function Comentários(){
    return (
        <>
        <header>
        <img id='logo' src={logo}/>
        <nav>
            <ul>
                <Link style={{textDecoration: 'none'}} to='/'>
                <li>Home</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to='./Contato'>
                <li>Contato</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to='./Fotos'>
                <li>Fotos</li>
                </Link>
                <Link style={{textDecoration: 'none'}} to='./Comentários'>
                <li>Comentários</li>
                </Link>
    
            </ul>
        </nav>
    </header>
        
    <div className="comente-aqui">
        <div> Comente Aqui </div>
    </div>
              

    <div className="Seta">
        <div> ↓ </div>
    </div>  


    <form action='Comentários'>
    <textarea>        
        </textarea>
        
        <button>Enviar</button>

         </form> 
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

export default Comentários;
import React from 'react'
import { Link } from 'react-router-dom';
import './fotos.css';
import image from '../../Components/Fotos/imagens/26157815-7354644.jpg'
import image2 from '../../Components/Fotos/imagens/614415.jpg'
import image3 from '../../Components/Fotos/imagens/asdgfafgasdfgasdgasdg.webp'
import image4 from '../../Components/Fotos/imagens/l-intro-1646837569.jpg'
import image5 from '../../Components/Fotos/imagens/paul_dano_como_charada_the_batman_foto_divulgacao_warner.jpg'
import image6 from '../../Components/Fotos/imagens/the-batman-colin-farrell.webp'
import logo from '../../assets/images-removebg-preview (1).png'

function Fotos(){
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
    <div className="texto-sobre">
        <div> Imagens </div>
    </div>

    <div className="actor-cards-container">
        <div className="cards-content">

        <img id='image' src={image} />
        <img id='image2' src={image2} />
        <img id='image3' src={image3} />
        <img id='image4' src={image4} />
        <img id='image5' src={image5} />
        <img id='image6' src={image6} />   
        </div>
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

export default Fotos;
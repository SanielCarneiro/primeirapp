import React from 'react'
import { Link, NavLink, } from 'react-router-dom';
import './style.conta.css'
import logo from '../../assets/images-removebg-preview (1).png'



function contato(){
    return (
    <>
        <header>
            <img id='logo' src={logo}/>
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <NavLink to='/Contato'>
                    <li>Contatos</li>
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
    

        <div class="h1">
        <h1>Contato: (55) 11959527396</h1> 
        </div>

        <div class="h2">
    <h2>E-mail: Sanielcarneirodasilva@gmail.com </h2>
</div>
    </>

    )
    
}



export default contato;
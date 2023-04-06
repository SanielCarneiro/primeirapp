import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from '../../assets/images-removebg-preview (1).png';

export function Header(){

    return (
        <header>
            <img id='logo' src={logo} />
            <nav>
                <ul>
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
        </header>
    );

}

export default Header; 
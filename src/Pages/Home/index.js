import React from 'react'
import Header from "../../Components/header/Header";
import { Link } from 'react-router-dom';
import './styles2.css';
import video from '../../assets/THEBATMAN–Mainrailer.mp4';
import Cards from '../../Cards';
import contatos from '../../Pages/Contatos/contato';
import Mobile from './mobile.js/mobile';

function Home(){
    return (
    
    <>
    <Header/>
    <div id='banner'></div>
    <div id='trailer-container'>
        <div className='content'>
            <video controls className='trailer'> 
                <source src={video}/>
                Seu navegador não possui suporte para videos
            </video>
            <div id='sinopse'>
                <p className='description'>
                        Após dois anos espreitando as ruas como Batman Bruce Wayne se encontra nas profundezas
                        mais sombrias de Gotham City. Com poucos aliados confiáveis,o vigilante solitário se estabelece
                        como a personificação da vingança para a população.                    
                </p>
               
                <button className="button">Comprar Ingresso</button>
            </div>
         </div>
    </div>
    <Cards/>
    <Mobile/>
    </>
    )
}
export default Home;
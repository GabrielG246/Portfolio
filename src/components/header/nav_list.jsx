import React from 'react';

//===COMPONENTS===//
import NavList_item from './nav_list-item'

//===STYLES===//
import '../../assets/styles/header-style/navList__new_style.css'

function Nav_list(props){
    return(
        <div className='navList__container'>
            
            <NavList_item>
                <a href="/#aboutMe__" className='navList__item'>Sobre Mi</a>
            </NavList_item>


            <NavList_item>
                <a href="/#skills__" className='navList__item'>Habilidades</a>
            </NavList_item>

            <NavList_item>
                <a href="#projects__" className='navList__item'>Proyectos</a>
            </NavList_item>
            
            <NavList_item>
                <a href="#contact__" className='navList__item'>Contacto</a>
            </NavList_item>

        </div>
    )
}

export default Nav_list
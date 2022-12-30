import React, {useState, useEffect} from 'react';

//===COMPONENTS===//
import NavList__item from './nav_list-item'

//===STYLES===//
import '../../assets/styles/header-style/nav__burger.css'

//===ICONS===//
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

function BurgerNav(){
    //===ESTADOS===///
    const [BurgerNavIs, setBurgerNav]= useState(false);
    const [showButton, setShowButton]= useState(false);
    const [buttonIcon, setButtonIcon]= useState(faBars);
  

    //===FUNCIONES===//
    const BurgerNavIsChange= ()=>{
        BurgerNavIs === false ? setBurgerNav(true) : setBurgerNav(false);
    }

    const ShowButton= ()=> {
        if(window.innerWidth <= 970){
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    const changeButton=()=>{
        if(BurgerNavIs === false){
            setButtonIcon(faTimes)
        } else {
            setButtonIcon(faBars)
        }
    }

    useEffect(()=> { ShowButton(); }, []);

    window.addEventListener('resize', ShowButton)

    //===COMPONENTE===//
        return(
            <div className='burgerNav__container'>


                <div className= {showButton ? "burgerNav__button buttonActive" : "burgerNav__button buttonNoActive"} onClick={()=> {BurgerNavIsChange(); changeButton() }} >
                    <FontAwesomeIcon icon={buttonIcon} className="burger__button_icon"/>  
                </div>


                <div className={BurgerNavIs ? 'burgerNav__list open' : 'burgerNav__list close'}>
                <ul>
                    <NavList__item>
                       <a href="/#aboutMe__" onClick={()=> {BurgerNavIsChange(); changeButton()}}>Sobre Mi</a>
                    </NavList__item>


                    <NavList__item>
                        <a href="/#skills__" onClick={()=> {BurgerNavIsChange(); changeButton()}}>Habilidades</a>
                    </NavList__item>

                    <NavList__item>
                        <a href="/#projects__" onClick={()=> {BurgerNavIsChange(); changeButton()}}>Trabajo</a>
                    </NavList__item>

                    <NavList__item>
                        <a href="/#contact__" onClick={()=> {BurgerNavIsChange(); changeButton()}}>Contacto</a>
                    </NavList__item>
                </ul>
                </div>


            </div>
        )


}

export default BurgerNav;
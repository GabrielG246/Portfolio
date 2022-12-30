import React, {useState} from "react";

//===IMAGES===//
import logo from "../../assets/img/Logo-M1.png";

//===STYLES===//
import "../../assets/styles/header-style/header_style.css";
import "../../assets/styles/header-style/nav__burger.css"



//===COMPONENTS===//
import NavList from './nav_list'
import BurgerNav from './burguer-nav'
import AboutMe from '../body/Aboutme'

const Header = ()=>{
  const [headerBackground, setHeaderBackground]= useState(false)

  const changeBackground= ()=>{
    if (window.scrollY < 100){
      setHeaderBackground(true)
    } else {
      setHeaderBackground(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className="index__header_comp">

      <div className="index__header">

        <div className={headerBackground ? 'index__header_nav' : 'index__header_nav nav__active'}>

          <img src={logo} className="index__header_logo" />

          <NavList/>

          <BurgerNav/>

        </div>

        <div className="index__header_aboutMe" id="myInfo_aboutMe">

          <AboutMe/>

        </div>

      </div>


      <div className="index__header_wave-1"></div>
      <div className="index__header_wave-2"></div>

    </div>
  );
}

export default Header;

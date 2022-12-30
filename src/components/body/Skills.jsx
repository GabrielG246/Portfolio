import React from 'react';
import {useState} from 'react';

//=== IMAGENES ===//
import htmlLogo from '../../assets/img/html-logo.png'
import cssLogo from '../../assets/img/css.logo.png'
import jsLogo from '../../assets/img/js-logo.jpg'
import reactLogo from '../../assets/img/react-logo.png'
import mySqlLogo from '../../assets/img/mySql-logo.png'
import scrumLogo from '../../assets/img/scrum-logo.png'
import gitLogo from '../../assets/img/git-logo.png'
import sassLogo from '../../assets/img/sass-logo.png'
import restApiLogo from '../../assets/img/restApi-logo.png'
import nodeJsLogo from '../../assets/img/nodeJs-logo.png'

//=== ESTILOS ===//
import '../../assets/styles/body_style/skills_style.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLaptopCode} from '@fortawesome/free-solid-svg-icons'

//=== FUNCIONES ===//


function Habilidades(){
    const [showSkills, setShowSkills]= useState(false);

    const showMySkills= () => {
        if(window.scrollY >= 216){
            setShowSkills(true);
        } else {
            setShowSkills(false)
        }
    }


    window.addEventListener('scroll', showMySkills)

    return(
        <div className='body__habilidades_container'>

            <div className={showSkills ? 'body__skills_text' : 'body__skills_text skills__outViewport'}>
            <h2 className='body__text'><FontAwesomeIcon icon={faLaptopCode}/> Habilidades</h2>
            <h2 className='body__text_wave'><FontAwesomeIcon icon={faLaptopCode}/> Habilidades</h2>
            </div>
            
            <div className={showSkills ? 'body__habilidades' : 'body__habilidades skills__outViewport'}>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={scrumLogo}/>
                    </div>
                    <p>SCRUM</p>
                </div>
                
                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={jsLogo}/>
                    </div>
                    <p>JAVA SCRIPT</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={htmlLogo}/>
                    </div>
                    <p>HTML</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={cssLogo}/>
                    </div>
                    <p>CSS</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={reactLogo}/>
                    </div>
                    <p>REACT</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={mySqlLogo}/>
                    </div>
                    <p>MYSQL</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={gitLogo}/>
                    </div>
                    <p>GIT</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={sassLogo}/>
                    </div>
                    <p>SASS</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={nodeJsLogo}/>
                    </div>
                    <p>NODE JS</p>
                </div>

                <div className='body__skill'>
                    <div className='image__container'>
                        <img src={restApiLogo}/>
                    </div>
                    <p>API REST</p>
                </div>

            </div>

        </div>
    )
}

export default Habilidades;
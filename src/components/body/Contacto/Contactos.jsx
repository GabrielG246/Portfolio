import React from 'react'
import {useState} from 'react';

//== ICONOS ==//
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneSquare,faEnvelopeSquare, faAddressCard, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithubSquare} from '@fortawesome/free-brands-svg-icons';
//==ESTILOS==//
import './contacto.scss'

function Contactos() {
    const [contactClicked, setContactClicked]='contacto__button'
    const [showContact, setShowContact]= useState(false);
    

    const showMyContact= () => {
        //console.log(window.scrollY)
        if(window.scrollY >= 1500){
            setShowContact(true);
        } else {
            setShowContact(false)
        }
    }



    window.addEventListener('scroll', showMyContact)

    

    const buttonClickHandler=(e)=>{
        const buttonClicked= e.currentTarget;
        const buttonContainer= buttonClicked.parentElement;
        const buttons= buttonContainer.childNodes;
        buttons.forEach((button)=>{
            const buttonClass= button.getAttribute('class');
            if(buttonClass==='contacto__button contacto__clicked'){button.setAttribute('class', 'contacto__button')}
        })
        buttonClicked.setAttribute('class','contacto__button contacto__clicked')
    }

    return (
        <div className={showContact? 'contacto__section_container':'contacto__section_container contacto__outViewport'}>

            <div className='contacto__title_container'>
                <h2 className='contacto__title'><FontAwesomeIcon icon={faAddressCard}/>Contacto</h2>
                <h2 className='contacto__title_wave'><FontAwesomeIcon icon={faAddressCard}/>Contacto</h2>
            </div>


            <div className='contactos__grid_container'>


            {/*<== TELEFONO ==>*/}
            <div className='contacto__button' onClick={buttonClickHandler}>
                <div className='contacto__icon'>
                    <FontAwesomeIcon className='contacto__font_icon' icon={faPhoneSquare}/>
                    <span className='contacto__icon_bg'></span>
                </div>
                <div className='contacto__info'><p>3624666140</p></div>
            </div>

            {/*<== CORREO ==>*/}
            <div className='contacto__button' onClick={buttonClickHandler}>
                <div className='contacto__icon'>
                    <FontAwesomeIcon className='contacto__font_icon' icon={faEnvelopeSquare}/>
                    <span className='contacto__icon_bg'></span>
                </div>
                <div className='contacto__info'><a href="mailto:garciagabrieldev@hotmail.com">Correo<FontAwesomeIcon className='contacto__info_icon' icon={faExternalLinkAlt}/></a></div>
            </div>

            {/*<== LINKEDIN ==>*/}
            <div className='contacto__button' onClick={buttonClickHandler}>
                <div className='contacto__icon'>
                    <FontAwesomeIcon className='contacto__font_icon' icon={faLinkedin}/>
                    <span className='contacto__icon_bg'></span>
                </div>
                <div className='contacto__info'><a href="https://www.linkedin.com/in/gabriel-garc%C3%ADa-5740b321b/">Linkedin<FontAwesomeIcon className='contacto__info_icon' icon={faExternalLinkAlt}/></a></div>
            </div>

            {/*<== GITHUB ==>*/}
            <div className='contacto__button' onClick={buttonClickHandler}>
                <div className='contacto__icon'>
                    <FontAwesomeIcon className='contacto__font_icon' icon={faGithubSquare}/>
                    <span className='contacto__icon_bg'></span>
                </div>
                <div className='contacto__info'><a href="https://github.com/GabrielG246">Github<FontAwesomeIcon className='contacto__info_icon' icon={faExternalLinkAlt}/></a></div>
            </div>

            </div>

        </div>
    )
}

export default Contactos
import React from 'react'
import './footer.scss'
import Logo from '../../assets/img/Logo-M1.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className='footer__component'>

            <div className='footer__logo'>
                <img src={Logo}/>
            </div>

            <div className='footer__urls'>
                <a target={'_blank'} href="https://www.linkedin.com/in/gabriel-garc%C3%ADa-5740b321b/"><FontAwesomeIcon className='footer__url_icon' icon={faLinkedin}/></a>
                <a target={'_blank'} href="https://github.com/GabrielG246"><FontAwesomeIcon className='footer__url_icon' icon={faGithub}/></a>
            </div>

            <h6 className='footer__info'>PORTAFOLIO DE GARCIA GABRIEL</h6>

        </div>
    )
}

export default Footer
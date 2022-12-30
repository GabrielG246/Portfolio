import React from 'react';

//===STYLES===//
import '../../assets/styles/body_style/main_style.css'

//===COMPONENTES===//
import Skills from './Skills'
import Projects from './Projects/Projects'
import Contacto from './Contacto/Contactos'

function Main(){
    return(
        <div className='index__main'>
            <Skills />
            <Projects />
            <Contacto/>
        </div>
    )
}

export default Main;
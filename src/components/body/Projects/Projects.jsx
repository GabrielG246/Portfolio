import React from 'react';
import { useState } from 'react';
import './projects-style.scss'
import Image from '../../../assets/img/projectsImages/weatherApp-img.PNG'

//<==Components==>//
import Project from './ProjectSingle/ProjectSingle'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';

//const staticUrl= '../../../../assets/img/projectsImages/'
function Projects(){

    const [showProjects, setShowProjects]= useState(false);

    const showMyProjects= () => {
        //console.log(window.scrollY)
        if(window.scrollY >= 800){
            setShowProjects(true);
        } else {
            setShowProjects(false)
        }
    }


    window.addEventListener('scroll', showMyProjects)

    return(
        <div className={showProjects?'body__projects_container':'body__projects_container projects__outViewport'}>
            <div className='projects__title_container'>
            <h2 className='projects__title'><FontAwesomeIcon icon={faCode}/>Proyectos</h2>
            <h2 className='projects__title_wave'><FontAwesomeIcon icon={faCode}/>Proyectos</h2>
            </div>

            <div className='projects__container'>
                <Project urlImage={Image} urlProject='https://gabrielg246.github.io/WeatherApp/' title='WeatherApp'/>
            </div>
        </div>
    )
}

export default Projects;
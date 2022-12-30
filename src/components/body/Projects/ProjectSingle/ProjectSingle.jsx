import React from 'react'
import './project-single.scss'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';


function ProjectSingle(props) {
    return (
        <div className='project__container'>
            <div className='project__layout'>
            <span className='project__header'><p></p> <p></p> <p></p></span>
            <img className='project__image' src={props.urlImage}/>
            </div>

            <div className='project__overlay'>
                <a  className='project__url' href={props.urlProject} target='_blank'> VISITAR <FontAwesomeIcon icon={faExternalLinkAlt}/></a>
                <h5 className='project__title'>{props.title}</h5>
            </div>
        </div>
    )
}

export default ProjectSingle
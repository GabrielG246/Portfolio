import React from 'react';
import '../../assets/styles/header-style/navList_item_style.css'

function Nav_list_item(props){
    return(
        <div>
            <li className='nav__list_element'> {props.children} </li>
        </div>
    )
}

export default Nav_list_item
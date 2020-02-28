import React from 'react';
import { NavLink } from "react-router-dom"

const NavigationComponent = (props) => {
    

    return (
        <div className='nav-wrapper'>
            <div className="left-side">

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/Contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/Blog" activeClassName="nav-link-active">
                        Blog
                    </NavLink>
                </div>
                    
            </div>

            <div className="right-side">
                Tyson Boren
            </div>
        </div>
    )
}

export default NavigationComponent
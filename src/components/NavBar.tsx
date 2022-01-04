import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FC = () => (
    <nav>
        <div className='nav-wrapper teal px1'>
            <a href='/' className='brand-logo'>
                React + TS
            </a>
            <ul id='nav-mobile' className='right hide-on-small-only'>
                <li>
                    <NavLink to='/'>Список дел</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>Информация</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

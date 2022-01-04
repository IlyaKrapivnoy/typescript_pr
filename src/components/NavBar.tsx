import React from 'react';

export const NavBar: React.FC = () => (
    <nav>
        <div className='nav-wrapper teal px1'>
            <a href='/' className='brand-logo'>
                React + TS
            </a>
            <ul id='nav-mobile' className='right hide-on-small-only'>
                <li>
                    <a href='sass.html'>Список дел</a>
                </li>
                <li>
                    <a href='badges.html'>Информация</a>
                </li>
            </ul>
        </div>
    </nav>
);

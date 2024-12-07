import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Header.css';

const Header = () => {
    const headerItems = [
        {
            id: 1,
            title: "Home",
            link: '/',
        },

        {
            id: 2,
            title: 'Resume',
            link: '/resume',
        },
        {
            id: 3,
            title: 'Contact',
            link: '/contact',
        },

    ];

    return (
        <div className='header'>
            <ul className='header-list'>
                {headerItems.map((item) => (
                    <li key={item.id} className='header-list-items'>
                        <NavLink
                            to={item.link}
                            className={({ isActive }) =>
                                isActive ? 'header-link active' : 'header-link'
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;

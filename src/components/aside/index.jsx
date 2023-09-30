import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function Aside() {
    return (
        <div id="aside">
            <h2>CodeGate</h2>
            <nav>
                <Link to="/applies">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9.02 2.83998L3.63 7.03998C2.73 7.73998 2 9.22998 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.28998 21.19 7.73998 20.2 7.04998L14.02 2.71998C12.62 1.73998 10.37 1.78998 9.02 2.83998Z" stroke="#8582E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 17.99V14.99" stroke="#7976CF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Dashboard</Link>
                <Link to="/log-out">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M8.90002 7.56001C9.21002 3.96001 11.06 2.49001 15.11 2.49001H15.24C19.71 2.49001 21.5 4.28001 21.5 8.75001V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54" stroke="#8582E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 12H3.62" stroke="#7976CF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.85 8.64999L2.5 12L5.85 15.35" stroke="#8582E4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Çıxış</Link>
            </nav>

        </div>
    )
}

export default Aside
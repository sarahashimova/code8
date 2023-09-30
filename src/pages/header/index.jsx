import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div id="header">
            <div className="block">
                <img src="/images/noti.png" alt="" />
                <img src="/images/user.png" alt="" />
            </div>
        </div>
    )
}

export default Header 
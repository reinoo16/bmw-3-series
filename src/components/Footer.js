import React from 'react';
import headerLogo from '../svg/bmw-logo.svg';

function Footer() {
    return (
        <footer>
            <div className='footer-title'>
                <img src={headerLogo} />
                <h2>BMW Türkiye</h2>
            </div>
            <p>© BMW Türkiye 2023</p>
        </footer>
    )
}

export default Footer;
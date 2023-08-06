import React, { useState } from 'react';
import headerLogo from '../svg/bmw-logo.svg';


function Navbar() {

    const [toggleBtn, setToggleBtn] = useState(false);

    const toggleClick = () => {
        setToggleBtn(!toggleBtn);
    }

    return (
        <div>
            <div className={toggleBtn ? '' : 'none'}>
                <div className='toggle-menu'>
                    <i onClick={toggleClick} class="bi bi-x-lg"></i>
                    <a onClick={toggleClick} href='#technical'><h2>Teknik Veriler</h2></a>
                    <a onClick={toggleClick} href='#design'><h2>Tasarım</h2></a>
                    <a onClick={toggleClick} href='#digital-technology'><h2>Teknoloji</h2></a>
                </div>
            </div>
            <div className='container'>
                <div className='navbar'>
                    <img src={headerLogo} />
                    <ul>
                        <li><a href='#technical'>Teknik Veriler</a></li>
                        <li><a href='#design'>Tasarım</a></li>
                        <li><a href='#digital-technology'>Teknoloji</a></li>
                        <li onClick={toggleClick}><i class="bi bi-list"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
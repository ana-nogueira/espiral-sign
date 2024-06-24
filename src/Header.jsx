import React from 'react';


const Header = () => {
    return (
        <header className='header-style'>
            <div className='container'>
            <div className='logo'>
              <img src="./src/assets/logo.png" alt="" srcset=""/>
            </div>
            <nav>
            <ul className='navbar'>
                <li><a href="http://">HOME</a></li>
                <li><a href="http://">SERVIÇOS</a></li>
                <li><a href="http://">PORTIFÓLIO</a></li>
                <li><a href="http://">CONTATO</a></li>
            </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;

import React, { useState } from 'react'
import './navbar.css'
import "../App.css"




const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

   


    return (
        <header>
            <nav className='navbar'>
                <div className='logo'>
                <a href="/" className="hexagon">
                    <h2>S</h2>
                </a>
                </div>
                <ul className={click ? "nav-menu active" : 'nav-menu'}>
                    <li className='nav-item'>
                        <a onClick={handleClick}  href="#about" className='nav-link'><span>01.</span>   About</a>
                    </li>
                    <li className='nav-item'>
                    <a onClick={handleClick}  href="#skills" className='nav-link'><span>02.</span>   Skills</a>
                    </li>
                    <li className='nav-item'>
                    <a onClick={handleClick} href="#portfolio" className='nav-link'><span>03.</span>   Portfolio</a>
                    </li>
                    <li className='nav-item'>
                    <a onClick={handleClick} href="/" className='nav-link'><span>04.</span>   Contact</a>
                    </li>

                    
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<i class="fa-solid fa-xmark" size={50} style={{ color: '#64FFDA' }}></i>) : (<i class="fa-solid fa-bars" size={50} style={{ color: '#64FFDA' }}></i>)}

                </div>
            </nav>
        </header>
    )
}

export default Navbar

import React, { useState, useEffect } from 'react'
import Image from "next/image";
import logo from "../public/assets/AG.png";
import {Link} from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const Navbar = ({CurrentTheme, changeTheTheme}) => {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    
    useEffect(() => {
      window.addEventListener("scroll", changeColor);
    }, [])
    

  return (
    <div className={color ? "header header-bg" : "header"}>

        <Image alt=''
        className="logo" src={logo} 
        height="48"  width="48"/>

          <ul className={click ? "navi active":"navi"}>
            <li><Link  to="home" spy={true} smooth={true}>Home</Link></li>
            <li><Link  to="portfolio" spy={true} smooth={true}>Portfolio</Link></li>
            <li><Link  to="about" spy={true} smooth={true}>About us</Link></li>
            <li><Link  to="faqs" spy={true} smooth={true}>Faqs</Link></li>
          
          </ul>
            <button className="btnn"
            onClick={changeTheTheme}>
              {(CurrentTheme === "dark") ? (<FaSun className="sun" size={20}/>) 
                                          : (<FaMoon className="moon" size={20}/>)}
            </button>

          <div className="hamburger" onClick={handleClick}>
                {!click ?
                (<FaBars className="Ham" size={20}/> ): 
                (<FaTimes className="xIcon" size={20}/>) }
            </div>
    </div>
  )
}

export default Navbar
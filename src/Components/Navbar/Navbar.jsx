import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [icon, setIcon] =useState(false);
    const [bgcolor, setBgcolor] = useState(false);

    const Background =()=>{
        if(window.scrollY >=150){
          setBgcolor(true);
        }
        else{
          setBgcolor(false);
        }
    };

    window.addEventListener('scroll', Background);

    const toggleicon =()=>{
        setIcon(!icon)
    };
  return (
    <>
      <nav className={bgcolor ? 'nav bgcolor':'nav'}>
            <Link className='logo' spy={true} duration={500} to="hero" offset={50}>PORTFOLIO WEB</Link>

            <div className="main_ul">
                <ul className={icon? 'ul active':'ul'}>
                    <li><Link spy={true} smooth={true} duration={500} to="hero" >Home</Link></li>
                    <li><Link spy={true} duration={500}  smooth={true}  to="about" >About</Link></li>
                    <li><Link spy={true} duration={500}  smooth={true}  to="contact" offset={5}>Contact</Link></li>

                    <li><Link spy={true} duration={500}  smooth={true}  to="service" >Service</Link></li>
                </ul>
            </div>

            <div className="icons" onClick={toggleicon}>
                {icon?<i className="fa fa-times" aria-hidden="true"></i>:<i className="fa fa-bars" aria-hidden="true"></i>}
            </div>
      </nav>
    </>
  );
};

export default Navbar;

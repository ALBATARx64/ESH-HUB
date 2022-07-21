import React from "react";
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai'
import { BsBookmarks } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import Logo from './Logo'

function Navbar() {    
    // const [isOpen, setIsOpen] = useState(false);
    // const sideBar = useRef(null);

    // useEffect(() => {
    //     if (isOpen) {
    //         sideBar.current.style.transform = 'translateX(-100%)';
    //     } else {
    //         sideBar.current.style.transform = 'translateX(0)';
    //     }
    // }, [isOpen])

    return (
        <>
        <nav>
            <Logo />
            <ul>
                <li>
                    <Link to='/home' className='nav-item'>HOME</Link>
                </li>
                <li>
                    <Link to='/' className='nav-item'>DOCS</Link>
                </li>
                <li>
                    <Link to='/about' className='nav-item'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/contact' className='nav-item'>CONTACT</Link>
                </li>
            </ul>
            <a className='github-account' href='https://github.com/' rel='noreferrer' target='_blank'>
               <div className='icon'>
                    <FaGithub style={{fontSize: '16px'}} />
               </div>
                <p className='github'>Fork it</p>
            </a>
        </nav>
        <section className='sidebar'>
             <ul>
                <li>
                    <Link to='/home' className='nav-item'>
                        <AiOutlineHome className='app-icon' />
                        <h4>HOME</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/' className='nav-item'>
                        <BsBookmarks className='app-icon' />
                        <h4>DOCS</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/about' className='nav-item'>
                        <FiType className='app-icon' />
                        <h4>ABOUT</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/contact' className='nav-item'>
                        <RiContactsLine className='app-icon' />
                        <h4>CONTACT</h4>
                    </Link>
                </li>
            </ul>
        </section>
        </>
    )
}

export default Navbar

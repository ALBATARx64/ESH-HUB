import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { IoShareSocialOutline } from 'react-icons/io5'
import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi'
import { SiPluscodes } from 'react-icons/si'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className="container">
                <p>
                    <SiPluscodes className='credits-icon' /> 
                    <span>Made with ☕ by <strong>Flood_x64</strong> and <strong>Someone's</strong> brainstorms - {year}</span>
                </p>
                <div className="contact">
                    <div>
                        <div>
                        <HiOutlineMail className='icon' />
                        <div>
                            <strong>Personal Email</strong>
                            <p>yohanopp@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <IoShareSocialOutline className='icon' />
                        <div>
                            <strong>Social Media</strong>
                            <div className='social-icons'>
                                <a href='https://twitter.com/JacoubRob' rel='noreferrer' target='_blank'>
                                    <FiTwitter />
                                </a>
                                <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
                                    <FiFacebook />
                                </a>
                                <a href='https://www.instagram.com/flood_x64/' rel='noreferrer' target='_blank'>
                                    <FiInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

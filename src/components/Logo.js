import { React } from 'react'
import { Link } from 'react-router-dom'
import { FaBookmark } from 'react-icons/fa';

function Logo() {
    return (
            <Link className='logo' to='/home'>
                <FaBookmark style={{marginRight:'0.3rem', color:'#80ED99', fontSize: '1.4rem'}} />
                <p>EsiHub</p>
            </Link>
    )
}

export default Logo

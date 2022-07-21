import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <>
        <section className='error-page'>
            <div className="container">
                <h1>4<span>0</span>4 !</h1>
            </div>
            <div className='main-text'>
                    <h2>Looks like you're lost</h2>
                    <p>the page you are looking for is not avaible!</p>
                    <Link to='/' className='green-btn'>Go to Home</Link>
                </div>
        </section>
        </>
    )
}

export default Error

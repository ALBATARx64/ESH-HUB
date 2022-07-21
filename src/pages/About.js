import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import img from '../img/about.svg'

function About() {
    return (
        <>
        <Helmet>
            <title>ESI Hub - About</title>
            <meta name='description' content='Esi Hub is your friend in your Esi journey' /> 
            <meta name='keywords' content='Esi Hub'></meta>
        </Helmet>
        <section className='about-page'>
           <div className="container" style={{backgroundImage: `url(${img})`}}>
               <h3>ABOUT</h3>
                <article>
                    <h2><span>-----</span> How it all started?</h2>
                    <p>The idea for EsiHub actually came to my mind during my first year in the school as I always needed more recources to rely on along with the school, so I really had bad times searching for good resources and then I wish that there were a good website to be an all-in-one resource for the students of the school.</p>
                </article>
                <article>
                    <h2><span>-----</span> Who is it for?</h2>
                    <p>It's for all Esi students and it might be helpful for MI students as well, it's like a library that you can visit at any time, no restrictions.</p>
                </article>
                <article>
                    <h2><span>-----</span> How can I help?</h2>
                    <p>You can help improving the website by contributing with new documents and by reporting bugs and sending us your feedback if you have any suggestions to be added to the website.</p>
                </article>
           </div>
           <div className="button">
                <Link to='/contact' className='green-btn'>Contact Us</Link>
           </div>
        </section>   
        </>
    )
}

export default About

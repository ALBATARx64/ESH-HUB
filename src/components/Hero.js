import React from "react"
import { Link } from 'react-router-dom'
import img from '../img/box.svg'
import { BsChevronRight } from 'react-icons/bs'

function Hero() {

    return (
        <section className='main-section'>
           <div className="main-content">
               <img src={img} alt="" />
               <div className="main-text">
                   <h3>We Do Docs.</h3>
                   <p>On EsiHub you find everything you need to sail through your computer science exams, with all courses provided by the teachers and previous papers along with all the practical works, organized so that you have the best experience in the school.</p>
                   <Link className='btn' to='/'>
                       <div className='flex-btn'>
                           <span>Explore Docs</span>
                            <BsChevronRight className='chevron-icon' />
                       </div>
                   </Link>
               </div>
           </div>
        </section>
    )
}

export default Hero

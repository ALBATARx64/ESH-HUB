import React from "react"
import { useRef, useEffect } from "react"
import { Helmet } from 'react-helmet'
import Cards from "../components/Cards"
import Hero from '../components/Hero'
import { VscChevronDown } from 'react-icons/vsc'
import SingleCard from '../components/SingleCard'
import { BsFiles, BsLink45Deg } from 'react-icons/bs'
import { AiOutlineYoutube } from 'react-icons/ai'
import Footer from '../components/Footer'
import { IoIosArrowUp } from 'react-icons/io'
 

function Home() {

    const navBar = useRef(null);
    
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 180) {
                navBar.current.style.transform='scale(1)';
            } else {
                navBar.current.style.transform='scale(0)';
            }
        }
    }, [])

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
        <Helmet>
            <title>ESI Hub</title>
            <meta name='description' content='Esi Hub is your friend in your Esi journey' />
            <meta name='keywords' content='Esi Hub'></meta>
        </Helmet>
            
        <Hero />
        <Cards />

        <section className='sample'>
            <div className="container">
                <h3>Easy To Use</h3>
                <div className="sample-doc">
                    <div className="list">
                    <ul>
                        <li>
                            <div className="list-item-header">
                                <p>1CPI</p>
                                <VscChevronDown />
                            </div>
                            <ul>
                                <li>
                                    <div className="list-item-header">
                                        <p>Semester 1</p>
                                        <VscChevronDown />
                                    </div>
                                    <ul>
                                        <li>SYS1</li>
                                        <li>ALSDS</li>
                                        <li>ANA1</li>
                                        <li>BWEB</li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="list-item-header">
                                        <p>Semester 2</p>
                                        <VscChevronDown />
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div className="list-item-header">
                                <p>2CPI</p>
                                <VscChevronDown />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="content">
                    <h2>ALSDS : name of the module</h2>
                    <p>Here you get a brief definition of the module so that you get familiar with it and understand what you are going to be studying to have a better and clear vision.</p>
                    <ul className='module-info'>
                       <li><span>duration: </span>90h</li>
                       <li><span>coefficient: </span>5</li>
                       <li><span>credit: </span>6</li>
                    </ul>
                    <div className="container">
                        <h2>Resources : these are the three types of resources</h2>
                        <div className="grid-cards">
                            <SingleCard Icon={BsFiles} title='Google Drives' text='Here you will find a list to Google drives that contain organized documentations, such as courses, TDs, TPs, and exams.' />
                            <SingleCard Icon={AiOutlineYoutube} title='Youtube Videos' text='Here you will find a list of Youtube channels on that particular module, organized from the most frequently used by students.' />
                            <SingleCard Icon={BsLink45Deg} title='Documents' text='In this section you will find some addtitional and special documents, from external websites and our special contributors. '/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <div className="open-source">
                    <h3>Love For Open Source</h3>
                    <p>Due to our great gratitude to the <span>open-source</span> mouvment, as it is the power of the people as <span>Philippe Kahn</span> once said, we decided to contribute to the open-souce society with this little project which is expected to grow and get bigger and richer by the creativity of <span>contributors</span> . And that's done by the <span>content</span> students can provide, such as courses, exercices, and exams. To help enlive and enlighten the way for students.</p>
                </div>
        <Footer />
        <div className='scroll-top' ref={navBar}>
            <div onClick={handleScroll}>
               <IoIosArrowUp />
            </div>
        </div>
        </>
    )
}

export default Home

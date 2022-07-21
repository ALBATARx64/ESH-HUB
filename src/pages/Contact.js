import { React, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { FaUserCircle } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Particles from 'react-particles-js'

function Contact() {
    const inputIcon = useRef([]);

    const handleFocus = (i) => {
        inputIcon.current[i].style.color = '#39ac31';
    }

    const handleBlur = (i) => {
        inputIcon.current[i].style.color = '#31862b8f';
    }

    return (
        <>
        <Helmet>
            <title>ESI Hub - Contact</title>
            <meta name='description' content='Esi Hub is your friend in your Esi journey' /> 
            <meta name='keywords' content='EsiHub'></meta>
        </Helmet>
                <section className='contact-form'>
                <div className='particles-background'>
                  <Particles
                  params={{
                      "particles": {
                  "number": {
                    "value": 80,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": ["#39ac31"]
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0,
                      "color": "#b6b2b2"
                    }
                  },
                  "opacity": {
                    "value": 0.5211089197812949,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 3.017060304327615,
                    "random": true,
                    "anim": {
                      "enable": true,
                      "speed": 12.181158184520175,
                      "size_min": 0.1,
                      "sync": true
                    }
                  },
                  "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#c8c8c8",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
                }} />
              </div>
                
                <h3>CONTACT</h3>
                <div className="container">
                    <h2>Give Us Feedback </h2>
                    <div className="devider"></div>
                    <p>Send us your suggestions and feedback and report bugs here, this will help improving the website.</p>
                    <form 
                        name='contact-form'
                        method="POST" 
                        data-netlify='true'
                        onSubmit='submit'
                        >
                        <input type="hidden" name='form-name' value='contact-form' />
                        <div className="two-input">
                            <div className="input-group">
                                <div className='input-icon' ref={(element) => {inputIcon.current[0] = element}}>
                                    <FaUserCircle />
                                </div>
                                <input required type="text" placeholder='Name' name='name' id='name' onFocus={() => handleFocus(0)} onBlur={() => handleBlur(0)} />
                            </div>
                            <div className="input-group">
                                <div className="input-icon" ref={(element) => {inputIcon.current[1] = element}}>
                                    <MdEmail />
                                </div>
                                <input required type="email" placeholder='Email' id='email' name='email' onFocus={() => handleFocus(1)} onBlur={() => handleBlur(1)} />
                            </div>
                        </div>
                        <textarea required name="message" id="message" placeholder='You Message'></textarea>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact

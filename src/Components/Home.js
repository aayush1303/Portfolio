import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file
import emailjs from 'emailjs-com';


// icons
import { FaMoon, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { GoSun } from "react-icons/go";
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from "react-icons/rx";
import { TbLocation } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { IoMailSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


// images
import profile from '../Images/profile.jpg';
import ux from '../Images/ux.png';
import frontend from '../Images/frontend.png';
import backend from '../Images/backend.png';

import expense from '../Images/expense.png';
import travel from '../Images/travel.png';
import sushi from '../Images/sushi.png';
import odyssey from '../Images/odyssey.png';





const Home = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showNavLinks, setShowNavLinks] = useState(false);
    

    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Get the theme preference from local storage, default to light mode if not set
        return localStorage.getItem('theme') === 'dark';
    });

    const toggleTheme = () => {
        const newTheme = !isDarkMode; // Toggle the theme state
        setIsDarkMode(newTheme);
        // Store the new theme preference in local storage
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    useEffect(() => {
        // Apply the stored theme preference on component mount
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setShowNavLinks(true);
            } else {
                setShowNavLinks(false);
            }
        };

        // Set initial state based on window width
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [scrolled, setScrolled] = useState(false);

    const [homePage, setHomePage] = useState(false);
    const [aboutPage, setAboutPage] = useState(false);
    const [skillPage, setSkillPage] = useState(false);
    const [projectPage, setProjectPage] = useState(false);
    const [contactPage, setContactPage] = useState(false);

    const [showSkills, setShowSkills] = useState({ service1: false, service2: false, service3: false });
    const [showProjects, setShowProjects] = useState({ project1: false, project2: false, project3: false, project4: false, project5: false, project6: false });
    const [showContact, setShowContact] = useState({ contact1: false, contact2: false });


    const handleScroll = () => {

        const screenWidth = window.innerWidth;

        if (window.scrollY > 400) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        //HomePage

        if (screenWidth < 1200) {
            if (window.scrollY > 600) {
                setHomePage(true)
            } else {
                setHomePage(false)
            }
        } else {
            if (window.scrollY <= 630) {
                setHomePage(true)
            } else (
                setHomePage(false)
            )
        }

        //AboutPage

        if (screenWidth < 1200) {
            if (window.scrollY > 600) {
                setHomePage(true)
            } else {
                setHomePage(false)
            }
        } else {
            if (window.scrollY > 630 && window.scrollY <= 1450) {
                setAboutPage(true)
            } else (
                setAboutPage(false)
            )
        }

        //SkillPage

        if (screenWidth < 1200) {
            if (window.scrollY > 600) {
                setSkillPage(true)
            } else {
                setSkillPage(false)
            }
        } else {
            if (window.scrollY > 1450 && window.scrollY <= 2180) {
                setSkillPage(true)
            } else (
                setSkillPage(false)
            )
        }

        //ProjectPage

        if (screenWidth < 1200) {
            if (window.scrollY > 600) {
                setProjectPage(true)
            } else {
                setProjectPage(false)
            }
        } else {
            if (window.scrollY > 2180 && window.scrollY <= 3390) {
                setProjectPage(true)
            } else (
                setProjectPage(false)
            )
        }




        const scrollY = window.scrollY;

        if (screenWidth < 1200) {
            if (scrollY > 1200) {
                setShowSkills({
                    service1: scrollY > 1200,
                    service2: scrollY > 1480,
                    service3: scrollY > 1800
                });
            } else {
                setShowSkills({ service1: false, service2: false, service3: false });
            }
        } else {
            if (scrollY > 1300) {  // example thresholds for larger screens
                setShowSkills({
                    service1: scrollY > 1300,
                    service2: scrollY > 1300,
                    service3: scrollY > 1300
                });
            } else {
                setShowSkills({ service1: false, service2: false, service3: false });
            }
        }

        if (screenWidth < 1200) {
            if (scrollY > 2600) {
                setShowProjects({
                    project1: scrollY > 2600,
                    project2: scrollY > 3000,
                    project3: scrollY > 3400,
                    project4: scrollY > 3800,
                    project5: scrollY > 4300,
                    project6: scrollY > 4800
                });
            } else {
                setShowProjects({ project1: false, project2: false, project3: false, project4: false, project5: false, project6: false });
            }
        } else {
            if (scrollY > 2150) {  // example thresholds for larger screens
                setShowProjects({
                    project1: scrollY > 2150,
                    project2: scrollY > 2150,
                    project3: scrollY > 2150,
                    project4: scrollY > 2500,
                    project5: scrollY > 2500,
                    project6: scrollY > 2500
                });
            } else {
                setShowProjects({ project1: false, project2: false, project3: false, project4: false, project5: false, project6: false });
            }
        }

        if (screenWidth < 1200) {
            if (scrollY > 4100) {
                setShowContact({
                    contact1: scrollY > 4100,
                    contact2: scrollY > 4300
                });
            } else {
                setShowContact({ contact1: false, contact2: false });
            }
        } else {
            if (scrollY > 3200) {  // example thresholds for larger screens
                setShowContact({
                    contact1: scrollY > 3200,
                    contact2: scrollY > 3200
                });
            } else {
                setShowContact({ contact1: false, contact2: false });
            }
        }

    };

    useEffect(() => {

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleHomeClick = () => {
        // Scroll the page to the top
        window.scroll({
            top: 0,
            behavior: 'smooth' // Optional, smooth scrolling animation
        });
    };

    const handleAboutClick = () => {
        // Get the current screen width
        const screenWidth = window.innerWidth;

        // Define target scroll position based on screen width
        let targetScrollPosition = 750; // Default target scroll position

        if (screenWidth > 1200) {
            targetScrollPosition = 650; // Scroll to 1500px if screen width is greater than 1440px
        }

        // Scroll the page to the target position
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth' // Optional, smooth scrolling animation
        });
    };

    const handleProjectsClick = () => {
        // Get the current screen width
        const screenWidth = window.innerWidth;

        // Define target scroll position based on screen width
        let targetScrollPosition = 2850; // Default target scroll position

        if (screenWidth > 1200) {
            targetScrollPosition = 2200; // Scroll to 1500px if screen width is greater than 1440px
        }

        // Scroll the page to the target position
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth' // Optional, smooth scrolling animation
        });
    }

    const handleSkillsClick = () => {
        // Get the current screen width
        const screenWidth = window.innerWidth;

        // Define target scroll position based on screen width
        let targetScrollPosition = 1550; // Default target scroll position

        if (screenWidth > 1200) {
            targetScrollPosition = 1450; // Scroll to 1500px if screen width is greater than 1440px
        }

        // Scroll the page to the target position
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth' // Optional, smooth scrolling animation
        });
    }

    const handleContactClick = () => {
        // Get the current screen width
        const screenWidth = window.innerWidth;

        // Define target scroll position based on screen width
        let targetScrollPosition = 4700; // Default target scroll position

        if (screenWidth > 1200) {
            targetScrollPosition = 3400; // Scroll to 1500px if screen width is greater than 1440px
        }

        // Scroll the page to the target position
        window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth' // Optional, smooth scrolling animation
        });
    }

    const handleIconClick = () => {
        const email = 'aayushpanwar5177@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert(`${email} is copied`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
   
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        const emailParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        emailjs.send(
            'service_4gkbaxf', // replace with your EmailJS service ID
            'template_b0tob7k', // replace with your EmailJS template ID
            formData,
            '2TF_6Ke7WwaEd1oON' // replace with your EmailJS user ID
        ).then((response) => {
            setShowSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setTimeout(() => {
                setShowSuccess(false);
            }, 2000);
        }).catch((error) => {
            alert('Failed to send message. Please try again.');
        });
    };


    return (
        <>
            <div className="navbar">
                <div className="navbar-content">
                    <div className="logo-container">
                        <div className="logo">AP</div>
                        <div className="name-heading">Aayush Panwar</div>
                    </div>
                    {showNavLinks && (
                        <div className='nav-Links'>
                            <a onClick={handleHomeClick} id='homePage' className={homePage ? 'active' : ''}>Home</a>
                            <a onClick={handleAboutClick} id='aboutPage' className={aboutPage ? 'active' : ''}>About</a>
                            <a onClick={handleAboutClick} id='skillPage' className={skillPage ? 'active' : ''}>Skills</a>
                            <a onClick={handleProjectsClick} id='projectPage' className={projectPage ? 'active' : ''}>Projects</a>
                            <a className='contact' onClick={handleContactClick}>Contact Me</a>
                        </div>
                    )}
                    <div className="icons">
                        <div className='different-mode' onClick={toggleTheme}>
                            {isDarkMode ? <GoSun className='sun' /> : <FaMoon className='moon' />}
                        </div>
                        <div className="icon-box">
                            <RiMenu3Line className="icon" id="drop" onClick={handleMenuClick} />
                        </div>
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className={`dropdown-menu ${showMenu ? 'dropmenu' : 'hide'}`}>
                    <div className='cross' onClick={handleMenuClick}><RxCross1 /></div>
                    <ul>
                        <li className='menu'>Menu</li>
                        <li className='aayush'>Aayush</li>
                        <li onClick={handleHomeClick} className='dh'>Home</li>
                        <li onClick={handleAboutClick} className='da'>About</li>
                        <li onClick={handleSkillsClick} style={{ fontSize: '1.3rem' }}>Skills</li>
                        <li onClick={handleProjectsClick} style={{ fontSize: '1.3rem' }}>Projects</li>
                        <li onClick={handleContactClick} style={{ fontSize: '1.3rem' }}>Contact Me</li>
                    </ul>
                </div>
            )}
            <section className="section1">
                <h1 className="centered-heading">Aayush Panwar</h1>
                <div className="image-container">
                    <img src={profile} alt="Profile" />
                </div>
                <div className="rectangle"></div>
                <div className="content-container">
                    <span id='hz'></span>
                    <p className="paragraph">
                        <span className="highlight-text">Front-End Developer</span> with an aptitude for web development and UI/UX design. I’m passionate about learning and always eager to innovate. I love creating new solutions to make every project the best it can be.</p>
                </div>
                <div className='home-icons'>
                    <FaLinkedin id='icon' onClick={() => window.open('https://www.linkedin.com/in/aayush-panwar-00a549251/', '_blank')} />
                    <FaGithubSquare id='icon' onClick={() => window.open('https://github.com/aayush1303', '_blank')} />
                </div>
                <div className='home-btn'>
                    <p id='scroll'>Scroll Down</p>
                    <button className='homeBtn'><IoIosArrowRoundDown className='arrow-icon' /></button>
                </div>
            </section>
            <section className='section2'>
                <div className={`section2-heading ${scrolled ? 'scrolled-heading' : ''}`}>
                    <h2>About Me.</h2>
                    <div className='box'></div>
                </div>
                <div className={`about-container ${scrolled ? 'scrolled-container' : ''}`}>
                    <img src={profile} alt='About Me' className='about-image' />
                    <div className='abt-rectangle'></div>
                </div>
                <div className={`about-content ${scrolled ? 'scrolled-content' : ''}`}>
                    <span id='hz1'></span>
                    <p>Skilled in web development and UI/UX design, I'm driven by a passion for continual learning and innovation. I aim to implement new solutions to deliver best projects.</p>
                    <span class="bullet">&bull;</span><p2> <b>My skills are:</b> Html, Css, Sass, JavaScript, React, Node.js, Express.js, Tailwind , TypeScript, Figma</p2>
                    <div className='about-btn'>
                        <button className='abt-contact'>
                            <a href="/Aayush_CV.pdf" download style={{ textDecoration: 'none' }}>Resume / CV</a>
                        </button>
                        <button className='link' onClick={() => window.open('https://www.linkedin.com/in/aayush-panwar-00a549251/', '_blank')}><CiLinkedin id='linkD' /></button>
                    </div>
                </div>
            </section>
            <section className='section3'>
                <div className='section3-heading'>
                    <h3>My Skills.</h3>
                    <div className='box'></div>
                </div>
                <div className='skill-container'>
                    <div className={`service1 ${showSkills.service1 ? 'show' : ''}`}>
                        <div className='service1-detail'>
                            <div className='ux-container'>
                                <img src={ux} alt='UX' className='ux-img' />
                            </div>
                            <div className='ux-rectangle'></div>
                            <h7>UI / UX</h7>
                            <p>I'm adept at creating visually captivating and intuitive UI/UX designs and am enthusiastic about advancing my knowledge and expertise in this field</p>
                        </div>
                    </div>
                    <div className='service-rectangle1'></div>
                    <div className={`service2 ${showSkills.service2 ? 'show' : ''}`}>
                        <div className='service2-detail'>
                            <div className='frontend-container'>
                                <img src={frontend} alt='UX' className='frontend-img' />
                            </div>
                            <div className='frontend-rectangle'></div>
                            <h9>Frontend Development</h9>
                            <p>I'm skilled at translating stunning and user-friendly UI/UX designs into clean and functional front-end code.</p>
                        </div>
                    </div>
                    <div className='service-rectangle2'></div>
                    <div className={`service3 ${showSkills.service3 ? 'show' : ''}`}>
                        <div className='service3-detail'>
                            <div className='backend-container'>
                                <img src={backend} alt='UX' className='backend-img' />
                            </div>
                            <div className='backend-rectangle'></div>
                            <h11>Responsive Design</h11>
                            <p>I actively explore responsive design techniques to create websites that adjust and deliver a great user experience on all devices</p>
                        </div>
                    </div>
                    <div className='service-rectangle3'></div>
                </div>
            </section>
            <section className='section4'>
                <div className='section4-heading'>
                    <h5>Projects.</h5>
                    <div className='box'></div>
                    <div className='project-container'>
                        <div className={`project1 ${showProjects.project1 ? 'drop' : ''}`}>
                            <div className='project-image'>
                                <img src={sushi} alt='project' className='project-img' />
                            </div>
                            <button className='proj-btn' onClick={() => window.open('https://sushiman1303.netlify.app/', '_blank')}>
                                <MdArrowOutward className='proj-icon' />
                            </button>
                            <div className='proj-detail'>
                                <div className='first-detail'>
                                    <span id='hz2'></span>
                                    <p13>Webpage</p13>
                                </div>
                                <h13>Sushiman</h13>
                                <p>A responsive landing page for a sushi restaurant showcasing its delicious menu, inviting ambiance, and unique selling points. Built with HTML, CSS, and Javascript for animations and interactivity</p>
                                <div className='proj-buttons'>
                                    <button className='proj-code'><FiGithub className='github' /><h onClick={() => window.open('https://github.com/aayush1303/ProductLandingPage', '_blank')}>code</h></button>
                                </div>
                            </div>
                        </div>
                        <div className={`project2 ${showProjects.project2 ? 'drop' : ''}`}>
                            <div className='project-image'>
                                <img src={travel} alt='project' className='project-img' />
                            </div>
                            <button className='proj-btn' onClick={() => window.open('https://travel1303.netlify.app/', '_blank')}><MdArrowOutward className='proj-icon' /></button>
                            <div className='proj-detail'>
                                <div className='first-detail'>
                                    <span id='hz2'></span>
                                    <p13>Landing Page </p13>
                                </div>
                                <h13>HiLink</h13>
                                <p>A responsive website showcasing travel destinations with a focus on user experience through a clean and minimalist front-end design built with Tailwind, Next.js and TypeScript for interactivity</p>
                                <div className='proj-buttons' >
                                    <button className='proj-code'><FiGithub className='github' /><h onClick={() => window.open('https://github.com/aayush1303/AgencyLandingPage', '_blank')}>code</h></button>
                                </div>
                            </div>
                        </div>
                        <div className={`project3 ${showProjects.project3 ? 'drop' : ''}`}>
                            <div className='project-image'>
                                <img src={odyssey} alt='project' className='project-img' />
                            </div>
                            <button className='proj-btn' onClick={() => window.open('https://odyssey1303.netlify.app/', '_blank')}><MdArrowOutward className='proj-icon' /></button>
                            <div className='proj-detail'>
                                <div className='first-detail'>
                                    <span id='hz2'></span>
                                    <p13>Animated Website</p13>
                                </div>
                                <h13>Odyssey</h13>
                                <p>Odyssey Project is a dynamic and immersive website designed to showcase the captivating world of your movie agency. Built with the power of HTML, CSS, and JavaScript.</p>
                                <div className='proj-buttons'>
                                    <button className='proj-code' ><FiGithub className='github' /><h onClick={() => window.open('https://github.com/aayush1303/Odyssey', '_blank')}>code</h></button>
                                </div>
                            </div>
                        </div>
                        <div className={`project4 ${showProjects.project4 ? 'drop' : ''}`}>
                            <div className='project-image'>
                                <img src={expense} alt='project' className='project-img' />
                            </div>
                            <button className='proj-btn' onClick={() => window.open('https://aayush1303.github.io/ExpenseTracker/', '_blank')}><MdArrowOutward className='proj-icon' /></button>
                            <div className='proj-detail'>
                                <div className='first-detail'>
                                    <span id='hz2'></span>
                                    <p13>Simple Web App</p13>
                                </div>
                                <h13>Expense Tracker</h13>
                                <p>A simple web app built with React.js and CSS. Easily log your expenses, track your financial history, and compare your savings to expenditures.</p>
                                <div className='proj-buttons'>
                                    <button className='proj-code'><FiGithub className='github' /><h onClick={() => window.open('https://github.com/aayush1303/ExpenseTracker', '_blank')}>code</h></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section5'>
                <div className={`section5-heading ${showContact.contact1 ? 'contacts' : ''}`}>
                    <h6>Contact Me.</h6>
                    <div className='box'></div>
                </div>
                <div className={`contact-form ${showContact.contact2 ? 'contacts1' : ''}`}>
                    <h>Send me a message</h>
                    <form onSubmit={handleSubmit}>
                        <div className='name-email-container'>
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                className='contact-input'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                className='contact-input'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type='text'
                            name='subject'
                            placeholder='Subject'
                            id='subject'
                            className='contact-input'
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name='message'
                            placeholder='Message'
                            id='message'
                            className='contact-textarea'
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button type='submit' className='contact-btn'><TbLocation id='send' />Send Message</button>
                    </form>
                </div>
                <div className={`contact-icons ${showContact.contact2 ? 'contacts1' : ''}`}>
                    <div className='contact-icon-container' onClick={() => window.open('https://www.linkedin.com/in/aayush-panwar-00a549251/', '_blank')}>
                        <FaLinkedin id='contact' />
                    </div>
                    <div className='contact-icon-container' onClick={handleIconClick} >
                        <IoMailSharp id='contact' />
                    </div>
                </div>
                {showSuccess && (
        <div className='success-container'>
          <FaCheckCircle className='success-icon' />
          <p className='success-message'>Sent Successfully!</p>
        </div>
      )}
            </section>
            <section className='section6'>
                <div className='left-content'>
                    All rights reserved Aayush Panwar
                </div>
                <div className='right-content'>
                    <span id='h' onClick={handleHomeClick}>Home</span>
                    <span id='a' onClick={handleAboutClick}>About</span>
                    <span id='s' onClick={handleSkillsClick}>Skills</span>
                    <span id='p' onClick={handleProjectsClick}>Projects</span>
                </div>
            </section>
        </>
    );
};

export default Home;

import pfp from '../assets/CV_pfp.jpeg'
import '../styles/tokens.css'
import { useRef } from "react";
import { MdWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { IoRoseOutline } from "react-icons/io5";
export default function MainPage() {
    const expRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);

    const scrollTo = (ref) => {
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return(     
        <div>
                {/* <video className='bg-video' autoPlay loop muted playsInline>
                    <source src="/Users/anavidova/Documents/CV_ana/cv_front/src/assets/background_video.mp4" type='video/mp4' />
                </video> */}
                <div className='container'>
                    <div className='content'>
                        <div className='image_row'>
                            <img className='image' src={pfp} style={{height: 200, width: 200, objectFit: 'cover', borderRadius: "50%"}} />
                            <div className='text_block' style={{alignItems: "flex-start"}}>
                                <h2 style={{fontSize: 40}}>Ana Vidova</h2>
                                <h1 style={{fontSize: 50}}>Data | Development | Security</h1>
                            </div>
                        </div>
                        <div className='body_row'>
                            <div className='sidebar_box'>
                                <nav className="sidebar">
                                    <button onClick={() => scrollTo(expRef)}><MdWork />&nbsp;Experience</button>
                                    <button onClick={() => scrollTo(skillsRef)}><FaTools />&nbsp;Skills</button>
                                    <button onClick={() => scrollTo(projectsRef)}><AiOutlineProject />&nbsp;Projects</button>
                                    <button onClick={() => scrollTo(aboutRef)}><IoRoseOutline />&nbsp;About</button>
                                </nav>  
                            </div>
                        
                            <div className="scroll_panel">
                                <section ref={expRef} className="page-section">Experience</section>
                                    <div className='job-row'>
                                        <div className='job-left'>
                                            <p className='job-title'>Full-Stack Intern</p>
                                            <a href="https://refracted.eu/" target="_blank" rel="noopener noreferrer">Refracted, Lier</a>
                                            <p className='job-dates'>Feb - June 2025</p>
                                        </div>
                                        <div className='job-right'>
                                            <p className='description'>Developed an administrative portal and content delivery system to manage vital application statistics and administrative tasks.</p>
                                            <p className='job-skills'>React NestJS PostgreSQL Prisma Azure</p>
                                        </div>                  
                                    </div>
                                    <div className='job-row'>
                                        <div className='job-left'>
                                            <p className='job-title'>Full-Stack Developer</p>
                                            <a href="https://ivuworks.com/" target="_blank" rel="noopener noreferrer">IvuWorks, Sofia</a>
                                            <p className='job-dates'>September 2025</p>
                                        </div>
                                        <div className='job-right'>
                                            <p className='description'>Developing software for clients. Currently building "Offer craft": Helping businesses focus on growth, not paperowrk.</p>
                                            <p className='job-skills'>React Django Debian MySQL</p>
                                        </div>                  
                                    </div>
                                    <div className='job-row'>
                                        <div className='job-left'>
                                            <p className='job-title'>Human Resources</p>
                                            <a href="https://www.instagram.com/esn_mechelen/" target='_blank' rel="noopener noreferrer">ESN Mechelen</a>
                                            <p className='job-dates'>Feb - June 2024</p>
                                        </div>
                                        <div className='job-right'>
                                            <p className='description'>Managing and taking care of 20+ volunteers by creating a healthy work environment, organising  team buildings and workshops for team balance, coordination and growth.</p>
                                            <p className='job-skills'>Leadership | Feedback | Event | Management | Collaborations</p>
                                        </div>                  
                                    </div>
                                    <div className='job-row'>
                                        <div className='job-left'>
                                            <p className='job-title'>Project Management</p>
                                            <a href="https://www.instagram.com/esn_mechelen/" target='_blank' rel="noopener noreferrer">ESN Mechelen</a>
                                            <p className='job-dates'>Sep 2024 - Jan 2025</p>
                                        </div>
                                        <div className='job-right'>
                                            <p className='description'>Organising large-scale events for 50+ international students.</p>
                                            <p className='job-skills'>Google Forms | MS Office | Miro board </p>
                                        </div>                  
                                    </div>
                                <section ref={skillsRef} className="page-section">Skills</section>
                                <section ref={projectsRef} className="page-section">Projects</section>
                                <section ref={aboutRef} className="page-section">About</section>
                            </div>
                        </div>
                    </div>
                </div>
                

                
        </div> 
    )
}
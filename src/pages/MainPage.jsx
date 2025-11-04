import pfp from '../assets/CV_pfp.jpeg'
import '../styles/tokens.css'
export default function MainPage() {
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
                                <h2 style={{fontSize: 30}}>Ana Vidova</h2>
                                <h1 style={{fontSize: 40}}>Data | Development | Security</h1>
                            </div>
                        </div>
                        <nav className="sidebar">
                            <a href="#section-experience">Experience</a>
                            <a href="#section-skills">Skills</a>
                            <a href="#section-projects">Projects</a>
                            <a href="#section-about">About</a>
                        </nav>

                        <div className="information">
                            <section id="section-experience" className="page-section">Experience</section>
                            <section id="section-skills" className="page-section">Skills</section>
                            <section id="section-projects" className="page-section">Projects</section>
                            <section id="section-about" className="page-section">About</section>
                        </div>
                    </div>
                </div>
                

                
        </div> 
    )
}
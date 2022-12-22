import React from 'react'
import './project.css'

const Project = () => {
    return (
        <>
            <section className='projectWrap' id='portfolio'>
                <div className="title">
                    <span>03.</span>
                    <h3>Some Things I've Built</h3>
                    <hr />
                </div>

                <div id="projects">
                    <div className="container">
                        <div className="all-items">
                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src={require('../../images/3p-brains.png')} alt='' />
                                    </div>
                                </div>
                                <div className="right">
                                    <h4 className="featured-project">Featured Project</h4>
                                    <h3 className="project-title">3P Brains</h3>
                                    <p className="project-desc">3P Brains Is A Mental Health Care Platform Which Provides Online Diagnosis & Therapy To Those Who Suffering From      Mental Health Problems Like Depression And Anxiety.</p>
                                    <div className="bottom">
                                        <span>HTML5 </span><span>CSS3 </span><span>Javascript </span>
                                        <div className="button">
                                            <a href="/"><i class="fa-brands fa-github"></i></a>
                                            <a href="https://3pbrains.netlify.app/" target="_blanck" className='left'><i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src={require('../../images/3p-brains.png')} alt='' />
                                    </div>
                                </div>
                                <div className="right">
                                    <h4 className="featured-project">Featured Project</h4>
                                    <h3 className="project-title">Online real time chat app</h3>
                                    <p className="project-desc">3P Brains Is A Mental Health Care Platform Which Provides Online Diagnosis & Therapy To Those Who Suffering From      Mental Health Problems Like Depression And Anxiety.</p>
                                    <div className="bottom">
                                        <span>HTML5 </span><span>CSS3 </span><span>Javascript </span>
                                        <div className="button">
                                            <a href="/" className='right'><i class="fa-brands fa-github"></i></a>
                                            <a href="/" ><i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src={require('../../images/3p-brains.png')} alt='' />
                                    </div>
                                </div>
                                <div className="right">
                                    <h4 className="featured-project">Featured Project</h4>
                                    <h3 className="project-title">3P Brains</h3>
                                    <p className="project-desc">3P Brains Is A Mental Health Care Platform Which Provides Online Diagnosis & Therapy To Those Who Suffering From      Mental Health Problems Like Depression And Anxiety.</p>
                                    <div className="bottom">
                                        <span>HTML5 </span><span>CSS3 </span><span>Javascript </span>
                                        <div className="button">
                                            <a href="/"><i class="fa-brands fa-github"></i></a>
                                            <a href="https://3pbrains.netlify.app/" target="_blanck" className='left'><i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="item">
                                <div className="left">
                                    <div className="img">
                                        <img src={require('../../images/3p-brains.png')} alt='' />
                                    </div>
                                </div>
                                <div className="right">
                                    <h4 className="featured-project">Featured Project</h4>
                                    <h3 className="project-title">Online real time chat app</h3>
                                    <p className="project-desc">3P Brains Is A Mental Health Care Platform Which Provides Online Diagnosis & Therapy To Those Who Suffering From      Mental Health Problems Like Depression And Anxiety.</p>
                                    <div className="bottom">
                                        <span>HTML5 </span><span>CSS3 </span><span>Javascript </span>
                                        <div className="button">
                                            <a href="/" className='right'><i class="fa-brands fa-github"></i></a>
                                            <a href="/" ><i class="fa-solid fa-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Project
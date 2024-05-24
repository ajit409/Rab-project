import React from 'react';
import './Header.css'
import { Link as ScrollLink } from "react-scroll";


const Header = () => {


    return (
        <>
            <header>
                <main>
                    <div className="container is-menu">
                        <div className="menu_wrap">
                            <div className="menu">

                                <a href="#hero" className="home-logo">
                                    <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659ae66ac6ff554eb69c20d9_Logo-icon.svg" className="logo-nav" />
                                </a>
                                {/* <a href="#projekte" className="menu_link " >
                                    <div className="menu_link-bg" ></div>
                                    <p className="menu_link-text">Projekte</p>
                                </a> */}



                                <ScrollLink to="project" smooth={true} className="menu_link">
                                    <p className="menu_link-text">Project</p>
                                    <div className="menu_link-bg"></div>
                                </ScrollLink>


                                <ScrollLink to="product" smooth={true} className="menu_link">
                                    <p className="menu_link-text">Product</p>
                                    <div className="menu_link-bg"></div>
                                </ScrollLink>

                                <ScrollLink to="testimonial" smooth={true} className="menu_link">
                                    <p className="menu_link-text">Testimonial</p>
                                    <div className="menu_link-bg"></div>
                                </ScrollLink>


                                <ScrollLink to="stu" smooth={true} className="menu_link button-primary">
                                <div className="button-text-primary">Join Studio</div>
                                    <div className="button-circle-primary"></div>

                                </ScrollLink>



                                {/* <a href="#" className="button-primary">
                                    <div className="button-text-primary">Studio Launch</div>
                                    <div className="button-circle-primary"></div>
                                </a> */}
                                <div className="menu_shape" >
                                    <div className="menu_shape-bg"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section id="hero">
                        <div className="padding-global">
                            <div className="container-large">
                                <div className="header75_component">
                                    <div className="header75_content">
                                        <div className='sidepic'>
                                        <div className="f-pic r-1">
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa195fccf5c14abe18ded_Reached%20Views.svg" className="hero-pic" />
                                        </div>
                                        <div className="cilent-pic l-3">
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa19783f545731ef71b14_Kunden.svg" className="hero-pic" />
                                        </div>

                                        <div className="c-pic l-2">
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa196524adf76bfc7ca9c_Mehr%20Leads.svg" className="hero-pic" />

                                        </div>


                                        <div className="d-pic r-3" >
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/65a12daa8175f9b30ba18986_Reline%20photoshooting.png" className="hero-pic" />
                                        </div>

                                        <div className="e-pic l-1" >
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659aa196264ad19f204851d9_Tools.svg" className="hero-pic" />

                                        </div>

                                        <div className="webflow-pic r-2" >
                                            <img src="https://assets-global.website-files.com/65961828f21f96309de14a8f/659b4fc4faadfb8ed90b8b4e_Webflow.svg" className="hero-pic" />

                                        </div>
                                        </div>
                               



                                        <div className="text-align-center" id="stu">
                                            <div>
                                                <div className="margin-small ">
                                                    <div className="tagline header">
                                                        <div className="text-weight-semibold">Creative Studio</div>
                                                    </div>
                                                    <h1 className="heading-1">Memory Power is the top coding learning platform for young</h1>
                                                </div>
                                                <div className="sub-text-hero">
                                                    <p className="text-size-medium-hero">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been industry's standard dummy text since the 1500s</p>
                                                </div>
                                                <div className="spacer-medium"></div>
                                                <div className="button-group">
                                                    <a href="/kontakt" className="button-primary">
                                                        <div className="button-text-primary">Join Studio</div>
                                                        <div className="button-circle-primary"></div>
                                                    </a>
                                                    <a href="https://www.rabsnetsolutions.com/" target="_blank" className="button-sec">
                                                        <div className="button-text-sec">Book Here</div>
                                                        <div className="button-circle-sec"></div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>

            </header>
        </>
    )
}

export default Header;





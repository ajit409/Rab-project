import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { faInstagram, faLinkedin, faBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="padding-global">
                    <div className="padding-vertical">
                        <div className="padding-bottom">
                            <div className="footer_top-wrapper">
                                <div className="footer_left-wrapper">
                                    <a href="#">
                                        <img className="memory" src="https://memorypower.rabsconnect.in/static/media/logo.861aa9e8c50bf8c2a9f3.png" />
                                    </a>
                                </div>
                                <div className="footer_legal-list">
                                    <a href="#" target="_blank" className="footer_legal-link">Rechtliche Hinweise</a>
                                    <div>
                                        <div className='locales-list'>
                                            <div>
                                                <a href="#" className="link-current">DE</a>
                                            </div>
                                            <div>
                                                <a href='#' className="link">EN</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="padding-medium">
                            <div className="footer_bottom-wrapper">
                                <div className="footer_legal-list">
                                    <div className="social-icons1_list">
                                        <a href="mailto:" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faEnvelope} style={{ width: '22px', height: '22px' }}/>
                                            </div>
                                        </a>
                                        <a href="https://www.instagram.com/" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faInstagram} style={{ width: '22px', height: '22px' }} />
                                            </div>
                                        </a>
                                        <a href="https://www.linkedin.com/" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faLinkedin} style={{ width: '22px', height: '22px' }} />
                                            </div>
                                        </a>
                                        {/* <a href="https://www.behance.net/" className="social-icons1_link">
                                            <div className="icon-embed-xsmall">
                                                <FontAwesomeIcon icon={faBehance} style={{ width: '22px', height: '22px' }} />
                                            </div>
                                        </a> */}

                                      
                                    </div>
                                </div>
                                <div className="footer_credit-text">© 2024 Memory Power</div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;

import React from "react";

import linkedin from '../../images/icon_linkedin.png'
import twitter from '../../images/icon_twitter.png'
import instagram from '../../images/icon_instagram.png'
import git from '../../images/icon_git.png'


const Footer = () => (
    <footer className="footer">
        <div className="footer__wrapper">
            <p>Follow ME!</p>
            <nav className="footer__nav">
                <ul className="footer__navList">
                    <li className="footer__navItem--forrow"><a href="https://www.linkedin.com/in/mayu-imanaka-19a306194/" target="_blank" rel="noopener noreferrer"><img
                        src={linkedin} alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://www.instagram.com/mayu_cuuuu/"
                        target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://twitter.com/cukioo_mayu" target="_blank" rel="noopener noreferrer"><img src={twitter}
                        alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://github.com/Mayu-I" target="_blank" rel="noopener noreferrer"><img src={git}
                        alt="" /></a></li>
                </ul>
            </nav>
            <div className="footer__copy">
                <p>Copyright &copy; 2019 signalog All Rights Reserved.</p>
            </div>
        </div>
    </footer>
)

export default Footer
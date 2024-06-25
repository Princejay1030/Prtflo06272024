import React from 'react';

// Styles sheet
import './Footer.css';

// Assets
import Logo from '../../assets/img/Logo.svg';
import behance from '../../assets/img/behance.svg';
import linkedin from '../../assets/img/linkedin.svg';
import twitter from '../../assets/img/twitter.svg';

function Footer() {
  return (
    <>
        <footer>
            <section className="sections">
                <div className="containers ls">
                    <div className="content">
                        <div className="logo-content">
                            <img src={Logo} alt="" />
                            <p className="t-lg-regular">
                                Crafting digital experiences, one pixel at a time.
                            </p>
                        </div>
                        <div className="social-content">
                            <a href="https://www.behance.net/jayvincismael">
                                <img src={behance} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/in/jayvin-carl-m-632a8b179/">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://twitter.com/Night85438467">
                                <img src={twitter} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="content">
                        <p className="t-md-regular">
                            © 2024 Jayvin Carl. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>
        </footer>
    </>
  )
}

export default Footer

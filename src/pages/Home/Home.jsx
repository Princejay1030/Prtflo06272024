import React from 'react';
import { Link } from 'react-router-dom';

// Styles sheet
import './Home.css';

// Compnenents
import Marquee from '../../Components/Marquee/Marquee';

// Assets
import illus1 from '../../assets/img/Illustration1.png';
import illus2 from '../../assets/img/Illustration2.png';
import illus3 from '../../assets/img/Illustration3.png';
import illus4 from '../../assets/img/Illustration4.png';
import avatar from '../../assets/img/Avatar.svg';
import avatar1 from '../../assets/img/Avatar-1.svg';
import avatar2 from '../../assets/img/Avatar-2.svg';
import avatar3 from '../../assets/img/Avatar-3.svg';
import avatar4 from '../../assets/img/Avatar-4.svg';
import avatar5 from '../../assets/img/Avatar-5.svg';
import arrowDown from '../../assets/img/Polygon.svg';

function Home() {
  return (
    <>
        <div className="bg"></div>
            {/* ========== Hero Section ========== */}
            <section className='sections top-space'>
                <div className="containers hero">
                    <div className="content">
                        <h1 className='d-md-bold'>Yow, I’m Jayvin!</h1>
                        <p className='t-xl-regular'>I blend creativity with functionality in the digital world, crafting stories in every pixel with coffee-fueled energy. Let's create awesome experiences together! 🚀✨</p>
                    </div>
                    <div className="content">
                        <img src={illus1} alt="" />
                    </div>
                </div>
            </section>

           <section className="sections">
                <div className="mq-container">
                    <div className="content mq">
                        <Marquee />
                    </div>

                    <div className="content t-i">
                        <p className="t-xl-bold">Scroll Down</p>
                        <div>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
           </section>

            {/* ========== Featured Project Section ========== */}
            <section className='sections' id='fw'>
                <div className="containers fp">
                    <div className="heading-and-text">
                        <h3 className='d-md-bold'>
                            Featured Projects
                        </h3>
                        <p className="t-xl-regular">
                            Step into my work, where ideas come to life through sleek interfaces and captivating visuals. Let the immersive experiences begin!
                        </p>
                    </div>

                    <div className="cards-container">
                        <div className="cards">
                            <div className="card-image"></div>
                            <div className="card-details">
                                <div className="chip">
                                    <p className="t-sm-medium">
                                        Mobile app
                                    </p>
                                </div>
                                <h3 className="d-sm-bold">
                                    CliQQ Mobile
                                </h3>
                                <p className="t-lg-regular">
                                    CliQQ is a mobile app designed for 7-Eleven shoppers. It offers a digital loyalty program, convenient payment options, and exclusive deals. Earn points, enjoy rewards, and make your 7-Eleven visits more rewarding with CliQQ.
                                </p>
                                <Link to='/CliQQ' className='vp-btn'>
                                    <p className='t-xl-medium'>View project</p>
                                </Link>
                                {/* <a href={CliQQ} className='vp-btn'><p className='t-xl-medium'>View project</p></a> */}
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card-image"></div>
                            <div className="card-details">
                                <div className="chip chip-green">
                                    <p className="t-sm-medium">
                                        Web progressive app
                                    </p>
                                </div>
                                <h3 className="d-sm-bold">
                                    Maxicare Members Portal
                                </h3>
                                <p className="t-lg-regular">
                                    CliQQ is a mobile app designed for 7-Eleven shoppers. It offers a digital loyalty program, convenient payment options, and exclusive deals. Earn points, enjoy rewards, and make your 7-Eleven visits more rewarding with CliQQ.
                                </p>
                                <a href="#none" className='vp-btn'><p className='t-xl-medium'>View project</p></a>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card-image"></div>
                            <div className="card-details">
                                <div className="chip chip-orange">
                                    <p className="t-sm-medium">
                                        Web landing page
                                    </p>
                                </div>
                                <h3 className="d-sm-bold">
                                    TrashLink Mobile
                                </h3>
                                <p className="t-lg-regular">
                                    CliQQ is a mobile app designed for 7-Eleven shoppers. It offers a digital loyalty program, convenient payment options, and exclusive deals. Earn points, enjoy rewards, and make your 7-Eleven visits more rewarding with CliQQ.
                                </p>
                                <a href="#none" className='vp-btn'><p className='t-xl-medium'>View project</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== Design and Beyond Section ========== */}
            <section className="sections" id='ab'>
                <div className="containers db">
                    <div className="content">
                        <img src={illus2} alt="" />
                    </div>
                    <div className="content">
                        <div className="heading-and-text">
                            <h3 className="d-md-bold">
                                Design and Beyond
                            </h3>
                            <p className="t-xl-regular">
                                When I'm not deep in pixels and prototypes, I'm diving into digital illustration—my boundless creative escape. Crafting the perfect cup of coffee fuels my creativity and productivity. Coffee is my muse!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             {/* ========== Harmony of Jazz and Design Section ========== */}
             <section className="sections">
                <div className="containers wm">
                    <div className="content">
                        <img src={illus3} alt="" />
                    </div>
                    <div className="content">
                        <h3 className="d-md-bold">
                            Harmony of Jazz and Design
                        </h3>
                        <p className="t-xl-regular">
                            Jazz is my life's soundtrack—I'm always vibing to its rhythmic tunes. Picture me, huge coffee mug in hand, as I improvise on my piano, letting the music and caffeine fuel my design creativity.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== Work with Me Section ========== */}
            <section className="sections">
                <div className="containers hjd">
                    <div className="content">
                        <img src={illus4} alt="" />
                    </div>
                    <div className="content">
                        <h3 className="d-md-bold">
                            Why Work With Me
                        </h3>
                        <p className="t-xl-regular">
                            As a designer, I mix creativity with digital illustration, endless coffee quests, and jazz vibes. Every project is my chance to blend passion with your vision, crafting experiences that truly resonate.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========== Testimonial Section ========== */}
            <section className="sections">
                <div className="containers ttm">
                    <div className="content">
                        <h3 className="d-md-bold">
                            Testimonial
                        </h3>
                        <p className="t-xl-regular">
                            Cheers to Teamwork: Hanging Out with My Amazing Collaborators!
                        </p>
                    </div>
                    <div className="content ttm-container">
                        <div className="ttm-cards">
                            <div className="an">
                                <img src={avatar} alt="" />
                                <div className="np">
                                    <h6 className="d-xs-bold">
                                        Leira Ubiña
                                    </h6>
                                    <p className="t-lg-medium">
                                        Project Manager @ PixelTrue
                                    </p>
                                </div>
                            </div>
                            <div className="ut">
                                <p className="t-lg-regular">
                                    In the brief period of managing Jayvin Muring, I've been consistently impressed by his outstanding qualities and contributions to our team.As a fast learner, Jayvin quickly grasps new concepts and applies them effectively. His proficiency in UI design is evident, making him an asset to our projects. Jayvin has this friendliness and skill that shine through in his work. Even in my role as his manager, I've found myself learning from his expertise, especially in navigating Figma, where he graciously shared his knowledge. One standout trait of Jayvin is his exceptional speed in delivering UI designs. He consistently produces high-quality work in nearly half the time it usually takes, showcasing his efficiency and dedication. Moreover, his ability to adapt swiftly to changing processes, along with his friendly and respectful demeanor, fosters a positive work environment, contributing to effective collaboration and team synergy.In conclusion, I highly recommend Jayvin Muring as a designer. His rapid learning, skillful contributions, exceptional speed in UI design, adaptability to change, and collaborative approach make him an invaluable member of our team.
                                </p>
                            </div>
                        </div>
                        <div className="ttm-container-1">
                            <div className="ttm-cards">
                                <div className="an">
                                    <img src={avatar1} alt="" />
                                    <div className="np">
                                        <h6 className="d-xs-bold">
                                            Kim Medina
                                        </h6>
                                        <p className="t-lg-medium">
                                            Senior UI/UX Designer
                                        </p>
                                    </div>
                                </div>
                                <div className="ut">
                                    <p className="t-lg-regular">
                                        Jayvin and I worked together on several projects for around 2 years.I can confidently say that he was a reliable teammate, he always gets the job done quickly without sacrificing quality. During the years that we have worked together, he showcased his eagerness to deliver the job in the best way possible. He was also always finding new ways to innovate our working process and make our jobs easier. He is very skilled and knowledgeable when it comes to designing and is always open to criticism. He has very high potential, and adding him to your team will definitely make it better.
                                    </p>
                                </div>
                            </div>
                            <div className="ttm-inner-container-2">
                                <div className="ttm-cards">
                                    <div className="an">
                                        <img src={avatar2} alt="" />
                                        <div className="np">
                                            <h6 className="d-xs-bold">
                                                Trisha Quinto
                                            </h6>
                                            <p className="t-lg-medium">
                                                UI/UX Designer
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ut">
                                        <p className="t-lg-regular">
                                            Jayvin's UI/UX Design skills are truly impressive, especially in creating and implementing design systems. Moreover, his dedication to teamwork and collaboration is outstanding. Without a doubt, Jayvin is a valuable asset to any design team.
                                        </p>
                                    </div>
                                </div>
                                <div className="ttm-cards">
                                    <div className="an">
                                        <img src={avatar3} alt="" />
                                        <div className="np">
                                            <h6 className="d-xs-bold">
                                                Dar Soriano
                                            </h6>
                                            <p className="t-lg-medium">
                                                Senior Graphic Designer @ Tawk.to
                                            </p>
                                        </div>
                                    </div>
                                    <div className="ut">
                                        <p className="t-lg-regular">
                                            Jayvin is a colleague of mine whom I hold deep respect for. I had the pleasure of working with him from our Design team and he exhibits brilliance in his field. He is confident and applies the necessary knowledge and skills to tasks assigned to him, plus he has a strong work ethic that enables him to fulfill his duties well. Jayvin is also approachable, easy to work with, and always delivers his best of what he can do.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ttm-container-2">

                            <div className="ttm-cards">
                                <div className="an">
                                    <img src={avatar4} alt="" />
                                    <div className="np">
                                        <h6 className="d-xs-bold">
                                            Krunal Ramoliya
                                        </h6>
                                        <p className="t-lg-medium">
                                            UI/UX Designer @ PixelTrue
                                        </p>
                                    </div>
                                </div>
                                <div className="ut">
                                    <p className="t-lg-regular">
                                        I highly recommend Jayvin Carl Muring. His meticulous approach to design, deep understanding of user-centric principles, and ability to think outside the box consistently result in exceptional design solutions. His positive attitude and strong work ethic contribute to a collaborative and productive work environment. His strong technical skills, combined with his passion for design, make them a highly valuable member of our team.
                                    </p>
                                </div>
                            </div>
                            <div className="ttm-cards">
                                <div className="an">
                                    <img src={avatar5} alt="" />
                                    <div className="np">
                                        <h6 className="d-xs-bold">
                                            Michael Rae Daabay
                                        </h6>
                                        <p className="t-lg-medium">
                                            Design Lead @ Tawk.to
                                        </p>
                                    </div>
                                </div>
                                <div className="ut">
                                    <p className="t-lg-regular">
                                        Jayvin was one of the team members on my squad who was a quiet yet courageous teammate.He is part of the mobile product design team. Over the years, I've witnessed him grow into his role and challenged me to be a better Design leader.During our time together, he did an outstanding job fulfilling his duties. One of the confident team members I've hired and managed.Please take care of this a gem for the new and incoming team. I saw a lot of potential in his endeavor.Thank you very much Jay.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
        <div className="bg2"></div>
    </>
  )
}

export default Home

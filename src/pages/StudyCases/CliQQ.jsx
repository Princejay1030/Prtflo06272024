import React, { useState } from 'react';
import '../StudyCases/SCmain.css';

import LightBox from '../../Components/LightBox/LightBox';
import PageTransition from '../../Components/PageTransition/PageTransition';

import Cliqqimg1 from '../../assets/img/Cliqqimg1.png';
import Cliqqimg2 from '../../assets/img/Cliqqimg2.png';
import Cliqqimg3 from '../../assets/img/Cliqqimg3.png';
import Cliqqimg4 from '../../assets/img/Cliqqimg4.png';
import Cliqqimg5 from '../../assets/img/Cliqqimg5.png';
import Cliqqimg6 from '../../assets/img/Cliqqimg6.png';
import Cliqqimg7 from '../../assets/img/Cliqqimg7.png';
import Cliqqimg8 from '../../assets/img/Cliqqimg8.png';
import Icon1 from '../../assets/img/Icon1.png';
import Icon2 from '../../assets/img/Icon2.png';
import Icon3 from '../../assets/img/Icon3.png';
import Icon4 from '../../assets/img/Icon4.png';
import Iphone1 from '../../assets/img/Iphone1.png';
import Iphone2 from '../../assets/img/Iphone2.png';
import Iphone3 from '../../assets/img/Iphone3.png';
import Screen1 from '../../assets/img/Screen1.png';
import Screen2 from '../../assets/img/Screen2.png';
import Screen3 from '../../assets/img/Screen3.png';
import Screen4 from '../../assets/img/Screen4.png';
import Screen5 from '../../assets/img/Screen5.png';
import Screen6 from '../../assets/img/Screen6.png';
import Screen7 from '../../assets/img/Screen7.png';
import Screen8 from '../../assets/img/Screen8.png';
import Screen9 from '../../assets/img/Screen9.png';
import Screen10 from '../../assets/img/Screen10.png';
import Screen11 from '../../assets/img/Screen11.png';
import Screen12 from '../../assets/img/Screen12.png';
import Screen13 from '../../assets/img/Screen13.png';
import Screen14 from '../../assets/img/Screen14.png';
import Screen15 from '../../assets/img/Screen15.png';

function CliQQ() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const handleLightboxOpen = (image) => {
    setLightboxImage(image);
    setIsLightboxOpen(true);
    document.body.style.overflow ='hidden' 
  }

  const handleCloseLightbox = () => {
      setIsLightboxOpen(false);
      setLightboxImage('');
      document.body.style.overflow =''
  };

  return (
    <>
      <PageTransition />
      <div className="bg"></div>
      <main>
        {/* Hero section */}
        <section className="sections">
          <div className="sc-outer-container flex">
            <div className="cover mb-1_5"></div>
            <div className="sc-inner-container">
              <div className="content p-block-1">
                <h5 className="d-sm-bold m-bottom-0_25">
                  CLiQQ Mobile App Redesign
                </h5>
                <div className="chip m-bottom-1">
                  <p className="t-sm-medium">
                    Mobile app
                  </p>
                </div>
                <p className="t-md-medium">
                  CliQQ is a mobile app designed for 7-Eleven shoppers. It offers a digital loyalty program, convenient payment options, and exclusive deals. Earn points, enjoy rewards, and make your 7-Eleven visits more rewarding with CliQQ. 
                </p>
              </div>
              <div className="content p-block-1">

                <div className="row">
                  <div className="col">
                    <p className="t-sm-regular">
                      Role
                    </p>
                    <p className="t-md-medium">
                      UI/UX Designer
                    </p>
                  </div>
                  <div className="col">
                    <p className="t-sm-regular">
                      Duration
                    </p>
                    <p className="t-md-medium">
                      3 Months
                    </p>
                  </div>
                  <div className="col">
                    <p className="t-sm-regular">
                      Tools
                    </p>
                    <p className="t-md-medium">
                      Figma, Adobe Fresco, Notion, Adobe Illustrator, Procreate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem section */}
        <section className="sections">
          <div className="sc-containers flex-2 row-rev">
            <div className="content">
            <h5 className="d-sm-bold m-bottom-0_25">
                Problem
              </h5>
              <p className="t-md-regular">
                The current CliQQ mobile app lacks intuitive navigation, hindering user engagement and satisfaction. A redesign is necessary to improve user experience, streamline flows, and promote active engagement through a visually appealing interface.
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg1} alt="Illustration" className='sc-img' />
            </div>
          </div>
        </section>

        {/* Old design section */}
        <section className="sections">
          <div className="sc-containers flex">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Old design
              </h5>
              <p className="t-md-regular">
                Here is the original screens of the CliQQ mobile app before my redesign and highlight some of the key usability issues.
                <br />
                <br />
                Home Screen: Cluttered layout with unclear navigation.
                Confusing Navigation: Navigation icons and labels were unclear and unintuitive, making it difficult for users to find and access desired features efficiently.
                <br />
                <br />
                By examining these old screens, we can identify specific design elements and usability challenges that drove my decision to redesign the CliQQ app.
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg2} alt="Screen" className='sc-img lb-img' onClick={() => handleLightboxOpen(Cliqqimg2)} />
              <LightBox isOpen={isLightboxOpen} image={lightboxImage} onClose={handleCloseLightbox} />
            </div>
          </div>
        </section>

        {/* Solution section */}
        <section className="sections">
          <div className="sc-containers flex-2">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Solution
              </h5>
              <p className="t-md-regular">
                The CliQQ mobile app redesign I incorporated character-based design, playful icon illustrations, gamification elements, streamlined navigation, and enhanced visual design. These changes made the app more engaging, friendly, and visually appealing, fostering active participation and a sense of enjoyment and reward for users.
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg3} alt="Illustration" className='sc-img' />
            </div>
          </div>
        </section>

        {/* Research section */}
        <section className="sections">
          <div className="sc-containers flex-2 row-rev">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Research
              </h5>
              <p className="t-md-regular">
                In redesigning the CliQQ mobile app, I analyzed app store feedback and conducted informal usability tests with friends to identify user needs and pain points. This guided the creation of a more user-centered design, with insights shaping key decisions to enhance user experience and effectiveness.
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg4} alt="" className='sc-img' />
            </div>
          </div>
        </section>

        {/* Findings section */}
        <section className="sections">
          <div className="sc-containers flex">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Findings
              </h5>
              <p className="t-md-regular">
                My user research provided several key insights
              </p>
            </div>
            <div className="content">
              <div className="row1">
                <div className="col1">
                  <p className="t-lg-bold m-bottom-0_75">
                    Navigation challenges
                  </p>
                  <p className="md-regular">
                    Users expressed difficulties in finding and accessing specific features within the app. Some reported confusion in navigating through different sections, leading to frustration.
                  </p>
                </div>
                <div className="col1">
                  <p className="t-lg-bold m-bottom-0_75">
                    Loyalty program understanding
                  </p>
                  <p className="md-regular">
                    Many users struggled to grasp the details of the loyalty program, such as earning points and redeeming rewards. This lack of clarity hindered their ability to fully benefit from the program.
                  </p>
                </div>
                <div className="col1">
                  <p className="t-lg-bold m-bottom-0_75">
                    Deals utilization
                  </p>
                  <p className="md-regular">
                    Users faced obstacles in effectively taking advantage of deals offered within the app. Some mentioned difficulties in discovering these deals or redeeming them at the checkout.
                  </p>
                </div>
                <div className="col1">
                  <p className="t-lg-bold m-bottom-0_75">
                    Aesthetic design
                  </p>
                  <p className="md-regular">
                    Users voiced dissatisfaction with the aesthetic design of the current CliQQ mobile app, describing it as outdated and lacking visual appeal, which detracted from their overall experience and perception of the app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Iconography section */}
        <section className="sections">
          <div className="sc-containers flex">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Iconography
              </h5>
              <p className="t-md-regular">
                In the Cliqq mobile app redesign, I conducted a significant overhaul of the iconography, prioritizing usability and clarity to ensure intuitive and recognizable user interactions. Thorough evaluation and redesign of existing icons aligned them with the updated visual style, emphasizing simplicity and visual hierarchy. The refined iconography enhanced user understanding and navigation, ultimately improving overall usability and creating a delightful user experience within the Cliqq mobile app.
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg5} alt="Illustration" className='sc-img lb-img' onClick={() => handleLightboxOpen(Cliqqimg5)} />
              <LightBox isOpen={isLightboxOpen} image={lightboxImage} onClose={handleCloseLightbox} />
            </div>
          </div>
        </section>

        {/* Typography section */}
        <section className="sections">
          <div className="sc-containers flex">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Typography
              </h5>
              <p className="t-md-regular">
                When working on the CliQQ mobile app redesign, the choice of typography held great significance in defining the app's visual identity and overall user experience. After thorough evaluation and consideration, I carefully selected "Nunito" as the primary typeface for the following key reasons:
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg6} alt="Illustration" className='sc-img' />
            </div>
            <div className="content">
              <div className="row1">
                <div className="col1 flex-row">
                  <div>
                    <img src={Icon1} alt="Icon" className='sc-img icon-img' />
                  </div>
                  <div>
                    <p className="t-lg-bold m-bottom-0_75">
                      Readability and legibility
                    </p>
                    <p className="md-regular">
                      Nunito's excellent legibility and clean design were paramount in creating a seamless reading experience for users. It was crucial for the app's content to be easily understood, ensuring smooth interactions throughout the app.
                    </p>
                  </div>
                </div>
                <div className="col1 flex-row">
                  <div>
                    <img src={Icon2} alt="" className='sc-img icon-img' />
                  </div>
                  <div>
                    <p className="t-lg-bold m-bottom-0_75">
                      Modern aesthetics
                    </p>
                    <p className="md-regular">
                      The contemporary and elegant look of Nunito perfectly aligned with my vision for the CliQQ app's modern and visually appealing interface. The rounded letterforms and harmonious proportions added a touch of sophistication, elevating the overall design.
                    </p>
                  </div>
                </div>
                <div className="col1 flex-row">
                  <div>
                    <img src={Icon3} alt="" className='sc-img icon-img' />
                  </div>
                  <div>
                    <p className="t-lg-bold m-bottom-0_75">
                      Versatility
                    </p>
                    <p className="md-regular">
                      Nunito's varied weights and styles provided me with the flexibility needed to establish clear hierarchies for different text elements. This versatility allowed me to distinguish headings, subheadings, and body text effectively, ensuring a well-organized content structure.
                    </p>
                  </div>
                </div>
                <div className="col1 flex-row">
                  <div>
                    <img src={Icon4} alt="" className='sc-img icon-img' />
                  </div>
                  <div>
                    <p className="t-lg-bold m-bottom-0_75">
                      User familiarity
                    </p>
                    <p className="md-regular">
                      Nunito's popularity in various digital interfaces, including apps and websites, made it an excellent choice. Utilizing a familiar typeface ensured a sense of comfort and ease for users, enhancing their overall navigation experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Characters section */}
        <section className="sections">
          <div className="sc-containers flex">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Characters
              </h5>
              <p className="t-md-regular">
                As the sole UI/UX designer for the Cliqq mobile app redesign, I crafted unique characters to maintain brand consistency, serving as brand ambassadors to enhance engagement, foster trust, and reinforce the brand identity throughout the app.
              </p>
            </div>
            <div className="content">
              <img src={Cliqqimg7} alt="" className='sc-img' />
            </div>
            <p className="t-md-regular">
              Joe and Lala are the energetic and positive characters for the 7 Eleven Cliqq mobile application. Joe, always in a vibrant red t-shirt, has contagious enthusiasm and a can-do attitude, making the Cliqq journey fun and rewarding. Lala, wearing an orange t-shirt, radiates positivity with her bright smile and cheerful demeanor. Together, they guide users through an exciting adventure of convenience and rewards, ensuring a delightful and memorable experience with 7 Eleven Cliqq.
            </p>
          </div>
        </section>

        {/* Redesigned screen section */}
        <section className="sections">
          <div className="sc-containers flex-2">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25 t-center">
                Redesigned screens
              </h5>
              <p className="t-md-regular t-center">
                With a fresh look and easier navigation, every screen is redesigned for a better experience.
              </p>
            </div>
          </div>
        </section>

        {/* A Personalized Shopping Experience section */}
        <section className="sections">
          <div className="sc-containers flex-2">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                A Personalized Shopping Experience
              </h5>
              <p className="t-md-regular">
                Key functions like bill payments, buying load, and adding e-money are easily accessible in a grid layout. The intuitive design allows seamless navigation for features such as requesting money, loading wallets, and accessing Wi-Fi, enhancing user interaction and simplifying transactions.
              </p>
            </div>
            <div className="content">
              <img src={Iphone1} alt="Iphone" className='sc-img lb-img' onClick={() => handleLightboxOpen(Iphone1)} />
              <LightBox isOpen={isLightboxOpen} image={lightboxImage} onClose={handleCloseLightbox} />
            </div>
          </div>
        </section>

        {/* Rewards and Gamification section */}
       <section className="sections">
          <div className="sc-containers flex-2 row-rev">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Rewards and Gamification
              </h5>
              <p className="t-md-regular">
                I introduced CliQQ Points with a gamified experience, featuring tiers like Bronze, Silver, Gold, and Platinum. As you earn points, you unlock exclusive rewards and benefits, supported by a visually refined interface for a modern and rewarding journey.
              </p>
            </div>
            <div className="content">
              <img src={Iphone2} alt="Iphone" className='sc-img lb-img' onClick={() => handleLightboxOpen(Iphone2)} />
              <LightBox isOpen={isLightboxOpen} image={lightboxImage} onClose={handleCloseLightbox} />
            </div>
          </div>
        </section>

        {/* Digital convenience section */}
        <section className="sections">
          <div className="sc-containers flex-2">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25">
                Digital convenience
              </h5>
              <p className="t-md-regular">
                I streamlined the Reward Cards feature, enabling real-time points tracking and seamless redemption. Users can now link their physical 7-Eleven reward card to the CliQQ app, gaining instant access to their points balance for easier and more rewarding shopping experiences.
              </p>
            </div>
            <div className="content">
              <img src={Iphone3} alt="Iphone" className='sc-img lb-img' onClick={() => handleLightboxOpen(Iphone3)} />
              <LightBox isOpen={isLightboxOpen} image={lightboxImage} onClose={handleCloseLightbox} />
            </div>
          </div>
        </section>

        {/* The screens section */}
        <section className="sections">
          <div className="sc-containers flex-2">
            <div className="content">
              <h5 className="d-sm-bold m-bottom-0_25 t-center">
                The screens
              </h5>
              <p className="t-md-regular t-center">
                Each screen aims to provide a seamless and engaging user journey, ensuring a more intuitive and satisfying experience for CliQQ app users.
              </p>
            </div>
          </div>
        </section>

        <section className="sections">
          <div className="screens-container">
            <div className="content">
              <img src={Screen1} alt="Screen" className='sc-img' />
              <img src={Screen2} alt="Screen" className='sc-img' />
              <img src={Screen3} alt="Screen" className='sc-img' />
              <img src={Screen4} alt="Screen" className='sc-img' />
              <img src={Screen5} alt="Screen" className='sc-img' />
              <img src={Screen6} alt="Screen" className='sc-img' />
              <img src={Screen7} alt="Screen" className='sc-img' />
              <img src={Screen8} alt="Screen" className='sc-img' />
              <img src={Screen9} alt="Screen" className='sc-img' />
              <img src={Screen10} alt="Screen" className='sc-img' />
              <img src={Screen11} alt="Screen" className='sc-img' />
              <img src={Screen12} alt="Screen" className='sc-img' />
              <img src={Screen13} alt="Screen" className='sc-img' />
              <img src={Screen14} alt="Screen" className='sc-img' />
              <img src={Screen15} alt="Screen" className='sc-img' />
            </div>
          </div>
        </section>

        {/* Continuing the Journey section */}
        <section className="sections">
          <div className="sc-outer-container-1 flex">
            <div className="cj-bg mb-1_5 lb-img" onClick={() => handleLightboxOpen(Cliqqimg8)}></div>
            <LightBox isOpen={isLightboxOpen} image={lightboxImage} onClose={handleCloseLightbox} />
            <div className="sc-inner-container">
              <div className="content">
                <h5 className="d-sm-bold m-bottom-0_25">
                  Continuing the Journey
                </h5>
                <p className="t-md-regular">
                  As I wrap up redesigning the CliQQ mobile app's UI/UX, I'm eager to enhance user experience. Gathering feedback from friends has been invaluable, guiding improvements to ensure a seamless and engaging interface. Moving forward, I plan to continue refining the design based on user insights, focusing on usability and enhancing overall satisfaction. This project marks a milestone in my journey to innovate and elevate CliQQ's UI/UX, reinforcing my commitment to user-centered design and continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="sections">
          <div className="sc-containers">
            <div className="content">
              <iframe 
                title="Figma Prototype"
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)', width: '100%', height: '1000px' }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fv5NpeggLrvp6XrNznAQ1hk%2FCliQQ-Prototype%3Fpage-id%3D1604%253A2035%26node-id%3D2059-17195%26viewport%3D8008%252C3509%252C0.6%26t%3DdbVfuTAjtC5Quqvc-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1935%253A16042" 
                allowFullScreen 
              />
            </div>
          </div>
        </section>

      </main>
      <div className="bg2"></div>
    </>
  )
}

export default CliQQ

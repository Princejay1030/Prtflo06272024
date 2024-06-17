import React from 'react';

// Styles sheet
import '../Disconnection/Disconnection.css';

// Assets
import Illus2 from '../../assets/img/Illustration2.png';

function Disconnection() {
  return (
    <>
      <div className="disco-bg"></div>
      <section className="sections">
        <div className="containers disco">
          <div className="content">
            <img src={Illus2} alt="" />
            <h4 className='d-md-bold'>Oops! This Page is on a Coffee Break. ☕</h4>
            <p className='t-xl-regular'>Looks like you've found a little nook that's still under construction. No worries, I'm on it! In the meantime, why not check out the other cool stuff around here?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Disconnection

import React from 'react';
import "./home.scss";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import Profile_image from '../../assets/profile_background.png'
const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='home_container container grid'>
            <div className='home_content grid'>
                <Social/>

                <div className='home_img'>

                  <div className="image_wrapper">
                    <img src={Profile_image} className="profile_image" />
                  </div>
                </div>
                <Data/>
            </div>
            <ScrollDown/>
        </div>

    </section>
  )
}

export default Home;

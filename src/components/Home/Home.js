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
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="background_svg">
                  <path fill="var(--title-color)" d="M21.4,-32.1C34,-29.8,54.7,-36.7,67.2,-32.9C79.7,-29.1,84,-14.5,82,-1.1C80,12.2,71.8,24.5,62.7,34.2C53.6,43.8,43.5,50.9,32.9,56.4C22.3,61.9,11.2,65.8,1.3,63.6C-8.6,61.4,-17.3,53.1,-25.1,46C-32.8,38.9,-39.7,32.9,-48.9,25.4C-58.1,17.9,-69.7,9,-73.8,-2.4C-77.9,-13.7,-74.6,-27.5,-68.4,-40C-62.1,-52.6,-52.8,-63.9,-40.9,-66.6C-29,-69.3,-14.5,-63.3,-5,-54.5C4.4,-45.8,8.8,-34.3,21.4,-32.1Z" transform="translate(100 100)" />
                </svg>

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

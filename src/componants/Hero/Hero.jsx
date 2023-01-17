import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image_back from '../../assets/hero_image_back.png'
import hero_image from '../../assets/hero_image.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import NB from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {
    const transiton = {type : 'spring', duration : 3};
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div id='home' className='hero'>

        <div className="blur blur-hero"></div>
        <div className="left-hero">
            <Header />

            <div className="the-best-ad">
                <motion.div initial={{left: mobile ? '170px' : '238px'}}
                whileInView={{left : '5px'}}
                transition={{...transiton, type : 'tween'}}

                ></motion.div>
                <span>The best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div><span className='stroke-text'>SHAPE </span> <span>YOUR</span></div>
                <div><span>IDEAL BODY</span></div>
                <div>
                    <span>

                    In here we will help you to shape and build your ideal body and live up your life to fullest
                    </span>
                </div>

            </div>

            <div className="figures">
                <div> 
                    <span><NB start={0} end={47} delay='2' prefix='+' /></span>
                    <span>Expert Coaches</span>
                </div>
                <div> 
                    <span><NB start={200} end={347} delay='2' prefix='+' /></span>
                    <span>Members Joined</span> 
                </div>
                <div> 
                    <span><NB start={0} end={59} delay='2' prefix='+' /></span>
                    <span>Fitness Programs</span> 
                </div>
            </div>

            <div className="hero-buttons">
                <buttons className='btn'>Get Started</buttons>
                <buttons className='btn'>Learn More</buttons>
            </div>
        </div>
        <div className="right-hero">
            <button className='btn'>Join Now</button>

            <motion.div initial={{right: '-1rem'}} 
            whileInView={{right : '4rem' }}
            transition={transiton}
             className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span><span>116bpm</span>
            </motion.div>

            <img src={hero_image} alt="" className='hero-image' />
            <motion.img initial={{right: '11rem'}} whileInView={{right : '20rem'}} transition={transiton}  src={hero_image_back} alt="" className='hero-image-back' />

            <motion.div
            initial={{right : '37rem'}}
            whileInView={{right : '28rem'}}
            transition={transiton}
            className="calories">
                <img src={Calories} alt="" />
                <div className='calories-burned'>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
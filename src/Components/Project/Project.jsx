import React from 'react';
import './Project.css';
import link from './img/link.png'
import findMyHat from './img/findMyHat.png';
import jamming from './img/jamming.PNG';
import f4 from './img/f4_2.PNG';
import github from './img/github.png';
import colmar from './img/colmar.PNG';
import { motion } from 'framer-motion';

const Project = () => {
  const cardMotion = {
    cardNormal: {
        scale: 1
    },

    cardHover: {
        scale: 1.1
    }
}
  return (
    <div className='projectSky' id='project'>
      <div className='proDivTop'>
        <p>PROJECT</p>
      </div>

      {/* Buttom Div */}
      <motion.div
        className='proDivBottom'
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* box1: foot fit for fire */}
        <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='projectCard'>
          <div className='projectCardPic'>
            <img src={f4} alt='final-project' width='260px' height='280px' />
          </div>
          <div className='projectCardText'>
            <div className='projectCardTextLeft'>
              <p>Exercise Tracker</p>
            </div>
            <div className='projectCardTextRight'>
              <a href='https://github.com/Theerapol-khamwan/website-tracking-exercises-front-end' target='_blank' rel='noreferrer' style={{margin: "5px"}}>
                <img
                  src={github}
                  alt='github logo'
                  width='20px'
                  height='20px'
                />
              </a>

              <a href='https://webapp-tracking-exercises.web.app/' target='_blank' rel='noreferrer'>
                <img
                  src={link}
                  alt='github logo'
                  width='20px'
                  height='20px'
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* box2: Colmar Academy */}
        <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='projectCard'>
          <div className='projectCardPic'>
            <img src={colmar} alt='colmar-academy' width='260px' height='280px' />
          </div>

          <div className='projectCardText'>
            <div className='projectCardTextLeft'>
              <p>Colmar Academy</p>
            </div>
            <div className='projectCardTextRight'>
            <a href='https://github.com/tuangrin/colmar-academy' target='_blank'  rel='noreferrer' style={{margin: "5px"}}>
                <img
                  src={github}
                  alt='github logo'
                  width='20px'
                  height='20px'
                />
              </a>
              <a
                href='https://tuangrin.github.io/colmar-academy/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={link}
                  alt='link logo'
                  width='20px'
                  height='20px'
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* box3: Find Your Hat*/}
        <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='projectCard'>
          <div className='projectCardPic'>
            <img src={findMyHat} alt='findMyHat' width='260px' height='280px' />
          </div>
          <div className='projectCardText'>
            <div className='projectCardTextLeft'>
              <p>Find Your Hat</p>
            </div>
            <div className='projectCardTextRight'>
              <a href='https://replit.com/@RinlapadSuesawa/Find-your-hat29RinlapadTuangtwng-2#index.js' target='_blank'  rel='noreferrer'>
                <img
                  src={link}
                  alt='github logo'
                  width='20px'
                  height='20px'
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* box4: spotify jamming */}
        <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='projectCard'>
          <div className='projectCardPic'>
            <img src={jamming} alt='jamming-project' width='260px' height='280px' />
          </div>

          <div className='projectCardText'>
            <div className='projectCardTextLeft'>
              <p>Spotify Jamming</p>
            </div>
            <div className='projectCardTextRight'>
              <a
                href='https://github.com/tuangrin/jamming-assessment'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={github}
                  alt='github logo'
                  width='20px'
                  height='20px'
                />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;

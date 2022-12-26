import React from 'react';
import { motion } from 'framer-motion';
import './Skill.css';
import html from './img/html.png';
import css from './img/css-3.png';
import js from './img/js.png';
import react from './img/react.png';
import git from './img/git.png';
import node from './img/node.png';
import mongodb from './img/mongodb.png';
import sql from './img/sql.jpg';


const Skill = () => {

  return (
    <div className='skillSand' id='skills'>
      <div className='divTop'>
        <p>SKILLS</p>
      </div>

      {/* Buttom Div */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 50 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='divBottom'
      >
        <div className='skillsLogo'>
          <img src={html} alt='HTML5 Logo' width='110' height='110' />
          <p className='skillsTextLogo'>HTML5</p>
        </div>
        <div className='skillsLogo'>
          <img src={css} alt='CSS Logo' width='110' height='110' />
          <p className='skillsTextLogo'>CSS3</p>
        </div>
        <div className='skillsLogo'>
          <img src={js} alt='JavaScript Logo' width='110' height='110' />
          <p className='skillsTextLogo'>JavaScript ES6</p>
        </div>
        <div className='skillsLogo'>
          <img src={react} alt='React Logo' width='110' height='110' />
          <p className='skillsTextLogo'>React.js</p>
        </div>
        <div className='skillsLogo'>
          <img src={git} alt='Git Logo' width='110' height='110' />
          <p className='skillsTextLogo'>Git</p>
        </div>
        
        <div className='skillsLogo'>
          <img src={node} alt='node Logo' width='110' height='110' />
          <p className='skillsTextLogo'>node.js</p>
        </div>

        <div className='skillsLogo'>
          <img src={mongodb} alt='Git Logo' width='110' height='110' />
          <p className='skillsTextLogo'>mongoDB</p>
        </div>

        <div className='skillsLogo'>
          <img src={sql} alt='sql Logo' width='110' height='110' />
          <p className='skillsTextLogo'>SQL</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;

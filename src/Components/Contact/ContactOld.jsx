import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import water from './img/water.png';
import github from './img/github.png';
import cloud1 from './img/cloud1.png';
import cloud2 from './img/cloud2.png';
import cloud3 from './img/cloud3.png';

const Contact = () => {
  return (
    <div className='contactBeach' id='contact'>
      <div className='contactTop'>
        <motion.div
          className='contactInfo'
          initial={{ opacity: 0, y: 0, x: -20}}
          whileInView={{ opacity: 1, y: 40, x: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className='cloudInfo'
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 50 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div>
              {/* <img src={cloud1} alt='cloud' width='400px' height='400px' /> */}
              <div>
                <h2>CONTACT</h2>
                <p>Rinlapad Suesawad</p>
                <p>Nonthaburi, Thailand</p>
                <p>Tel. +66 845272075</p>
                <p>E-mail: rinlapad.s@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className='cloudContact'
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img src={github} alt='github logo' width='20px' height='20px' />
        </motion.div>
      </div>

      {/* รูปน้ำ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src={water} alt='water at beach' className='water' />
      </motion.div>
    </div>
  );
};

export default Contact;

import React from 'react';
import style from './Welcome.module.css';
import cloudy from './cloudy.gif';

const Welcome = () => {
  return (
    <div className={style.welcomeBox} id='home'>
      <div className={style.divLeft}>
        <div>
          <p className={style.greeting}>Hello and Welcome to my portfolio</p>
    
          <p className={style.iAm}>
            I'm <span className='myName'>Rinlapad Suesawad</span>
          </p>
          <div className={style.KhumKhom}>
          <p>"When nothing is sure,</p>
          <p>everything is possible"</p>
          </div>
        </div>

        <div className={style.divBTN}>
          <a
            href='https://drive.google.com/file/d/1dHRIh8xkqnqmoRPB3EGi_7uIJSELs5Fi/view?usp=sharing'
            class={style.btnCV}
            target ="_blank"
            rel="noreferrer" //ไม่ใส่แล้วงอแง          
          >
            CV
          </a>
        </div>
      </div>

      {/* Div Right */}
      <div className={style.divRight}>
        <img src={cloudy} alt='cloudy logo' width='400px' height='400px' />
      </div>
    </div>
  );
};

export default Welcome;

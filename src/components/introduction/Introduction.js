import React from 'react';
import classes from './Introduction.module.css';
import Image from '../images/Image from iOS (2).jpg';

const Introduction = () => {
  return (
    <div className={classes['introduction-container']}>
      <h1 className={classes.heading}>Hobbies Hub</h1>
      <div className={classes['text-container']}>
        <div>
          <h1 className={classes.paragraph}>
            Hi, My name is John, Welcome to{' '}
            <span className={classes['hobbies-hub']}>Hobbies Hub.</span>
            <p className={classes.paragraph2}>
              I&apos;m a Front End Developer with the ability to Optimize user experience, Using
              HTML, CSS, JavaScript and React.js to bring concepts to life.
            </p>
            <p className={classes.paragraph3}>
              Here&apos;s a list of my <span className={classes['hobbies-hub']}>hobbies.</span>
            </p>
            <ul>
              <li>Coding</li>
              <li>Music</li>
              <li>Gaming</li>
              <li>Football</li>
              <li>Movies</li>
              <li>Dancing</li>
            </ul>
          </h1>
        </div>
        <div className={classes['image-container']}>
          <img className={classes.image} src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

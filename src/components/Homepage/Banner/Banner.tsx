import React from 'react';
import BannerImg from '../../../assets/Images/Banner.jpg';
import styles from './Banner.module.scss';

const Homepage = () => {
  return (
    <>
      <img src={BannerImg} alt="Banner" className={styles.bannerimg} />
    </>
  );
};

export default Homepage;

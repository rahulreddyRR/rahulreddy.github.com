import { FC } from 'react';
import BannerImg from '../../../assets/Images/Banner.jpg';
import styles from './Banner.module.scss';

const Banner: FC = () => {
  return (
    <>
      <img src={BannerImg} alt="Banner" className={styles.bannerimg} />
    </>
  );
};

export default Banner;

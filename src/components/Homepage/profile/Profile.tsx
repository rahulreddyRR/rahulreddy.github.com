/* eslint-disable react/no-unescaped-entities */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Button } from '@mui/material';
import React from 'react';
import ProfilePic from '../../../assets/Images/ProfilePicture.jpeg';
import styles from './Profile.module.scss';
// import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={ProfilePic} alt="profile_pic" className={styles.profile__pic} />
      <div className={styles.profile_about}>
        <p className={styles.profile_about__name}>Rahul Yella Reddy</p>
        <p className={styles.profile_about__line}>
          I'm front-end Deverloper based on Banglore,India.
        </p>
      </div>
      {/* <div className={styles.profile_social_network}>
        <Button>gitHub</Button>
        <Button
          variant="contained"
          startIcon={<FontAwesomeIcon icon={faInfo} />}
        >
          Example
        </Button>
      </div> */}
    </div>
  );
};

export default Profile;

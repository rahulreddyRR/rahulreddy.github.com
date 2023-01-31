/* eslint-disable react/no-unescaped-entities */
import { Button, Typography, Grid, Box } from '@mui/material';
import { FC } from 'react';
import ProfilePic from '../../../assets/Images/ProfilePicture.jpeg';
import styles from './Profile.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile: FC = () => {
  return (
    <Grid container>
      <Grid item xs={6} sm={4} md={3} lg={3} sx={{ textAlign: 'center' }}>
        <img
          src={ProfilePic}
          alt="profile_pic"
          className={styles.profile__pic}
        />
      </Grid>
      <Grid item xs={6} sm={8} md={9} lg={9}>
        <Grid container>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Typography variant="body1">Rahul Yella Reddy</Typography>
            <Typography variant="body2">
              I'm front-end Deverloper based on Banglore,India.
            </Typography>
          </Grid>
          <Grid item container xs={12} sm={4} md={6} lg={6} spacing={0.5}>
            <Grid item>
              <Button
                variant="contained"
                aria-label="Github"
                startIcon={<GitHubIcon />}
              >
                GitHub
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                aria-label="LinkedIn"
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;

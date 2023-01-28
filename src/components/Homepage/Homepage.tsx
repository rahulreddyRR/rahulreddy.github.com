import React from 'react';
import { Container, Grid } from '@mui/material';
import Banner from './Banner/Banner';
import Profile from './profile/Profile';
// import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <Container disableGutters={true} maxWidth="xl">
      <Grid sm={12} md={12} lg={12} xl={12}>
        <Banner />
        <Profile />
      </Grid>
    </Container>
  );
};

export default Homepage;

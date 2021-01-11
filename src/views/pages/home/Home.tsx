import { Box, Typography } from '@material-ui/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = (): ReactElement => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1" component="h2">
          Home Page
        </Typography>
      </Box>
      <Box margin={'2em 20em'}>
        <img src={'aoe-ii.jpeg'} width={'100%'} />
      </Box>
    </>
  );
};

export default Home;

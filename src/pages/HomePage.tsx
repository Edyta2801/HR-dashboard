import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function Home() {
  return (
    <Box>
      <Box sx={{ position: 'absolute', top: '30%', left: '50%' }}>
        <Typography variant="h4" align="center">
          <Link to="/signin">Signin</Link>
        </Typography>
        <Typography variant="h4" align="center" sx={{ paddingTop: 5 }}>
          <Link to="/signup">Signup</Link>
        </Typography>
        <Typography variant="h4" align="center" sx={{ paddingTop: 5 }}>
          <Link to="/dashboard">Dadhboard</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;

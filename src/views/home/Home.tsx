import { Paper, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from 'types/routes';
import * as styles from './Home.styles';

function Home() {
  return (
    <Paper sx={styles.container}>
      <Typography variant="h1">HR analytics</Typography>
      <Box sx={styles.buttonsContainer}>
        <Button
          component={Link}
          to={ROUTES.SIGNIN}
          variant="contained"
          size="large"
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to={ROUTES.SIGNUP}
          variant="contained"
          size="large"
        >
          Sign Up
        </Button>
      </Box>
    </Paper>
  );
}

export default Home;

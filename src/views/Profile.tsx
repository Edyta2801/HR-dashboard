import { Box, CircularProgress, Typography } from '@mui/material';
import { useQuery } from 'components/api/useQuery/useQuery';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'types/routes';
import { Profile as ProfileType } from '../types/profile.types';

export function Profile() {
  const { state } = useQuery<ProfileType>({
    url: 'app/profile',
    initFetch: true,
  });

  const navigate = useNavigate();

  if (state.isLoading) return <CircularProgress />;

  if (state.errorMessage || (!state.isLoading && !state.data)) {
    navigate(ROUTES.DASHBOARD);
    return null;
  }

  return (
    <>
      <Typography variant="h5" component="h2" marginBottom={3}>
        Profile
      </Typography>
      <Box>
        <Typography component="span" fontWeight={600}>
          Your name:{' '}
        </Typography>
        <Typography component="span">{state.data?.firstname}</Typography>
      </Box>
      <Box>
        <Typography component="span" fontWeight={600}>
          Your last name:{' '}
        </Typography>
        <Typography component="span">{state.data?.lastname}</Typography>
      </Box>
      <Box>
        <Typography component="span" fontWeight={600}>
          Your email:{' '}
        </Typography>
        <Typography component="span">{state.data?.username}</Typography>
      </Box>
    </>
  );
}

export default Profile;

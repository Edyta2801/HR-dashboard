import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
  CircularProgress,
} from '@mui/material';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ROUTES } from 'types/routes';
import { useMutation } from 'components/api/useMutation/useMutation';
import { emailRegex } from 'utils/emailRegex';
import { AxiosInstance } from 'axios';
import { SignUpPayload } from './SignUp.types';
import * as styles from './SignupForm.styles';

function SignupForm() {
  const { state, onMutate } = useMutation({
    mutateFn:
      (axios: AxiosInstance) =>
      (payload: Omit<SignUpPayload, 'passwordRepeat'>) =>
        axios.post('/app/auth/register', payload),
  });

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpPayload>();

  const watchedPassword = watch('password');

  const handleMutate = useCallback(
    async (payload: SignUpPayload) => {
      const { passwordRepeat, ...validApiPayload } = payload;
      onMutate(validApiPayload);
    },
    [onMutate],
  );

  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.cardContent}>Enter Your Details</Typography>
          <form onSubmit={handleSubmit(handleMutate)}>
            <TextField
              fullWidth
              type="firstName"
              variant="standard"
              placeholder="First Name *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: !errors.firstname
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('firstname', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 3,
                  message: 'Minimum length is 3',
                },
              })}
              error={!errors.firstname}
              helperText={errors.firstname?.message}
            />
            <Typography sx={{ color: 'red' }}>
              {errors.firstname?.message}
            </Typography>

            <TextField
              fullWidth
              type="lastName"
              variant="standard"
              placeholder="Last Name *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: !errors.lastname
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('lastname', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 1,
                  message: 'Minimum length is 1',
                },
              })}
            />
            <Typography sx={{ color: 'red' }}>
              {errors.lastname?.message}
            </Typography>

            <TextField
              fullWidth
              variant="standard"
              autoComplete="username"
              placeholder="Email *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: !errors.username
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('username', {
                required: 'Please fulfill marked fields.',
                pattern: {
                  value: emailRegex,
                  message: 'Invalid email address',
                },
              })}
            />
            <Typography sx={{ color: 'red' }}>
              {errors.username?.message}
            </Typography>

            <TextField
              fullWidth
              type="password"
              variant="standard"
              autoComplete="new-password"
              placeholder="Password *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: !errors.password
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('password', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 3,
                  message: 'Minimum length is 3',
                },
              })}
            />
            <Typography sx={{ color: 'red' }}>
              {errors.password?.message}
            </Typography>

            <TextField
              fullWidth
              type="retypePassword"
              variant="standard"
              autoComplete="new-password"
              placeholder="Retype Password *"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: 20,
                },
              }}
              sx={{
                borderBottom: !errors.passwordRepeat
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('passwordRepeat', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 3,
                  message: 'Minimum length is 3',
                },
                validate: (value) =>
                  value === watchedPassword || 'The passwords do not match',
              })}
            />
            <Typography sx={{ color: 'red' }}>
              {errors.passwordRepeat?.message}
            </Typography>

            {state.errorMessage && (
              <Typography sx={{ color: 'red' }}>
                {state.errorMessage}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              disabled={state.isLoading}
            >
              {!state.isLoading && 'SIGN UP'}
              {state.isLoading && (
                <CircularProgress color="inherit" size={24} />
              )}
            </Button>
          </form>
          <Box sx={styles.linkContainer}>
            <Typography sx={styles.text}>Already Have An Account?</Typography>
            <Link
              to={ROUTES.SIGNIN}
              style={{
                color: '#1565c0',
                textDecoration: 'none',
                paddingLeft: 10,
              }}
            >
              Then Sign In
            </Link>
          </Box>
        </CardContent>
        +
      </Card>
    </Box>
  );
}

export default SignupForm;

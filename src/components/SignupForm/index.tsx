import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import * as styles from './SignupForm.styles';

function SignupForm() {
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      retypepassword: '',
    },
  });

  const password = useRef({});
  password.current = watch('password', '');

  const handleLoginSubmit = (values: {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
  }) => {
    return api
      .register(
        values.firstname,
        values.lastname,
        values.username,
        values.password,
      )
      .then((result: any) => {
        console.log('result', result.data);
        setIsSuccessfullySubmitted(result.status === 200);
        setError('');
        navigate('/dashboard');
        reset();
      })
      .catch(() => {
        setError('Błędne dane logowania');
        reset();
        setIsLoading(false);
      });
  };

  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.cardContent}>Enter Your Details</Typography>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
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
                borderBottom: errors.firstname
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('firstname', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 4,
                  message: 'Minimum length is 4',
                },
              })}
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
                borderBottom: errors.lastname
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
                borderBottom: errors.username
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('username', {
                required: 'Please fulfill marked fields.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                borderBottom: errors.password
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('password', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 5,
                  message: 'Minimum length is 5',
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
                borderBottom: errors.retypepassword
                  ? '1px solid rgb(250, 0, 0)'
                  : '1px solid  rgb(118,118,118)',
                marginBottom: 1,
              }}
              {...register('retypepassword', {
                required: 'Please fulfill marked fields.',
                minLength: {
                  value: 5,
                  message: 'Minimum length is 5',
                },
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
            />
            <Typography sx={{ color: 'red' }}>
              {errors.retypepassword?.message}
            </Typography>
            <div>
              {!isLoading && (
                <Button type="submit" sx={styles.button}>
                  Sign Up
                </Button>
              )}
              {isLoading && <p>Sending request...</p>}
              {error && <p>{error}</p>}
            </div>
            {isSuccessfullySubmitted && <div>Wysłano formularz</div>}
          </form>
          <Box sx={styles.linkContainer}>
            <Typography sx={styles.text}>Already Have An Account?</Typography>
            <Link
              to="/signin"
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
      </Card>
    </Box>
  );
}

export default SignupForm;

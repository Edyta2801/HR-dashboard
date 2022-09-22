import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import * as styles from './SigninForm.styles';

function SigninForm() {
  const [checked, setChecked] = useState(false);
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const currentPassword = watch('password', '');
  const currentUsername = watch('username', '');

  const handleLoginSubmit = (values: {
    username: string;
    password: string;
  }) => {
    return api
      .login(values.username, values.password)
      .then((result: any) => {
        setError('');
        setIsLoading(true);
        console.log('access_token', result.data.access_token);
        setIsSuccessfullySubmitted(result.status === 200);
        localStorage.setItem('access_token', result.data.access_token);
        navigate('/dashboard');
        reset();
      })
      .catch(() => {
        setError('Błędne dane logowania');
        setIsLoading(false);
        reset();
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(event.target.checked);
    const data = [currentUsername, currentPassword];
    console.log(data);

    if (currentUsername !== '' && currentPassword !== '') {
      localStorage.setItem('data', JSON.stringify(data));
    }
  };

  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.cardContent}>User Sign In</Typography>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <TextField
              fullWidth
              variant="standard"
              autoComplete="username"
              placeholder="username *"
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            <Box sx={styles.boxFormControl}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    color="default"
                  />
                }
                label="Remember Me"
              />
              <Link
                to="signup"
                style={{ color: '#1565c0', textDecoration: 'none' }}
              >
                Forgot Password?
              </Link>
            </Box>
            <div>
              {!isLoading && (
                <Button type="submit" sx={styles.button} disabled={isLoading}>
                  Sign In
                </Button>
              )}
              {isLoading && <p>Sending request...</p>}
              {error && <Typography color="error">{error}</Typography>}
            </div>
            {isSuccessfullySubmitted && <div>Wysłano formularz</div>}
            {isSubmitting && <div>Wysyłanie formularza....</div>}
          </form>
          <Box sx={styles.linkContainer}>
            <Typography sx={styles.text}>Don{`'`}t have an account?</Typography>
            <Link
              to="/signup"
              style={{
                color: '#1565c0',
                textDecoration: 'none',
                paddingLeft: 10,
              }}
            >
              Click here to create one
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SigninForm;

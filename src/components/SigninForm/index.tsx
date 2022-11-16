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
import { useState } from 'react';
import { SignInPayload } from 'components/SigninForm/SignIn.types';
import { emailRegex } from 'utils/emailRegex';
import { ROUTES } from 'types/routes';
import { useMutation } from '../api/useMutation/useMutation';
import * as styles from './SigninForm.styles';
import axios from '../api/axios';

function SigninForm() {
  const [checked, setChecked] = useState(false);
  const { state, onMutate } = useMutation({
    mutateFn: (payload: SignInPayload) =>
      axios.post('/app/auth/login', payload),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignInPayload>();

  return (
    <Box sx={styles.box}>
      <Card sx={styles.card}>
        <CardContent>
          <Typography sx={styles.cardContent}>User Sign In</Typography>
          <form onSubmit={handleSubmit(onMutate)}>
            <TextField
              fullWidth
              variant="standard"
              autoComplete="username"
              placeholder="username *"
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
                to={ROUTES.SIGNUP}
                style={{ color: '#1565c0', textDecoration: 'none' }}
              >
                Forgot Password?
              </Link>
            </Box>
            <div>
              {!state.isLoading && (
                <Button
                  type="submit"
                  sx={styles.button}
                  disabled={state.isLoading}
                >
                  Sign In
                </Button>
              )}
              {state.isLoading && <p>Sending request...</p>}
              {state.errorMessage && (
                <Typography color="error">{state.errorMessage}</Typography>
              )}
            </div>
          </form>
          <Box sx={styles.linkContainer}>
            <Typography sx={styles.text}>Don{`'`}t have an account?</Typography>
            <Link
              to={ROUTES.SIGNUP}
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

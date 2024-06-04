import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { emailRegex } from '../../utils/emailRegex';
import { LoginPayload } from '../api/login/login.types';
import { useLogin } from '../api/login/useLogin';
import { ROUTES } from '../../types/routes';

import * as styles from './SigninForm.styles';

export const SignIn = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginPayload>();

  const { loginState, isRememberMeChecked, onSubmit, setIsRememberMeChecked } =
    useLogin();

  return (
    <Paper sx={styles.container} elevation={3}>
      <Typography component="h1" variant="h4">
        Sign In
      </Typography>

      <Box sx={styles.form} component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          variant="standard"
          label="E-mail *"
          {...register('username', {
            required: 'This field cannot be empty',
            pattern: {
              value: emailRegex,
              message: 'Please use a valid e-mail address',
            },
          })}
          error={!!errors.username}
          helperText={errors.username?.message}
          fullWidth
        />

        <TextField
          variant="standard"
          label="Password *"
          type="password"
          {...register('password', {
            required: 'This field cannot be empty',
            minLength: {
              value: 5,
              message: 'Please use at least 5 characters',
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
        />

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={isRememberMeChecked}
                onChange={(e) => setIsRememberMeChecked(e.target.checked)}
              />
            }
            label="Remember me"
          />
        </FormGroup>

        {loginState.errorMessage && (
          <Typography variant="body2" color="error">
            {loginState.errorMessage}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          disabled={loginState.isLoading}
        >
          {!loginState.isLoading && 'SIGN IN'}
          {loginState.isLoading && (
            <CircularProgress color="inherit" size={24} />
          )}
        </Button>

        <Typography>
          Don&apos;t have an account?{' '}
          <Link to={ROUTES.SIGNUP}>Click here to create one</Link>
        </Typography>
      </Box>
    </Paper>
  );
};

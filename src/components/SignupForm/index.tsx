import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useRef } from "react";


type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  retypePassword: string
};

const SignupForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const password = useRef({});
  password.current = watch("password", "");



  const handleLoginSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }}>
      <Card
        sx={{ borderRadius: 3, minWidth: 500 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30, fontWeight: 500, marginBottom: 3 }}>
           Enter Your Details
          </Typography>
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
                borderBottom: errors.firstName
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid  rgb(118,118,118)",
                marginBottom: 1,
              }}
              {...register("firstName", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 5,
                  message: "Minimum length is 5",
                },
              })}
            ></TextField>
            <Typography sx={{ color: 'red' }}>
              {errors.firstName?.message}
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
                borderBottom: errors.lastName
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid  rgb(118,118,118)",
                marginBottom: 1,
              }}
              {...register("lastName", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 5,
                  message: "Minimum length is 5",
                },
              })}
            ></TextField>
            <Typography sx={{ color: 'red' }}>
              {errors.lastName?.message}
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
                borderBottom: errors.email
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid rgb(118,118,118)",
                marginBottom: 1,
              }}
              {...register("email", {
                required: "Please fulfill marked fields.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            ></TextField>
            <Typography sx={{ color: 'red' }}>
              {errors.email?.message}</Typography>

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
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid  rgb(118,118,118)",
                marginBottom: 1,
              }}
              {...register("password", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
              })}
            ></TextField>
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
                borderBottom: errors.retypePassword
                  ? "1px solid rgb(250, 0, 0)"
                  : "1px solid  rgb(118,118,118)",
                marginBottom: 1,
              }}
              {...register("retypePassword", {
                required: "Please fulfill marked fields.",
                minLength: {
                  value: 8,
                  message: "Minimum length is 8",
                },
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
            ></TextField>
            <Typography sx={{ color: 'red' }}>
              {errors.retypePassword?.message}
            </Typography>

            <Button
              type="submit"

              sx={{
                backgroundColor: "rgb(255, 85, 0)",
                color: "rgb(250, 250, 250)",
                width: "150px",
                height: 50,
                marginTop: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '16px',
                "&:hover": {
                  backgroundColor: "rgb(255, 168, 124)",
                  color: "rgb(0, 0, 0)",
                },
              }}
            >
              Sign Up
            </Button>
          </form>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              paddingTop: 3
            }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 200 }}>
              Already Have An Account?
            </Typography>
            <Link to="/signin"
              style={{ color: "#1565c0", textDecoration: 'none', paddingLeft: 10 }}
            >
              Then Sign In
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupForm;


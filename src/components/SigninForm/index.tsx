import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useRef} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../utils/useLocalStorage";


const SigninForm: React.FC = () => {
  const [checked, setChecked] = useLocalStorage("checked", false);
  const password = useRef<string | null>(null);
  const email = useRef<string | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  password.current = watch("password", "");
  email.current = watch("email", "");


  const handleLoginSubmit = () => {
    console.log('email', email.current)
    console.log('password', password.current)
    
    reset();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(event.target.checked)
    const data = [email.current, password.current]
    console.log(data)
    
    
    if (email.current !=='' && password.current !==''){
    localStorage.setItem('data', JSON.stringify(data));}
    

    
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
            User Sign In
          </Typography>
          <form onSubmit={handleSubmit(handleLoginSubmit)}>

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
                  value: 5,
                  message: "Minimum length is 5",
                },
              })}
            ></TextField>
            <Typography sx={{ color: 'red' }}>
              {errors.password?.message}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={handleChange}
                    color='default'
                  />
                }
                label="Remember Me"
              />
              <Link to="#" style={{ color: "#1565c0", textDecoration: 'none' }}
              >
                Forgot Password?
              </Link>
            </Box>
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
              Sign In
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
              Don't have an account?
            </Typography>
            <Link to="/signup"
              style={{ color: "#1565c0", textDecoration: 'none', paddingLeft: 10 }}
            >
              Click here to create one
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SigninForm;


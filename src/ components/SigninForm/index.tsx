import React from "react";
import { Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from "react-hook-form";


interface FormData {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  }).required();


function SigninForm() {


  
  const { register, handleSubmit,formState:{errors} } = useForm<FormData>({
    resolver: yupResolver(validationSchema)});
 
const onSubmit:SubmitHandler<FormData> =data=>alert(JSON.stringify(data));

  const style = {
    margin: "auto",
    "max-width": "300px"
  };
  return (
    <section>
     <p>User Sign In</p>
     <form onSubmit={handleSubmit(onSubmit)} style={style}>
      <TextField
      placeholder='Name'
        // name="email"
        error={!!errors.email}
        label="Email"
        helperText={errors.email ? errors.email.message : ""}
        type="email"
        inputRef={register}
        fullWidth
        variant="outlined"
        {...register('email')}
      
      />
      <TextField
        name="password"
        error={!!errors.password}
        label="Password"
        inputRef={register}
        helperText={errors.password ? errors.password.message : ""}
        type="password"
        fullWidth
        // {...register("password")}
      />

      <Button color="primary" type="submit" variant="contained" fullWidth>
        Submit
      </Button>
    </form>


    </section>
  );
}
export default SigninForm;

// import React from "react";
// import ReactDOM from "react-dom";
// import { useForm, SubmitHandler } from "react-hook-form";

// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other"
// }

// interface IFormInput {
//   firstName: String;
//   gender: GenderEnum;
// }

// export default function SigninForm() {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <label>First Name</label>
//       <input {...register("firstName")} />
//       <label>Gender Selection</label>
//       <select {...register("gender")} >
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }

import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import * as styles from './JobForm.styles.ts';
import { JobFormProps } from './JobForm.types';
import { ROUTES } from '../../types/routes';
import { AddJobPayload } from '../api/addJob/addJob.types';

export function JobForm(props: JobFormProps) {
  const { type, handleJobFormSubmission } = props;

  // Type assertion to handle different props based on type
  const defaultValues =
    type === 'edit'
      ? (props as { defaultValues: Partial<AddJobPayload> }).defaultValues
      : {};

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<AddJobPayload>({
    defaultValues,
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (payload: AddJobPayload) => {
    try {
      await handleJobFormSubmission(payload);
      navigate(ROUTES.JOBS);
    } catch (_error) {
      setErrorMessage('Something went wrong, please try again');
    }
  };

  return (
    <Box
      component="form"
      sx={styles.container}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="job title"
        {...register('title', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        label="short description"
        {...register('shortDescription', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.shortDescription}
        helperText={errors.shortDescription?.message}
      />
      <TextField
        label="company name"
        {...register('companyName', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.companyName}
        helperText={errors.companyName?.message}
      />

      <TextField
        label="long description"
        {...register('longDescription', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.longDescription}
        helperText={errors.longDescription?.message}
        multiline
        rows={5}
        sx={styles.multiline}
      />

      <TextField
        label="logo"
        {...register('logo', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.logo}
        helperText={errors.logo?.message}
      />
      <Button type="submit" variant="contained" sx={styles.button}>
        Submit
      </Button>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Box>
  );
}

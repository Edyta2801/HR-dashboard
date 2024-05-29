import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';

import { ROUTES } from '../../types/routes';
import { AddCandidatePayload } from '../api/addCandidate/addCandidate.types';

import { CandidatesFormProps } from './CandidatesForm.types';
import * as styles from './CandidatesForm.styles.ts';

export function CandidatesForm(props: CandidatesFormProps) {
  const { type, handleCandidateFormSubmission } = props;

  // Type assertion to handle different props based on type
  const defaultValues =
    type === 'edit'
      ? (props as { defaultValues: Partial<AddCandidatePayload> }).defaultValues
      : {};

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<AddCandidatePayload>({
    defaultValues,
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (payload: AddCandidatePayload) => {
    try {
      await handleCandidateFormSubmission(payload);
      navigate(ROUTES.CANDIDATES);
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
        label="candidate name"
        {...register('name', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.name}
        helperText={errors.name?.message}
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

      <TextField
        label="position"
        {...register('position', {
          required: 'This field is required',
          minLength: {
            value: 5,
            message: 'Please use at least 5 characters',
          },
        })}
        error={!!errors.position}
        helperText={errors.position?.message}
      />
      <Button type="submit" variant="contained" sx={styles.button}>
        Submit
      </Button>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Box>
  );
}

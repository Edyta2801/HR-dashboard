import { CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useEditJob } from '../../components/api/editJob/useEditJob';
import { useJob } from '../../components/api/job/useJob';
import { JobForm } from '../../components/jobForm/JobForm';

export function EditJob() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    throw new Error('Missing job id');
  }

  const { data, errorMessage, isLoading } = useJob(id);
  const { editJob } = useEditJob();

  if (isLoading) return <CircularProgress />;

  if (!data || errorMessage)
    return (
      <Typography color="error">
        Something went wrong. Please try again.
      </Typography>
    );

  return (
    <JobForm
      defaultValues={data}
      type="edit"
      handleJobFormSubmission={editJob(id)}
    />
  );
}

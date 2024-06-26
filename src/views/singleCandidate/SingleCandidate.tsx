import { Button, CircularProgress, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useCandidate } from '../../components/api/candidate/useCandidate';
import { getEditCandidateUrl } from '../../types/routes';

export function SingleCandidate() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error('Candidate it missing in SingleCandidate route');
  }

  const { data, errorMessage, isLoading } = useCandidate(id);

  if (isLoading) return <CircularProgress />;

  if (errorMessage || !data) {
    return (
      <Typography color="error">
        Something went wrong while loading data, please try again
      </Typography>
    );
  }

  return (
    <>
      <Typography variant="h2">User: {data.name}</Typography>
      <Typography>Created at: {data.date}</Typography>
      <Typography>Position:</Typography>
      <Typography>{data.position}</Typography>
      <Typography>Description:</Typography>
      <Typography>{data.longDescription}</Typography>
      <Button component={Link} to={getEditCandidateUrl(id)} variant="contained">
        Edit
      </Button>
    </>
  );
}

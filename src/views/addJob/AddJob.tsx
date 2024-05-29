import { useAddJob } from './useAddJob';
import { JobForm } from '../jobForm/JobForm';

export function AddJob() {
  const { addJob } = useAddJob();

  return <JobForm type="add" handleJobFormSubmission={addJob} />;
}

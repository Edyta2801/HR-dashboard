import { useAddJob } from '../../components/api/addJob/useAddJob';
import { JobForm } from '../../components/jobForm/JobForm';

export function AddJob() {
  const { addJob } = useAddJob();

  return <JobForm type="add" handleJobFormSubmission={addJob} />;
}

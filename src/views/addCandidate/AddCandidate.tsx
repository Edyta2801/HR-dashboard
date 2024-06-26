import { CandidatesForm } from 'components/candidatesForm/CandidatesForm';
import { useAddCandidate } from '../../components/api/addCandidate/useAddCandidate';

export function AddCandidate() {
  const { addCandidate } = useAddCandidate();

  return (
    <CandidatesForm type="add" handleCandidateFormSubmission={addCandidate} />
  );
}

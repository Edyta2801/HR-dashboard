import { useAddCandidate } from '../../components/api/addCandidate/useAddCandidate';
import { CandidatesForm } from 'components/candidatesForm/CandidatesForm';

export function AddCandidate() {
  const { addCandidate } = useAddCandidate();

  return (
    <CandidatesForm type="add" handleCandidateFormSubmission={addCandidate} />
  );
}

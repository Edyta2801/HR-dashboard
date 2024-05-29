import { AddCandidatePayload } from '../../components/api/addCandidate/addCandidate.types';

export type CandidatesFormProps =
  | {
      type: 'edit';
      defaultValues: Partial<AddCandidatePayload>;
      handleCandidateFormSubmission: (
        payload: Partial<AddCandidatePayload>,
      ) => Promise<void>;
    }
  | {
      type: 'add';
      handleCandidateFormSubmission: (
        payload: AddCandidatePayload,
      ) => Promise<void>;
    };

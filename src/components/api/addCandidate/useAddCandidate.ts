import { AddCandidatePayload } from './addCandidate.types';
import { useAxios } from '../useAxios/useAxios';

export const useAddCandidate = () => {
  const axios = useAxios();

  const addCandidate = async (payload: AddCandidatePayload) => {
    await axios.post('/candidates', payload);
  };

  return { addCandidate };
};

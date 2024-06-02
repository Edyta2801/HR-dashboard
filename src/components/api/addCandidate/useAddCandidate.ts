import { useAxios } from '../useAxios/useAxios';

import { AddCandidatePayload } from './addCandidate.types';

export const useAddCandidate = () => {
  const axios = useAxios();

  const addCandidate = async (payload: AddCandidatePayload) => {
    await axios.post('/candidates', payload);
  };

  return { addCandidate };
};
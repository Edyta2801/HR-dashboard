import { AddJobPayload } from './addJob.types';
import { useAxios } from '../useAxios/useAxios';

export const useAddJob = () => {
  const axios = useAxios();

  const addJob = async (payload: AddJobPayload) => {
    await axios.post('/jobs', payload);
  };

  return { addJob };
};

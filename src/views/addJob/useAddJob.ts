import { useAxios } from '../../components/api/useAxios/useAxios';

import { AddJobPayload } from './addJob.types';

export const useAddJob = () => {
  const axios = useAxios();

  const addJob = async (payload: AddJobPayload) => {
    await axios.post('/jobs', payload);
  };

  return { addJob };
};

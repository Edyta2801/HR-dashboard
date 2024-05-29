import { AddJobPayload } from '../addJob/addJob.types';
import { useAxios } from '../useAxios/useAxios';

export const useEditCandidate = () => {
  const axios = useAxios();

  const editCandidate =
    (id: string) => async (payload: Partial<AddJobPayload>) => {
      await axios.put('/candidates', { ...payload, id: parseInt(id, 10) });
    };

  return { editCandidate };
};

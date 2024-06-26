import { useCallback, useEffect, useState } from 'react';

import { Candidate } from '../candidates/candidates.types';
import { useAxios } from '../useAxios/useAxios';

export const useCandidate = (candidateId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [data, setData] = useState<Candidate>();
  const axios = useAxios();

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(undefined);

    try {
      const res = await axios.get<Candidate>(`/candidates/${candidateId}`);
      setData(res.data);
    } catch (_error) {
      setErrorMessage('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [axios, candidateId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    errorMessage,
  };
};

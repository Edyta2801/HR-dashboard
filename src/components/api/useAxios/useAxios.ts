import axios from 'axios';
import { useMemo } from 'react';
import { useTokenContext } from 'context/tokenContext/useTokenContext';

export function useAxios() {
  const { accessToken } = useTokenContext();

  const axiosClient = useMemo(() => {
    return axios.create({
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      baseURL: process.env.REACT_APP_API_URL,
    });
  }, [accessToken]);

  return axiosClient;
}

export const { isAxiosError } = axios;

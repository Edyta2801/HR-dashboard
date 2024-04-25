import { useCallback, useReducer } from 'react';

import { isAxiosError } from '../useAxios/axios';
import { defaultState, mutationReducer } from './mutationReducer';
import { UseMutationProps } from './useMutation.types';
import { useAxios } from '../useAxios/useAxios';

const axios = useAxios();

export const useMutation = <T, R>({
  mutateFn,
  onSuccess,
}: UseMutationProps<T, R>) => {
  const [state, dispatch] = useReducer(mutationReducer, defaultState);

  const onMutate = useCallback(
    async (payload: T) => {
      try {
        dispatch({ type: 'init' });
        // await axios.post('/app/auth/login', payload);
        const res = await mutateFn(axios)(payload);
        if (onSuccess) onSuccess(res);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 401) {
          dispatch({
            type: 'error',
            payload: 'You are not authorised.',
          });
          return;
        }

        dispatch({
          type: 'error',
          payload: 'Something went wrong. Please try again.',
        });
      } finally {
        dispatch({ type: 'finish' });
      }
    },
    [mutateFn, onSuccess],
  );
  return { onMutate, state };
};

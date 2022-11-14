import { useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'types/routes';
import { defaultState, mutationReducer } from './mutationReducer';
import { UseMutationProps } from './useMutation.types';

export const useMutation = <T extends Record<never, never>>({
  mutateFn,
}: UseMutationProps<T>) => {

  const [state, dispatch] = useReducer(mutationReducer, defaultState);
  const navigate = useNavigate();

  const onMutate = useCallback(
    async (payload: T) => {
      try {
        dispatch({ type: 'init' });
        // await axios.post('/app/auth/login', payload);
        await mutateFn(payload);
        navigate(ROUTES.DASHBOARD);
      } catch (error) {
        dispatch({
          type: 'error',
          payload: 'Something went wrong. Please try again.',
        });
      } finally {
        dispatch({ type: 'finish' });
      }
    },
    [mutateFn],
  );
  return { onMutate, state };
};

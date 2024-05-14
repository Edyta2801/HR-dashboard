import { useCallback, useEffect, useReducer } from 'react';

import { isAxiosError } from '../useAxios/axios';
import { defaultState, queryReducer } from './queryReducer';
import { useAxios } from '../useAxios/useAxios';
import { QueryState, QueryAction, UseQueryProps } from './useQuery.types';

export const useQuery = <T extends unknown>({
  url,
  initFetch = true,
}: UseQueryProps) => {
  const [state, dispatch] = useReducer<
    (state: QueryState<T>, action: QueryAction) => QueryState<T>
  >(queryReducer, defaultState);
  const axios = useAxios();

  const onQuery = useCallback(async () => {
    try {
      dispatch({ type: 'init' });
      const res = await axios.get<T>(url);
      dispatch({ type: 'success', payload: res.data });
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
    }
  }, [axios, url]);
  useEffect(() => {
    if (initFetch) {
      onQuery();
    }
  }, [initFetch, onQuery]);

  return { onQuery, state };
};

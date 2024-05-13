import { QueryAction, QueryState } from './useQuery.types';

export const defaultState: QueryState<any> = {
  errorMessage: undefined,
  isLoading: false,
  data: undefined,
};

export const queryReducer = <T>(
  state: QueryState<T>,
  action: QueryAction,
): QueryState<any> => {
  switch (action.type) {
    case 'init':
      return { isLoading: true, errorMessage: undefined, data: undefined };
    case 'success':
      return {
        isLoading: false,
        errorMessage: undefined,
        data: action.payload,
      };
    case 'error':
      return {
        isLoading: false,
        errorMessage: action.payload,
        data: undefined,
      };
    default:
      throw new Error('Wrong action type');
  }
};

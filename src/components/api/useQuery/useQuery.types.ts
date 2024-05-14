export type UseQueryProps = {
  url: string;
  initFetch: Boolean;
};

export type QueryState<T> =
  | { isLoading: true; errorMessage: undefined; data: undefined }
  | { isLoading: false; errorMessage: string; data: undefined }
  | { isLoading: false; errorMessage: undefined; data: T };

export type InitAction = { type: 'init' };
export type ErrorAction = { type: 'error'; payload: string };
export type SuccessAction = { type: 'success'; payload: any };

export type QueryAction = InitAction | ErrorAction | SuccessAction;

import { useCallback, useReducer } from 'react';
import axios from '../axios';
import { SignInPayload } from './login.types';
import { defaultLoginState, loginReducer } from './loginReducer';

export const useLogin = () => {
  //   const [errorMessage, setErrorMessage] = useState<string>();
  //   const [isLoading, setIsLoading] = useState(false);

  const [loginState, dispatchLoginAction] = useReducer(
    loginReducer,
    defaultLoginState,
  );

  const onMutate = useCallback(async (payload: SignInPayload) => {
    try {
      dispatchLoginAction({ type: 'init' });
      await axios.post('/app/auth/login', payload);
    } catch (error) {
      dispatchLoginAction({
        type: 'error',
        payload: 'Something went wrong. Please try again.',
      });
    } finally {
      dispatchLoginAction({ type: 'finish' });
    }
  }, []);
  return { onMutate, loginState };
};

import { useCallback, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'types/routes';
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
  const navigate = useNavigate();

  const onMutate = useCallback(async (payload: SignInPayload) => {
    try {
      dispatchLoginAction({ type: 'init' });
      await axios.post('/app/auth/login', payload);
      navigate(ROUTES.DASHBOARD);
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

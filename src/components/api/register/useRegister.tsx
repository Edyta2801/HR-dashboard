import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterPayload } from './register.types';
import { ROUTES } from '../../../types/routes';
import { isAxiosError, useAxios } from '../useAxios/useAxios';

export const useRegister = () => {
  const navigate = useNavigate();
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (body: RegisterPayload) => {
    setIsLoading(true);
    setErrorMessage(undefined);

    try {
      await axios.post('/app/auth/register', body);

      navigate(ROUTES.SIGNIN);
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        setErrorMessage('TODO');
        return;
      }
      setErrorMessage('TODO');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    errorMessage,
    isLoading,
    onSubmit,
  };
};

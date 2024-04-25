import { useTokenContext } from 'context/tokenContext/useTokenContext';
import { ROUTES } from 'types/routes';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'components/api/useAxios/axios';
import { ProtectedRouteProps } from './ProtectedRoute.types';

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const checkProfile = useCallback(async () => {
    try {
      await axios.get('/app/profile', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      // throw new Error('test');
    } catch (_error) {
      setIsError(true);
      navigate(ROUTES.SIGNIN);
      // setIsError(true);
    }
    setIsLoading(false);
  }, [accessToken, navigate]);

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
      setIsLoading(false);
    }
    checkProfile();
  }, [accessToken, checkProfile, navigate]);
  if (isLoading || isError || !accessToken) return null;

  return <div>{children}</div>;
}

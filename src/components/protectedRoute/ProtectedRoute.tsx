import { useTokenContext } from 'context/tokenContext/useTokenContext';
import { ROUTES } from 'types/routes';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'components/api/axios';
import { ProtectedRouteProps } from './ProtectedRoute.types';

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  const checkProfile = useCallback(async () => {
    try {
      await axios.get('/app/profile', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (_error) {
      navigate(ROUTES.SIGNIN);
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

  return <div>{children}</div>;
}

import { useTokenContext } from 'context/tokenContext/useTokenContext';
import { ROUTES } from 'types/routes';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProtectedRouteProps } from './ProtectedRoute.types';

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
    }
  }, [accessToken, navigate]);

  return <div>{children}</div>;
}

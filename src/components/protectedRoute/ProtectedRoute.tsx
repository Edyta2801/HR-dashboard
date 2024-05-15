import { useTokenContext } from 'context/tokenContext/useTokenContext';
import { ROUTES } from 'types/routes';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'components/api/useQuery/useQuery';
import { Profile } from '../../types/profile.types';
import { ProtectedRouteProps } from './ProtectedRoute.types';

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { accessToken } = useTokenContext();
  const navigate = useNavigate();

  const { state, onQuery } = useQuery<Profile>({
    url: 'app/profile',
    initFetch: false,
  });

  const checkProfile = useCallback(async () => {
    onQuery();
  }, [onQuery]);

  useEffect(() => {
    if (!accessToken) {
      navigate(ROUTES.SIGNIN);
      return;
    }
    checkProfile();
  }, [accessToken, checkProfile, navigate]);
  if (state.isLoading || state.errorMessage || !accessToken) return null;

  return <div>{children}</div>;
}

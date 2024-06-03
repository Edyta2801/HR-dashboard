import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CircularProgress } from '@mui/material';

import { ROUTES } from '../../types/routes';
import { useProfile } from '../api/profile/useProfile';
import { ProfileContextController } from 'context/profileContext/ProfileContextController';
import { useTokenContext } from 'context/tokenContext/useTokenContext';

import { ProtectedRouteProps } from './ProtectedRoute.types';
import CenteredLayout from 'components/centeredLayout/CenteredLayout';

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data, isLoading, errorMessage } = useProfile();
  const { accessToken, onTokenClear } = useTokenContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken || errorMessage || (!isLoading && !data)) {
      onTokenClear();
      navigate(ROUTES.SIGNIN);
    }
  }, [accessToken, data, errorMessage, isLoading, navigate, onTokenClear]);

  if (isLoading) {
    return (
      <CenteredLayout>
        <CircularProgress />
      </CenteredLayout>
    );
  }

  if (errorMessage || !data) return null;

  return (
    <ProfileContextController profile={data}>
      {children}
    </ProfileContextController>
  );
}

import { useContext } from 'react';
import { TokenContext } from './TokenContext';

export function useTokenContext() {
  const ctx = useContext(TokenContext);

  if (!ctx)
    throw new Error(
      'useTokenContext can only be used inside TokenContextController',
    );
  return ctx;
}

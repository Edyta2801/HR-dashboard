import { useCallback, useMemo, useState } from 'react';
import { TokenContext } from './TokenContext';
import {
  OnTokenSaveArgs,
  TokenContextControllerProps,
} from './TokenContext.types';

export const tokenStorageKey = 'access_token';

export function TokenContextController({
  children,
}: TokenContextControllerProps) {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem(tokenStorageKey),
  );

  const onTokenSave = useCallback(
    ({ newToken, storeTokenInStorage }: OnTokenSaveArgs) => {
      setAccessToken(newToken);

      if (storeTokenInStorage) {
        localStorage.setItem(tokenStorageKey, newToken);
      }
    },
    [],
  );

  const contextValue = useMemo(
    () => ({ accessToken, onTokenSave }),
    [accessToken, onTokenSave],
  );

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
}

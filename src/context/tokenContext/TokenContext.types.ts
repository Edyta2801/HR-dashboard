import { ReactNode } from 'react';

export type TokenContextValue = {
  accessToken: string | undefined;
  onTokenSave: (newToken: string) => void;
};

export type TokenContextControllerProps = {
  children: ReactNode;
};

import { ReactNode } from 'react';

export type OnTokenSaveArgs = {
  newToken: string;
  storeTokenInStorage: boolean;
};

export type TokenContextValue = {
  accessToken: string | undefined;
  onTokenSave: (args: OnTokenSaveArgs) => void;
};

export type TokenContextControllerProps = {
  children: ReactNode;
};

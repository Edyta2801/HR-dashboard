export type SignInPayload = { username: string; password: string };

export type SignInResponse = {
  accessToken(accessToken: any): unknown;
  access_token: string;
};

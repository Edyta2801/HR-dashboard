import { rest } from 'msw';

const loginHandler = rest.post(
  `${process.env.REACT_APP_API_URL}/app/auth/login`,
  async (_req, res, ctx) => res(
      ctx.json({
        access_token: 'accessTokenForTests',
      }),
    ),
);

export const handlers = [loginHandler];

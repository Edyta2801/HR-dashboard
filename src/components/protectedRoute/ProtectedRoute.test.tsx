import { rest } from 'msw';
import { tokenStorageKey } from 'context/tokenContext/TokenContextController';
import { render, screen } from 'tests';
import { server } from 'tests/msw/server';

import { ProtectedRoute } from './ProtectedRoute';

describe('ProtectedRoute', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('renders children on auth success', async () => {
    localStorage.setItem(tokenStorageKey, 'test');
    render(<ProtectedRoute>test</ProtectedRoute>);

    const protectedElement = await screen.findByText(/test/);
    expect(protectedElement).toBeInTheDocument();
  });

  it('doesnt render children on auth fail', async () => {
    localStorage.setItem(tokenStorageKey, 'test');
    server.use(
      rest.get(
        `${process.env.REACT_APP_API_URL}/app/profile`,
        (_req, res, ctx) => res(ctx.status(401)),
      ),
    );

    render(<ProtectedRoute>test</ProtectedRoute>);

    await expect(screen.findByText(/test/)).rejects.toBeTruthy();
  });
});

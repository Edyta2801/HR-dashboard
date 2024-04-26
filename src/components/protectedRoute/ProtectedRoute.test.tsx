import { rest } from 'msw';

import { render, screen } from 'tests';
import { server } from 'tests/msw/server';

import { ProtectedRoute } from './ProtectedRoute';
import { tokenStorageKey } from 'context/tokenContext/TokenContextController';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('ProtectedRoute', () => {
  afterEach(() => {
    jest.clearAllMocks();
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
        async (_req, res, ctx) => {
          return res(ctx.status(500));
        },
      ),
    );

    render(<ProtectedRoute>test</ProtectedRoute>);

    await expect(screen.findByText(/test/)).rejects.toBeTruthy();
  });
});

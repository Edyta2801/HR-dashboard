import { render, screen } from 'tests';

import { ProtectedRoute } from './ProtectedRoute';
import { tokenStorageKey } from 'context/tokenContext/TokenContextController';

describe('ProtectedRoute', () => {
  it('renders children on auth success', async () => {
    localStorage.setItem(tokenStorageKey, 'test');
    render(<ProtectedRoute>test</ProtectedRoute>);

    const protectedElement = await screen.findByText(/test/);

    expect(protectedElement).toBeInTheDocument();
  });
});

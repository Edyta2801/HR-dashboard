import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { render, screen } from 'tests';
import { ROUTES } from 'types/routes';
import SigninForm from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Signin', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    expect('signin').toBeInTheDocument;
  });

  it('renders title', () => {
    render(<SigninForm />);

    const title = screen.getByText(/User Sign In/);

    expect(title).toBeInTheDocument();
  });

  it('renders usernameField', () => {
    render(<SigninForm />);

    const usernameField = screen.getByPlaceholderText(/Username */);
    expect(usernameField).toBeInTheDocument();
  });
  it('renders passwordField', () => {
    render(<SigninForm />);

    const passwordField = screen.getByPlaceholderText(/Password */);
    expect(passwordField).toBeInTheDocument();
  });

  it('redirects to home on login', async () => {
    render(<SigninForm />);
    const emailField = screen.getByPlaceholderText(/Username */);
    const passwordField = screen.getByPlaceholderText(/Password */);
    const submitButton = screen.getByRole('button');

    await act(async () => userEvent.type(emailField, 'user@example.com'));
    await act(async () => userEvent.type(passwordField, 'password123'));
    await act(async () => userEvent.click(submitButton));

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(ROUTES.DASHBOARD);
  });
});

// export {};

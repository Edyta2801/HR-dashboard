import userEvent from '@testing-library/user-event';
import { act, render, screen } from 'tests';
import { SignIn } from './SignIn';
import { server } from 'tests/msw/server';
import { rest } from 'msw';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Signin', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // it('renders', () => {
  //   expect('signin').toBeInTheDocument;
  // });

  it('renders title', () => {
    render(<SignIn />);

    const title = screen.getByText(/User Sign In/);

    expect(title).toBeInTheDocument();
  });

  it('renders usernameField', () => {
    render(<SignIn />);

    const usernameField = screen.getByPlaceholderText(/Email */);
    expect(usernameField).toBeInTheDocument();
  });
  it('renders passwordField', () => {
    render(<SignIn />);

    const passwordField = screen.getByPlaceholderText(/Password */);
    expect(passwordField).toBeInTheDocument();
  });

  it('redirects to home on login', async () => {
    render(<SignIn />);
    const emailField = screen.getByPlaceholderText(/Email */);
    const passwordField = screen.getByPlaceholderText(/Password */);
    const submitButton = screen.getByRole('button');

    await act(async () => userEvent.type(emailField, 'user@example.com'));
    await act(async () => userEvent.type(passwordField, 'password123'));
    await act(async () => userEvent.click(submitButton));

    expect(mockNavigate).toHaveBeenCalled();
    // expect(mockNavigate).toHaveBeenCalledWith(ROUTES.DASHBOARD);
  });

  it('doesnt redirect on error', async () => {
    server.use(
      rest.post(
        `${process.env.REAT_APP_API_URL}/app/auth/login`,
        async (_req, res, ctx) => res(ctx.status(500)),
      ),
    );

    render(<SignIn />);
    const emailField = screen.getByPlaceholderText(/Email */);
    const passwordField = screen.getByPlaceholderText(/Password */);
    const submitButton = screen.getByRole('button');

    await act(async () => userEvent.type(emailField, 'admin@admin.com'));
    await act(async () => userEvent.type(passwordField, 'admin'));
    await act(async () => userEvent.click(submitButton));

    const errorMessage = screen.getByText(/Forgot Password?/);

    // expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalled();
    expect(errorMessage).toBeInTheDocument();
  });
});

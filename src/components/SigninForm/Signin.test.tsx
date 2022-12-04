import { render, screen } from 'tests';
import SigninForm from '.';

describe('Signin', () => {
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
});

export {};

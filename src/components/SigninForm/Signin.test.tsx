import { render, screen } from 'tests';
import SigninForm from '.';

describe('Sign In', () => {
  it('renders', () => {
    expect('signin').toBeInTheDocument;
  });
});

describe('SignIn', () => {
  it('renders title', () => {
    render(<SigninForm />);

    const title=screen.getByText(/User Sign In/);

    expect(title).toBeInTheDocument();

  });
});

export {};

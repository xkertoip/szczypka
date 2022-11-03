import { ButtonHTMLAttributes, FunctionComponent } from 'react';

const FancyButton: FunctionComponent<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick, type, role, name }) => (
  <button
    onClick={onClick}
    type={type}
    className={'btn-primary capitalize'}
    role={role}
    name={name}
  >
    {children}
  </button>
);

export default FancyButton;

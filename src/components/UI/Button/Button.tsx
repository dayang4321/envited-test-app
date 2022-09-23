import React, { FC } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
};

const StyledButton = styled.div`
  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
  border-radius: 10px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
`;

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

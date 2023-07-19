import React from 'react';
import { Button as UnStyledButton } from '@sheinx/base';
import { useButtonStyle } from '@sheinx/shineout-style';
import { ButtonProps } from './button.type';

const Button = (props: ButtonProps) => {
  const jssStyle = useButtonStyle();
  return <UnStyledButton {...props} jssStyle={jssStyle}></UnStyledButton>;
};

export default Button;

import React from 'react';

//Template
import ButtonTemplate from './button.template';

//Props
export type buttonProps = {
  label: string;
  type?: string;
  onPress: () => void;
};

const Button = ({label, onPress, type}: buttonProps) => {
  return <ButtonTemplate label={label} onPress={onPress} type={type} />;
};

export default Button;

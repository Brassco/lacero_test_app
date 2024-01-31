import React from 'react';

//Template
import TextInputTemplate from './textInput.template';

//Props
export type textInputProps = {
  label: string;
  value: string;
  isTextArea?: boolean;
  onChange: (value: string) => void;
};

const TextInput = ({label, value, onChange, isTextArea}: textInputProps) => {
  return (
    <TextInputTemplate
      label={label}
      value={value}
      onChange={onChange}
      isTextArea={isTextArea}
    />
  );
};

export default TextInput;

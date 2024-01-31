import React from 'react';
import {View, Text, TextInput} from 'react-native';

//Styles
import {styles} from './styles';

//Props
import {textInputProps} from './textInput.component';

const TextInputTemplate = ({
  label,
  onChange,
  value,
  isTextArea,
}: textInputProps) => {
  console.log('[render text input]', isTextArea);
  return (
    <View style={styles.inputWrapper}>
      <View>
        <Text>{label}</Text>
      </View>
      {isTextArea ? (
        <TextInput
          multiline={true}
          numberOfLines={4}
          style={[styles.input, styles.texrArea]}
          value={value}
          onChangeText={onChange}
        />
      ) : (
        <TextInput style={styles.input} value={value} onChangeText={onChange} />
      )}
    </View>
  );
};

export default TextInputTemplate;

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Styles
import {styles} from './styles';

//Props
import {buttonProps} from './button.component';

const ButtonTemplate = ({label, onPress, type}: buttonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.container, type === 'danger' ? styles.danger : null]}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonTemplate;

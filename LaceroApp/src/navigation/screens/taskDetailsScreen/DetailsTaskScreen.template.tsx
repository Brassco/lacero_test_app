import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

//Components
import Button from '../../../components/button/button.component';
import TextInput from '../../../components/textInput/textInput.component';

//Styles
import styles from './styles';

//Props
import {Props} from './DetailsTaskScreen.component';

const DetailsTaskScreen = ({
  title,
  setTitle,
  description,
  setDescription,
  handleSend,
  handleDelete,
  status,
  changeStatus,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput label={'Title'} value={title} onChange={setTitle} />
      <TextInput
        label={'Description'}
        value={description}
        onChange={setDescription}
        isTextArea={true}
      />
      <View style={styles.checkboxSection}>
        <View>
          <Text>Done: </Text>
        </View>
        <View>
          <CheckBox
            disabled={false}
            value={status}
            onValueChange={changeStatus}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button type={'danger'} label={'Delete'} onPress={handleDelete} />
        <Button label={'Save'} onPress={handleSend} />
      </View>
    </View>
  );
};

export default DetailsTaskScreen;

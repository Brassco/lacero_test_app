import React from 'react';
import {View, Text} from 'react-native';

//Components
import Button from '../../../components/button/button.component';
import TextInput from '../../../components/textInput/textInput.component';

//Styles
import styles from './styles';

//Props
import {Props} from './CreateTaskScreen.component';

const CreateTaskScreen = ({
  title,
  setTitle,
  description,
  setDescription,
  handleSend,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create new task</Text>
      <TextInput label={'Title'} value={title} onChange={setTitle} />
      <TextInput
        label={'Description'}
        value={description}
        onChange={setDescription}
        isTextArea={true}
      />
      <View>
        <Button label={'Save'} onPress={handleSend} />
      </View>
    </View>
  );
};

export default CreateTaskScreen;

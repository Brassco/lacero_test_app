import React, {useState} from 'react';
//Navigation Hooks
import {useNavigation} from '@react-navigation/native';
//Template
import CreateTaskScreen from './CreateTaskScreen.template';
//Services
import {createTask} from '../../../services/tasks';
//Constants
import {SCREENS} from '../../../const';

//Props
export type Props = {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  handleSend: () => void;
};

const CreateTaskComponent = () => {
  //Navigation
  const navigation = useNavigation();
  //State
  const [title, setTaskTitle] = useState<string>('');
  const [description, setTaskDescription] = useState<string>('');

  const setTitle = (value: string) => {
    console.log('[setTitle]', value);
    setTaskTitle(value);
  };

  const setDescription = (taskDescription: string) => {
    console.log('[setDescription]', taskDescription);
    setTaskDescription(taskDescription);
  };
  const handleSend = async () => {
    const requestBody = {
      title: title,
      description: description,
    };
    const response = await createTask(requestBody);

    setTitle('');
    setDescription('');

    if (response.status === 200) {
      navigation.navigate(SCREENS.home);
    }
  };
  return (
    <CreateTaskScreen
      title={title}
      description={description}
      setTitle={setTitle}
      setDescription={setDescription}
      handleSend={handleSend}
    />
  );
};

export default CreateTaskComponent;

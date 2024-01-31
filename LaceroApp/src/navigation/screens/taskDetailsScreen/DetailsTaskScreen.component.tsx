import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';

//Navigation Hooks
import {useRoute, useNavigation} from '@react-navigation/native';
//Service
import {updateTask, deleteTask} from '../../../services/tasks';

//Template
import DetailsTaskScreen from './DetailsTaskScreen.template';

//Props
export type Props = {
  title: string;
  setTitle: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  status: boolean;
  changeStatus: () => void;
  handleSend: () => void;
  handleDelete: () => void;
};

const DetailsTaskComponent = () => {
  //Navigation
  const navigation = useNavigation();
  const route = useRoute();

  //State
  const [title, setTaskTitle] = useState<string>('');
  const [description, setTaskDescription] = useState<string>('');
  const [status, setTaskStatus] = useState<boolean>(false);

  const setTitle = (value: string) => {
    setTaskTitle(value);
  };

  const setDescription = (taskDescription: string) => {
    setTaskDescription(taskDescription);
  };

  const handleSend = async () => {
    const requestBody = {
      ...route.params.task,
      title: title,
      description: description,
      status: status,
    };
    const response = await updateTask(requestBody);
    if (response.status === 200) {
      navigation.goBack();
    }
  };

  const onDeleteTask = async () => {
    const {id} = route.params.task;
    if (id) {
      const response = await deleteTask(id);
      if (response.status === 200) {
        navigation.goBack();
      }
    }
  };

  const handleDelete = async () => {
    Alert.alert('Attention!', 'Do you want to delete this task ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: onDeleteTask,
        style: 'destructive',
      },
    ]);
  };

  const handleChangeStatus = () => {
    setTaskStatus(!status);
  };

  useEffect(() => {
    if (route.params) {
      const selectedTask = route.params.task;
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setTaskStatus(selectedTask.status);
    }
  }, [route]);

  return (
    <DetailsTaskScreen
      title={title}
      description={description}
      setTitle={setTitle}
      status={status}
      changeStatus={handleChangeStatus}
      setDescription={setDescription}
      handleSend={handleSend}
      handleDelete={handleDelete}
    />
  );
};

export default DetailsTaskComponent;

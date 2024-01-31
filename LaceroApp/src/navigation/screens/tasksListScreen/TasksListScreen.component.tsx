import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Navigation Hooks
import {useNavigation} from '@react-navigation/native';
//Redux Slice
import {setTasksList} from '../../../redux/slices/tasks';
import type {RootState} from '../../../redux/store';
//Model
import {taskModel} from '../../../models/TaskModel';
//Services
import {getListOfTasks, updateTask} from '../../../services/tasks';
//Template
import TaskListScreen from './TaskListScreen.template';
//Constants
import {SCREENS, WEB_SOCKET_URL} from '../../../const';

//Props
export type listProps = {
  data: taskModel[];
  toggleStatus: (task: taskModel) => void;
  onEditTask: (task: taskModel) => void;
  navigateToCreateTask: () => void;
  startWebSockets: () => void;
};

const TasksListScreen = () => {
  let ws: WebSocket;
  //Redux store
  const taskState = useSelector((state: RootState) => state.task);
  //Redux dispatch
  const dispatch = useDispatch();
  //Navigation
  const navigation = useNavigation();

  const fetchList = async () => {
    const list = await getListOfTasks();

    dispatch(setTasksList(list));
  };

  const toogleTaskStatus = async (task: taskModel) => {
    const updatedTask = {
      ...task,
      status: !task.status,
    };

    const response = await updateTask(updatedTask);
    if (response.status === 200) {
      dispatch(setTasksList(response.data));
    }
  };

  const handleEditTask = (task: taskModel) => {
    navigation.navigate(SCREENS.details, {
      task: task,
    });
  };

  const navigateToCreateTask = () => {
    navigation.navigate(SCREENS.create);
  };

  const startWebSockets = () => {
    ws = new WebSocket(WEB_SOCKET_URL);
    ws.onopen = () => {
      ws.send('Hello, server!'); // Send a message to the server
    };
    ws.onmessage = e => {
      const wsResponse = JSON.parse(e.data);
      if (wsResponse.type === 'Refresh') {
        const newList = wsResponse.body;
        dispatch(setTasksList(newList));
      }
    };
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <TaskListScreen
      data={taskState.tasks}
      toggleStatus={toogleTaskStatus}
      onEditTask={handleEditTask}
      navigateToCreateTask={navigateToCreateTask}
      startWebSockets={startWebSockets}
    />
  );
};

export default TasksListScreen;

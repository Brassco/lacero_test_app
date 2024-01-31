import axios, {AxiosResponse} from 'axios';
import {GET_TASKS_URL, CREATE_TASK_URL, UPDATE_TASK_URL, DELETE_TASK_URL} from '../const';

import {taskModel} from '../models/TaskModel';

export const getListOfTasks = async (): Promise<taskModel[]> => {
  const response = await axios.get(GET_TASKS_URL);
  return response.data;
};

export const createTask = async (taskData: {title: string, description: string}): Promise<AxiosResponse> => {
  return await axios.post(CREATE_TASK_URL, taskData);
};

export const updateTask = async (taskData: taskModel): Promise<AxiosResponse> => {
  const url = UPDATE_TASK_URL.replace(':id', taskData.id)
  return await axios.put(url, taskData);
};

export const deleteTask = async (id: number): Promise<AxiosResponse> => {
  const url = UPDATE_TASK_URL.replace(':id', id)
  return await axios.delete(url);
};
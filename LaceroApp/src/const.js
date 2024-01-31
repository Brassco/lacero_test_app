export const BASE_URL = 'http://localhost:3001/';

export const GET_TASKS_URL = BASE_URL + 'tasks';
export const DELETE_TASK_URL = BASE_URL + 'task/:id';
export const UPDATE_TASK_URL = BASE_URL + 'task/:id';
export const CREATE_TASK_URL = BASE_URL + 'task';

export const WEB_SOCKET_URL = 'ws://localhost:8080/';


export const SCREENS = {
    home: 'Home',
    details: 'Details',
    create: 'Create'
}
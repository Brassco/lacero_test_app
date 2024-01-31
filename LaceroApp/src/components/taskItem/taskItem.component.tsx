import React from 'react';

//Model
import {taskModel} from '../../models/TaskModel';
//Template
import TaskItemTemplate from './taskItem.template';

//Props
export type itemProps = {
  item: taskModel;
  toggleStatus: (task: taskModel) => void;
  onEditTask: (task: taskModel) => void;
};

const TaskItem = ({item, toggleStatus, onEditTask}: itemProps) => {
  const onToggleStatus = () => {
    if (item) {
      toggleStatus(item);
    }
  };

  const onToggleEdit = () => {
    if (item) {
      onEditTask(item);
    }
  };

  return (
    <TaskItemTemplate
      item={item}
      toggleStatus={onToggleStatus}
      onEditTask={onToggleEdit}
    />
  );
};

export default TaskItem;

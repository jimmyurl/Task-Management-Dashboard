import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTask(task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TaskItem;

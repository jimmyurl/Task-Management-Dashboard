import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;

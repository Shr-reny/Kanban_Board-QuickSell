import React from 'react';
import KanbanBoard from './components/kanbanBoard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;

import React from 'react';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <UserList />
        <hr />
        <TodoList />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplates from './components/TodoTemplates';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
// import './App.css';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplates>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplates>
      </TodoProvider>
    </>
  );
}

export default App;

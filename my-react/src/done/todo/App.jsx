import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import EditTodo from './EditTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newTitle) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, title: newTitle } : todo
    ));
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>📝 Ma TodoList</Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container>
        <Routes>
          <Route path="/" element={<TodoList todos={todos} deleteTodo={deleteTodo} />} />
          <Route path="/add" element={<TodoForm addTodo={addTodo} />} />
          <Route path="/edit/:id" element={<EditTodo todos={todos} updateTodo={updateTodo} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
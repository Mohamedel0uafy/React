import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

function EditTodo({ todos, updateTodo }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find(t => t.id === parseInt(id));
  const [text, setText] = useState(todo ? todo.title : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(todo.id, text);
    navigate('/');
  };

  if (!todo) {
    return <div>Tâche non trouvée</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Modifier la tâche</Form.Label>
            <Form.Control
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Modifier
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default EditTodo;
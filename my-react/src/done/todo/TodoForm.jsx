import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
      navigate("/");
    }
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nouvelle tâche</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre tâche..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Ajouter
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TodoForm;
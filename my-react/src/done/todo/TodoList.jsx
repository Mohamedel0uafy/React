import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">Ajouter une tâche</Link>
      
      {todos.map((todo) => (
        <Card key={todo.id} className="mb-2">
          <Card.Body>
            <Row className="align-items-center">
              <Col>
                <span>{todo.title}</span>
              </Col>
              <Col xs="auto">
                <Link to={`/edit/${todo.id}`} className="btn btn-info btn-sm me-2">
                  ✏️ Modifier
                </Link>
                <Button variant="danger" size="sm" onClick={() => deleteTodo(todo.id)}>
                  🗑️ Supprimer
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default TodoList;
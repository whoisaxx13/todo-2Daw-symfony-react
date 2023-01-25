import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EditUserForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Usuario" value='ROLE_USER' />
          <Form.Check type="checkbox" label="Admin" value='ROLE_ADMIN' />
          <Form.Check type="checkbox" label="Deshabilitado" value='ROLE_DISABLED' />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Modificar
        </Button>
      </Form>
  </div>
  )
}

export default EditUserForm
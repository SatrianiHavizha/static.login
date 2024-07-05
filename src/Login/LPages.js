import React from 'react';
import {Button, Form, Card, Col} from 'react-bootstrap';

function LPages() {
  return (
    <Col style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    }}>
    <Card style={{ width: '18rem', height: '20rem'}} className="mt-5">
      <Card.Body className=''>
        <Card.Title className='mb-4' style={{
          textAlign: 'center'
        }}>LOGIN</Card.Title>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </Col>
  );
}

export default LPages;
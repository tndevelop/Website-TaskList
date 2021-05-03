import { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";

function EditingForm(props) {
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Deadline</Form.Label>
          <Form.Control type="date"></Form.Control>
        </Col>
      </Form.Row>
      <Form.Row className="py-3">
        <Col>
          <Form.Check inline label="Private"></Form.Check>
        </Col>
        <Col>
          <Form.Check inline label="Urgent"></Form.Check>
        </Col>
      </Form.Row>
      <Button type="submit" variant="primary">
        Done
      </Button>
      <Button type="cancel" variant="danger">
        Cancel
      </Button>
    </Form>
  );
}

export { EditingForm };

import { useState } from "react";
import { Col, Button, Form } from "react-bootstrap";

function EditingForm(props) {
  
  let task = props.taskList.filterById(props.taskId)[0];
  
  return (
    <Form>
      <Form.Row>
        <Col>
          <Form.Label>Description </Form.Label>
          <Form.Control type="text" value={task.description}></Form.Control>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Label>Deadline</Form.Label>
          <Form.Control type="date" value={task.deadline.format('YYYY-MM-DD')}></Form.Control>
        </Col>
      </Form.Row>
      <Form.Row className="py-3">
        <Col>
          <Form.Check checked={task.private} inline label="Private"></Form.Check>
        </Col>
        <Col>
          <Form.Check checked={task.important} inline label="Urgent"></Form.Check>
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

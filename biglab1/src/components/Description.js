import { Col, Form } from "react-bootstrap";

/**
 * Description contains a checkbox and the text description. Text is red if **urgent** is *true*.
 * @param props Must contain *string* **description** and *bool* **urgent**
 */
function Description(props) {
  return (
    <Col>
      <Form.Check
        type="checkbox"
        label={props.description}
        className={props.important ? "text-danger" : ""}
      />
    </Col>
  );
}

export { Description };

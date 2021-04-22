import { Col, Form } from "react-bootstrap";

function Description(props) {
  return (
    <Col>
      <Form.Check
        type="checkbox"
        label={props.description}
        className={props.urgent ? "text-danger" : ""}
      />
    </Col>
  );
}

export default Description;

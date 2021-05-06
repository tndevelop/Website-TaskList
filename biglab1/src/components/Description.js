import { Col, Form } from "react-bootstrap";

function Description() {
  return (
    <Col>
      <Form.Check
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          props.setDone(props.task, props.id, event.target.checked);
        }}
        type="checkbox"
        label={props.description}
        className={props.important ? "text-danger" : ""}
      />
    </Col>
  );
}

export default Description;

import { Col } from "react-bootstrap";

function Deadline(props) {
  return (
    <Col className="d-flex justify-content-center">
      {props.deadline.format("YYYY-MM-DD HH:mm")}
    </Col>
  );
}
export default Deadline;

import { Col } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";

function Shared(props) {
  return (
    <Col sm="2">
      {props.shared ? <BiUserCircle size="1.85em"></BiUserCircle> : ""}
    </Col>
  );
}

export default Shared;

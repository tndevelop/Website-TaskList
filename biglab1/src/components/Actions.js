import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Col } from "react-bootstrap"

function Actions() {
  return (
    <>
      <Col sm="auto">
        <FaPencilAlt className="pencil"></FaPencilAlt>
      </Col>

      <Col sm={0.5}>
        <FaTrashAlt className="trash"></FaTrashAlt>
      </Col>
    </>
  );
}

export default Actions;

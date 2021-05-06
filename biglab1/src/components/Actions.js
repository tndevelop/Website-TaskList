import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Col } from "react-bootstrap";

function Actions() {
  return (
    <>
      <Col sm="auto">
        <FaPencilAlt
          className="pencil"
          onClick={() => props.setTaskToModify(props.task)}
        ></FaPencilAlt>
      </Col>

      <Col sm={0.5}>
        <FaTrashAlt
          className="trash"
          onClick={() => props.removeTask(props.task)}
        ></FaTrashAlt>
      </Col>
    </>
  );
}

export default Actions;

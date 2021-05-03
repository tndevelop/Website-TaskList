import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Col } from "react-bootstrap";

/**
 * Section that contains modify and delete buttons
 * @param props Must contain *functions* **modify** and **remove**
 */
function Actions(props) {
  return (
    <>
      <Col sm="auto">
        <FaPencilAlt className="pencil" action={props.modify}></FaPencilAlt>
      </Col>
      <Col sm={0.5}>
        <FaTrashAlt className="trash" onClick={() => props.remove(props.task)}></FaTrashAlt>
      </Col>
    </>
  );
}

export { Actions };

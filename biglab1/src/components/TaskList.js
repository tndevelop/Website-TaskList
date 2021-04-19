import { Row, ListGroup } from 'react-bootstrap';
import  Actions  from "./Actions.js";
import  Private  from "./Private";
import Deadline from './Deadline';
import Description from './Description';

function TaskList() {
    return (
        <ListGroup variant="flush">
        {/* Task 1 */}
        <ListGroup.Item>
          <Row>
            <Deadline></Deadline>
            <Actions></Actions>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    );
  }

export default TaskList;
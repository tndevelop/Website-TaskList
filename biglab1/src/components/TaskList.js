import { Row, ListGroup } from "react-bootstrap";
import Actions from "./Actions.js";
import Private from "./Private";
import Deadline from "./Deadline";
import Description from "./Description";

function TaskList(props) {
  return (
    <ListGroup variant="flush">
      {props.taskList.map((t, index) => {
        return (
          <ListGroup.Item key={index} index={index}>
            <Row>
              <Description
                task={t}
                setDone={props.setDone}
                id={t.id}
                done={t.done}
                important={t.important}
                description={t.description}
              />
              <Shared private={t.private}></Shared>
              <Deadline deadline={t.deadline}></Deadline>
              <Actions
                removeTask={props.removeTask}
                setTaskToModify={props.setTaskToModify}
                task={t}
              ></Actions>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default TaskList;

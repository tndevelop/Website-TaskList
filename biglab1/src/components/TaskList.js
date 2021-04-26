import { Row, ListGroup } from "react-bootstrap";
import { Actions } from "./Actions.js";
import { Shared } from "./Shared";
import { Deadline } from "./Deadline";
import { Description } from "./Description";

function TaskList(props) {

  const filteredTaskList = filterList(props.taskList, props.selected);

  return (
    <ListGroup variant="flush">
      {filteredTaskList.map((t, index) => {
        return (
          <ListGroup.Item key={index} index={index}>
            <Row>
              <Description urgent={t.urgent} description={t.description} />
              <Shared private={t.private}></Shared>
              <Deadline deadline={t.deadline}></Deadline>
              <Actions taskList={props.taskList}></Actions>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

function filterList(taskList, selected) {
  switch (selected) {
    case 'All':
      return taskList.filterAll();
    case 'Important':
      return taskList.filterByImportant();
    case 'Today':
      return taskList.filterByToday();
    case 'Next7':
      return taskList.filterByNextWeek();
    case 'Private':
      return taskList.filterByPrivate();
    default:
      break;
  }
}

export default TaskList;

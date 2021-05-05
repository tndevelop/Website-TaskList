import { Col, Container, Modal, Button, Form } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { AddEditForm } from "./EditingForm";
import TaskList from "./TaskList";
import { useState } from "react";

function MainContent(props) {
  const [taskToModify, setTaskToModify] = useState(undefined);
  return (
    <Col as={Container} fluid="xl" className="mainContainer below-nav">
      <h1 id="selectedFilter">
        <b>Filter</b>: {props.selected}
      </h1>
      <TaskList
        setDone={props.setDone}
        taskList={props.taskList}
        selected={props.selected}
        setTaskToModify={(task) => setTaskToModify(task)}
        removeTask={props.removeTask}
      ></TaskList>
      <AddEditForm
        createElement={props.createElement}
        task={taskToModify}
        delete={props.delete}
      ></AddEditForm>
    </Col>
  );
}

export default MainContent;

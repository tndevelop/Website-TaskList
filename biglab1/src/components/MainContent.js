import { Col, Container, Modal, Button, Form } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import { AddEditForm } from "./EditingForm";
import TaskList from "./TaskList";
import { useState } from "react";

function MainContent(props) {
  const [taskToModify, setTaskToModify] = useState(undefined);
  const [hideForm, setHideForm] = useState(true);

  const modifyTask = (task) => {
    setTaskToModify(task);
    setHideForm(false);
  };

  return (
    <Col as={Container} fluid="xl" className="mainContainer below-nav">
      <h1 id="selectedFilter">
        <b>Filter</b>: {props.selected}
      </h1>
      <TaskList
        setDone={props.setDone}
        taskList={props.taskList}
        selected={props.selected}
        setTaskToModify={modifyTask}
        removeTask={props.removeTask}
      ></TaskList>
      <AiFillPlusCircle
        className="plusButton"
        color="green"
        onClick={() => {
          setHideForm(false);
        }}
      ></AiFillPlusCircle>
      {hideForm ? (
        ""
      ) : (
        <AddEditForm
          createElement={props.createElement}
          task={taskToModify}
          hideForm={hideForm}
          setHideForm={(val) => setHideForm(val)}
          delete={props.removeTask}
        ></AddEditForm>
      )}
    </Col>
  );
}

export default MainContent;

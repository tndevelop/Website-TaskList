import { Col, Container, Modal, Button, Form } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskList from "./TaskList";
import { useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);

function MainContent(props) {
  return (
    <Col as={Container} fluid="xl" className="mainContainer below-nav">
      <h1 id="selectedFilter">
        <b>Filter</b>: all
      </h1>
      <TaskList setDone={props.setDone} taskList={props.taskList} selected={props.selected}></TaskList>
      <MyForm createElement={props.createElement}></MyForm>

      {/* Bottom plus */}
      <AiFillPlusCircle className="plusButton" color="green"></AiFillPlusCircle>
    </Col>
  );
}

function MyForm(props) {
  //State to show modal
  const [hidden, setHidden] = useState(true);
  //Setters functions
  const Show = () => setHidden(false);
  const Hide = () => setHidden(true);
  const resetFormFields = () => {
    setDate(dayjs());
    setDescription("");
    setUrgent(false);
    setPrivate(true);
  }
  const hideAndReset = () => {
    Hide();
    resetFormFields();
  }
  //Validate form
  const ValidateForm = () => {
    return description !== "" && date.isSameOrAfter(dayjs(), "date");
  };
  //Confirm adding a task
  const SubmitChanges = (event) => {
    event.preventDefault();
    if (!ValidateForm()) return;
    props.createElement(description, isUrgent, isPrivate, date);
    resetFormFields();
    Hide();
  };
  //Task paramaters
  const [date, setDate] = useState(dayjs());
  const [description, setDescription] = useState("");
  const [isUrgent, setUrgent] = useState(false);
  const [isPrivate, setPrivate] = useState(true);

  return (
    <>
      <Button onClick={Show}>Add new task</Button>

      {/*Modal*/}

      <Modal animation={false} show={!hidden} onHide={Hide}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="selectedTask">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                defaultValue={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="selectedDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                defaultValue={date.format("YYYY-MM-DD")}
                onChange={(event) => setDate(dayjs(event.target.value))}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                inline
                type="checkbox"
                checked={isPrivate}
                label="is private?"
                onChange={(event) => {
                  setPrivate(event.target.checked);
                }}
              />
              <Form.Check
                inline
                type="checkbox"
                checked={isUrgent}
                label="is urgent?"
                onChange={(event) => setUrgent(event.target.checked)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={hideAndReset} variant="secondary">
            Close
          </Button>
          <Button onClick={SubmitChanges} variant="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MainContent;

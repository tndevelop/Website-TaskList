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
      <TaskList
        setDone={props.setDone}
        taskList={props.taskList}
        selected={props.selected}
      ></TaskList>
      <MyForm createElement={props.createElement}></MyForm>
    </Col>
  );
}

function MyForm(props) {
  //State to show modal
  const [hidden, setHidden] = useState(true);
  //Task paramaters
  const [date, setDate] = useState(dayjs());
  const [description, setDescription] = useState("");
  const [isUrgent, setUrgent] = useState(false);
  const [isPrivate, setPrivate] = useState(true);

  //Validate form
  const validDescription = () => {
    return description.length !== 0 && description.search(/^\s+$/gm) === -1;
  };
  const validDeadline = () => {
    return date.isSameOrAfter(dayjs(), "day");
  };

  //Actions
  const submitChanges = (event) => {
    event.preventDefault();
    if (!validDescription() || !validDeadline()) return;
    props.createElement(description, isUrgent, isPrivate, date);
    resetFormFields();
    setHidden(true);
  };
  const resetFormFields = () => {
    setDate(dayjs());
    setDescription("");
    setUrgent(false);
    setPrivate(true);
  };
  const hideAndReset = () => {
    setHidden(true);
    resetFormFields();
  };

  return (
    <>
      {/* Bottom plus */}

      <AiFillPlusCircle
        className="plusButton"
        color="green"
        onClick={() => setHidden(false)}
      ></AiFillPlusCircle>

      {/*Modal*/}

      <Modal animation={false} show={!hidden} onHide={() => setHidden(true)}>
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
                isInvalid={!validDescription()}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="selectedDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                isInvalid={!validDeadline()}
                type="date"
                value={date.format("YYYY-MM-DD")}
                onChange={(event) => setDate(dayjs(event.target.value))}
              />
              <Form.Control.Feedback type="invalid">
                Date must be today or after
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                inline
                type="checkbox"
                checked={isPrivate}
                label="is private?"
                onChange={(event) => setPrivate(event.target.checked)}
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
          <Button onClick={submitChanges} variant="primary">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default MainContent;

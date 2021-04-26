import { Col, Container, Modal, Button, Form } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskList from "./TaskList";
import { useState } from 'react';
import dayjs from "dayjs"

function MainContent(props) {
  return (
    <Col as={Container} fluid="xl" className="mainContainer below-nav">
      <h1 id="selectedFilter">
        <b>Filter</b>: all
      </h1>
      <TaskList taskList={props.taskList}></TaskList>
      <MyForm createElement = {props.createElement}></MyForm>
      {/* Bottom plus */}
      <AiFillPlusCircle className="plusButton" color="green"></AiFillPlusCircle>
    </Col>
  );
}


function MyForm(props) {
  const [hidden, setHidden] = useState(true);

  const Show = () => setHidden(false);
  const Hide = () => setHidden(true);
  const SubmitChanges = (event) => {
    event.preventDefault();
    props.createElement(description, isUrgent,isPrivate, date);
    Hide();
  }

  const [date, setDate] = useState(dayjs());
  const [description, setDescription] = useState("");
  const [isUrgent, setUrgent] = useState(false);
  const [isPrivate, setPrivate] = useState(true);

  
  return (
    <>
      <Button onClick={Show}>Add new task</Button>
      < Modal show={!hidden} onHide={Hide}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId='selectedTask'>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" value={""} onChange={(event) => setDescription(event.target.value)}/>
            </Form.Group>

            <Form.Group controlId='selectedDate'>
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" value={dayjs().format('YYYY-MM-DD')} onChange={(event) => setDate(dayjs(event.target.value))} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check inline type="checkbox" checked={isPrivate} label="is private?" onChange={ (event) =>{ console.log(event.target.type); setPrivate(event.target.checked); } }/>
              <Form.Check inline type="checkbox" checked={isUrgent} label="is urgent?" onChange={(event) => setUrgent(event.target.checked)}/>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={Hide} variant="secondary">Close</Button>
          <Button onClick={SubmitChanges} variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal >

    </>

  )

}
export default MainContent;

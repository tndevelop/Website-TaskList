import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Form, ListGroup, Container, Col, Row, Image } from "react-bootstrap";
import {
  Pencil,
  PersonSquare,
  Trash,
  PlusCircleFill,
} from "react-bootstrap-icons";
import "./App.css";
import { ReactComponent as PlusButton } from "./add.svg";

function App() {
  return (
    <Container fluid="xl" className="mainContainer">
      <h1 id="selectedFilter">
        <b>Filter</b>: all
      </h1>
      <ListGroup variant="flush">
        {/* Task 1 */}
        <ListGroup.Item>
          <Row>
            <Col>
              <Form.Check type="checkbox" label="Study for the exam" />
            </Col>

            <Col sm="auto">
              <Pencil className="pencil"></Pencil>
            </Col>

            <Col sm={0.5}>
              <Trash className="trash"></Trash>
            </Col>
          </Row>
        </ListGroup.Item>
        {/* Taks2 */}
        <ListGroup.Item>
          <Row>
            <Col>
              <Form.Check
                type="checkbox"
                label="Prepare the slides for the exam"
              />
            </Col>
            <Col sm="2">
              <PersonSquare></PersonSquare>
            </Col>

            <Col>Saturday, June 20th 2020, 12:00:00 am</Col>

            <Col sm="auto">
              <Pencil className="pencil"></Pencil>
            </Col>

            <Col sm="0.5">
              <Trash className="trash"></Trash>
            </Col>
          </Row>
        </ListGroup.Item>
        {/* Task 3 */}
        <ListGroup.Item>
          <Row>
            <Col>
              <Form.Check type="checkbox" label="Call Mary" />
            </Col>

            <Col sm="auto">
              <Pencil className="pencil"></Pencil>
            </Col>

            <Col sm={0.5}>
              <Trash className="trash"></Trash>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      {/* Bottom plus */}

      <PlusCircleFill className="plusButton" color="green"></PlusCircleFill>
    </Container>
  );
}

export default App;

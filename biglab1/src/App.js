
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Form, ListGroup } from "react-bootstrap";

import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BiUserCircle } from "react-icons/bi";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <Container fluid="true">

      <MyNavbar></MyNavbar>
    
      <Row>
       
        <Col sm={3} xs={12} className="vheight-100 bg-light below-nav d-sm-block collapse" id="left-sidebar">
            <ListGroup variant="flush">
              <ListGroup.Item active action href="#">All</ListGroup.Item>
              <ListGroup.Item action href="#">Important</ListGroup.Item>
              <ListGroup.Item action href="#">Today</ListGroup.Item>
              <ListGroup.Item action href="#">Next 7 Days</ListGroup.Item>
              <ListGroup.Item action href="#">Private</ListGroup.Item>
            </ListGroup>
       </Col>

        <Col as={Container} fluid="xl" className="mainContainer below-nav">
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
                  <FaPencilAlt className="pencil"></FaPencilAlt>
                </Col>

                <Col sm={0.5}>
                  <FaTrashAlt className="trash"></FaTrashAlt>
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
                  <BiUserCircle size="1.85em"></BiUserCircle>
                </Col>

                <Col>Saturday, June 20th 2020, 12:00:00 am</Col>

                <Col sm="auto">
                  <FaPencilAlt className="pencil"></FaPencilAlt>
                </Col>

                <Col sm="0.5">
                  <FaTrashAlt className="trash"></FaTrashAlt>
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
                  <FaPencilAlt className="pencil"></FaPencilAlt>
                </Col>

                <Col sm={0.5}>
                  <FaTrashAlt className="trash"></FaTrashAlt>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          {/* Bottom plus */}
          <AiFillPlusCircle
            className="plusButton"
            color="green"
          ></AiFillPlusCircle>
        </Col>
      </Row>
    </Container>

  );
}


export default App;

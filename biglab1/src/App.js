
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Navbar, Form, ListGroup } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl'
import React from "react";
import { PersonSquare } from "react-bootstrap-icons";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <Navbar bg="success" variant="dark" className="justify-content-between">

        <Navbar.Brand href="index.html">
          <BsCheckAll></BsCheckAll> ToDo Manager
</Navbar.Brand>



        <Form className="form-inline my-2 my-lg-0 mx-auto d-none d-sm-block" action="#" role="search" aria-label="Quick search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>


        <a className="nav-item nav-link" href="#">
          <IconContext.Provider value={{ size: "2em" }}>
            <div>
              <BiUserCircle></BiUserCircle>
            </div>
          </IconContext.Provider>
        </a>

      </Navbar>


      <Row className="vheight-100">
        <Col sm={4} xs={12} className="bg-light below-nav d-sm-block collapse" id="left-sidebar">
          <ListGroup variant="flush">
            <ListGroup.Item active action href="#">All</ListGroup.Item>
            <ListGroup.Item action href="#">Important</ListGroup.Item>
            <ListGroup.Item action href="#">Today</ListGroup.Item>
            <ListGroup.Item action href="#">Next 7 Days</ListGroup.Item>
            <ListGroup.Item action href="#">Private</ListGroup.Item>
          </ListGroup>

        </Col>
      </Row>
      <Row>Navn</Row>
      <Row>
        <Col sm="auto">Side</Col>
        <Col as={Container} fluid="xl" className="mainContainer">
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
                  <PersonSquare></PersonSquare>
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

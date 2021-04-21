import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Navbar, Form, ListGroup } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl'
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckAll } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import {ListGroupContainer} from "./components/MySide.js";


const filterNames = ['All', 'Important', 'Next7', 'Private'];
function App() {
  return (
    <Container fluid="true">

      <Navbar  fixed="top" bg="success" variant="dark" className="justify-content-between">

        <Navbar.Brand href="index.html">
          <BsCheckAll size="2em"></BsCheckAll> ToDo Manager
        </Navbar.Brand>

        <Form className="form-inline my-2 my-lg-0 mx-auto d-none d-sm-block" action="#" role="search" aria-label="Quick search">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <a className="nav-item nav-link" href="index.html">
              <BiUserCircle size="2em" color="white"></BiUserCircle>
        </a>

      </Navbar>
    
      <Row>
      <Col sm={3} xs={12} className="vheight-100 bg-light below-nav d-sm-block collapse" id="left-sidebar">
        <ListGroupContainer names={filterNames}/>


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

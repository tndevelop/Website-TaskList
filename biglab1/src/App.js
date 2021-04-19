
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Navbar, Form, ListGroup } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl'
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsCheckAll } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import MainContent from "./components/MainContent";
import './components/TaskList.js';


/*const fakeExams = [
  {code: '01TYMOV', score: 28, date: dayjs('2021-03-01')},
  {code: '01SQJOV', score: 29, date: dayjs('2021-06-03')},
  {code: '04GSPOV', score: 18, date: dayjs('2021-05-24')},
  {code: '01TXYOV', score: 24, date: dayjs('2021-06-21')}
];*/ 

const taskList = [
  {id:0, description:'Study for the exam', Urgent:true, Private:false, deadline:"2021-03-16T09:00:00.000Z"},
  {id:1, description:'Prepare the slides for the exam', Urgent:true, Private:false, deadline:"2021-03-08T15:20:00.000Z"},
  {id:2, description:'Call Mary', Urgent:true, Private:false, deadline:"2021-03-08T15:20:00.000Z"}
];


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
            <ListGroup variant="flush">
              <ListGroup.Item active action href="#">All</ListGroup.Item>
              <ListGroup.Item action href="#">Important</ListGroup.Item>
              <ListGroup.Item action href="#">Today</ListGroup.Item>
              <ListGroup.Item action href="#">Next 7 Days</ListGroup.Item>
              <ListGroup.Item action href="#">Private</ListGroup.Item>
            </ListGroup>
       </Col>

        <MainContent taskList={taskList}/>
        
      </Row>
    </Container>

  );
}


export default App;

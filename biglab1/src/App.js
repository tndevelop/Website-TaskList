import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupContainer } from "./components/MySide.js";
import MyNavbar from "./components/MyNavbar";
import MainContent from "./components/MainContent";
import './components/TaskList.js';
import { Task, List } from './TaskListCreate';

// create some dummy tasks
const t1 = new Task(1, "laundry", 0, 1);
const t2 = new Task(2, "monday lab", 0, 0, "2021-03-16T09:00:00.000Z");
const t3 = new Task(3, "phone call", 1, 0, "2021-03-08T15:20:00.000Z");

// create the task list and add the dummy tasks
const taskList = new List();
taskList.add(t1);
taskList.add(t2);
taskList.add(t3);
 
const filterNames = ["All", "Important", "Today", "Next7", "Private"];

function App() {
  return (
    <Container fluid="true">
      <MyNavbar></MyNavbar>
      <Row>
        <Col
          sm={3}
          xs={12}
          className="vheight-100 bg-light below-nav d-sm-block collapse"
          id="left-sidebar"
        >
          <ListGroupContainer names={filterNames} />
        </Col>
        <MainContent taskList={taskList.getList()} />
      </Row>
    </Container>
  );
}

export default App;

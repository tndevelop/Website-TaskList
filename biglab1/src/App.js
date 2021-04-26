import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupContainer } from "./components/MySide.js";
import MyNavbar from "./components/MyNavbar";
import MainContent from "./components/MainContent";
import './components/TaskList.js';
import { Task, List } from './TaskListCreate';

// create some dummy tasks
// id, description, urgent, private, deadline
const t1 = new Task(1, "laundry", false, true);
const t2 = new Task(2, "monday lab", false, false, "2021-03-16T09:00:00.000Z");
const t3 = new Task(3, "phone call", true, false, "2021-03-08T15:20:00.000Z");
const t4 = new Task(4, "lab", true, false, "2021-04-26T15:20:00.000Z");
const t5 = new Task(5, "study", false, true, "2021-04-27T15:20:00.000Z");

// create the task list and add the dummy tasks
const taskList = new List();
taskList.add(t1);
taskList.add(t2);
taskList.add(t3);
taskList.add(t4);
taskList.add(t5);

const filterNames = ["All", "Important", "Today", "Next7", "Private"];

function App() {
  const [selectedItem, setSelectedItem] = useState("All");
  const chooseFilter = (selected) => setSelectedItem(selected);

  return (
    <Container fluid="true">
      <MyNavbar></MyNavbar>
      <Row>
        <Col
          sm={3}
          xs={12}
          className="vheight-100 bg-light below-nav sidebar-left-padding d-sm-block collapse"
          id="left-sidebar"
        >
        <ListGroupContainer names={filterNames} selectedItem={selectedItem} chooseFilter={chooseFilter}/>
        </Col>
        <MainContent taskList={taskList} selected={selectedItem}/>
      </Row>
    </Container>
  );
}

export default App;

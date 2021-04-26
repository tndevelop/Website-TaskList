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
import { List } from './TaskListCreate';



// create the task list and add the dummy tasks
// id, description, urgent, private, deadline
const taskList = new List();

taskList.createElement("laundry", false, true);
taskList.createElement("monday lab", false, false, "2021-03-16T09:00:00.000Z");
taskList.createElement("phone call", true, false, "2021-03-08T15:20:00.000Z");
taskList.createElement("lab", true, false, "2021-04-26T15:20:00.000Z");
taskList.createElement("study", false, true, "2021-04-27T15:20:00.000Z");



const filterNames = ["All", "Important", "Today", "Next7", "Private"];

function App() {
  const [tl, setTl] = useState(taskList);
  const [selectedItem, setSelectedItem] = useState("All");
  const chooseFilter = (selected) => setSelectedItem(selected);

  const addElementAndRefresh = (description, isUrgent, isPrivate, deadline) => {
    setTl(taskList.createElement(description, isUrgent, isPrivate, deadline));
  };

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
        <MainContent createElement={addElementAndRefresh} taskList={taskList} selected={selectedItem}/>
      </Row>
    </Container>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React from "react";
import { useState } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import './components/TaskList.js';
import { List } from './TaskListCreate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CentralRow } from './components/CentralRow';
import { EditingForm } from "./components/EditingForm";

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
  const [selectedItem, setSelectedItem] = useState("All");
  const chooseFilter = (selected) => setSelectedItem(selected);
  const [addedTask, setAddedTask] = useState(true); //addedTask cambia alternativamente a true o a false quando viene aggiunto un nuovo task

  const addElementAndRefresh = (description, isUrgent, isPrivate, deadline) => {
    taskList.createElement(description, isUrgent, isPrivate, deadline)
    setAddedTask(!addedTask);
  };

  const setDone = (id, done) => {
    taskList.setDone(id, done);
  }

  return (
    <Router>

      <Container fluid="true">
        <MyNavbar></MyNavbar>
        <Switch>

          <Route exact path="/edit" render={({location}) => 
            <CentralRow showEditingForm="true" taskId={location.state.taskId} filterNames={filterNames} selectedItem={"All"} chooseFilter={chooseFilter}
              setDone={setDone} createElement={addElementAndRefresh} taskList={taskList} selected={"All"}>
            </CentralRow>

          } />

          <Route exact path="/:selected" render={({ match }) => {
            console.log(match.params.selected)
            return (
              <CentralRow filterNames={filterNames} selectedItem={match.params.selected} chooseFilter={chooseFilter}
                setDone={setDone} createElement={addElementAndRefresh} taskList={taskList} selected={match.params.selected}>
              </CentralRow>)
          }
          } />



          <Route path="/" render={() =>
            <CentralRow filterNames={filterNames} selectedItem={"All"} chooseFilter={chooseFilter}
              setDone={setDone} createElement={addElementAndRefresh} taskList={taskList} selected={"All"}>
            </CentralRow>
          } />


        </Switch>
      </Container>

    </Router>
  );
}

export default App;

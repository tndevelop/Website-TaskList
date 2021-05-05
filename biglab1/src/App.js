import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import "./components/TaskList.js";
import { List } from "./TaskListCreate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CentralRow } from "./components/CentralRow";
import { EditingForm } from "./components/EditingForm";

// create the task list and add the dummy tasks
// id, description, urgent, private, deadline
const DummyTaskList = new List();
DummyTaskList.createElement("laundry", false, true);
DummyTaskList.createElement(
  "monday lab",
  false,
  false,
  "2021-03-16T09:00:00.000Z"
);
DummyTaskList.createElement(
  "phone call",
  true,
  false,
  "2021-03-08T15:20:00.000Z"
);
DummyTaskList.createElement("lab", true, false, "2021-05-04T15:20:00.000Z");
DummyTaskList.createElement("study", false, true, "2021-05-10T15:20:00.000Z");

const filterNames = ["All", "Important", "Today", "Next7", "Private"];

function App() {
  const [list, setList] = useState(DummyTaskList.getList()); //stato per recuperare tutti i task meno quelli cancellati
  const [taskList, setTaskList] = useState([...list]);
  const [selectedItem, setSelectedItem] = useState("All");

  const addElementAndRefresh = (description, isUrgent, isPrivate, deadline) => {
    taskList.createElement(description, isUrgent, isPrivate, deadline);
    setAddedTask(!addedTask);
  };

  const setDone = (id, done) => {
    taskList.setDone(id, done);
  };

  return (
    <Router>
      <Container fluid="true">
        <MyNavbar></MyNavbar>
        <Switch>
          <Route
            exact
            path="/edit"
            render={({ location }) => (
              <CentralRow
                showEditingForm="true"
                taskId={location.state.taskId}
                filterNames={filterNames}
                selectedItem={"All"}
                chooseFilter={chooseFilter}
                setDone={setDone}
                createElement={addElementAndRefresh}
                taskList={taskList}
                selected={"All"}
              ></CentralRow>
            )}
          />

          <Route
            exact
            path="/:selected"
            render={({ match }) => {
              console.log(match.params.selected);
              return (
                <CentralRow
                  filterNames={filterNames}
                  selectedItem={match.params.selected}
                  chooseFilter={chooseFilter}
                  setDone={setDone}
                  createElement={addElementAndRefresh}
                  taskList={taskList}
                  selected={match.params.selected}
                ></CentralRow>
              );
            }}
          />

          <Route
            path="/"
            render={() => (
              <CentralRow
                filterNames={filterNames}
                selectedItem={"All"}
                chooseFilter={chooseFilter}
                setDone={setDone}
                createElement={addElementAndRefresh}
                taskList={taskList}
                selected={"All"}
              ></CentralRow>
            )}
          />
        </Switch>
      </Container>
    </Router>
    /*
    setTaskList((taskList) => taskList.createElement(description, isUrgent, isPrivate, deadline));
  };

  function filterList(selected) {
    switch (selected) {
      case "All":
        setTaskList(list.filter( () => true));
        break;
      case "Important":
        setTaskList(list.filter((task) => task.isImportant()));
        break;
      case "Today":
        setTaskList(list.filter( (task) => task.isToday()));
        break;
      case "Next7":
        setTaskList(list.filter( (task) => task.isNextWeek()));
        break;
      case "Private":
        setTaskList(list.filter( (task) => task.isPrivate()));
        break;
      default:
        break;
    }
    setSelectedItem(selected);
  }

  const removeTask = (task) => {
    setTaskList((taskList) => taskList.filter( (t) => t.id!==task.id));
    setList((list) => list.filter( (t) => t.id!==task.id));
  }

  const setDone = (task, id, done) => {
    task.setDone(id, done);
  }

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
        <ListGroupContainer names={filterNames} selectedItem={selectedItem} chooseFilter={filterList}/>
        </Col>
        <MainContent setDone={setDone} createElement={addElementAndRefresh} taskList={taskList} removeTask={removeTask}/>
      </Row>
    </Container>
*/
  );
}

export default App;

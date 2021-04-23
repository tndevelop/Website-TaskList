import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupContainer } from "./components/MySide.js";
import MyNavbar from "./components/MyNavbar";
import MainContent from "./components/MainContent";
<<<<<<< HEAD
import './components/TaskList.js';
import { Task, List } from './TaskListCreate';

// create some dummy tasks
const t1 = new Task(1, "laundry", 0, 1)
const t2 = new Task(2, "monday lab", 0, 0, "2021-03-16T09:00:00.000Z")
const t3 = new Task(3, "phone call", 1, 0, "2021-03-08T15:20:00.000Z")

// create the task list and add the dummy tasks
const taskList = new List();
taskList.add(t1);
taskList.add(t2);
taskList.add(t3);
 

=======
import "./components/TaskList.js";
import dayjs from "dayjs";

/*const fakeExams = [
  {code: '01TYMOV', score: 28, date: dayjs('2021-03-01')},
  {code: '01SQJOV', score: 29, date: dayjs('2021-06-03')},
  {code: '04GSPOV', score: 18, date: dayjs('2021-05-24')},
  {code: '01TXYOV', score: 24, date: dayjs('2021-06-21')}
];*/

const taskList = [
  {
    id: 0,
    description: "Study for the exam",
    urgent: true,
    shared: true,
    deadline: dayjs("2021-03-16T09:00:00.000Z"),
  },
  {
    id: 1,
    description: "Prepare the slides for the exam",
    urgent: false,
    shared: false,
    deadline: dayjs("2021-03-08T15:20:00.000Z"),
  },
  {
    id: 2,
    description: "Call Mary",
    urgent: true,
    shared: false,
    deadline: dayjs("2021-03-08T15:20:00.000Z"),
  },
];

const filterNames = ["All", "Important", "Today", "Next7", "Private"];
>>>>>>> b0a1b30bd181f2d22ed552efb0a201bb8cf41ee3
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
        <MainContent taskList={taskList} />
      </Row>
    </Container>
  );
}

export default App;

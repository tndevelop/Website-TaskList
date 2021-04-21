import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Form, ListGroup } from "react-bootstrap";

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BiUserCircle } from "react-icons/bi";
import { ListGroupContainer } from "./components/MySide.js";
import MyNavbar from "./components/MyNavbar";
import MainContent from "./components/MainContent";
import "./components/TaskList.js";

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
    private: true,
    deadline: "2021-03-16T09:00:00.000Z",
  },
  {
    id: 1,
    description: "Prepare the slides for the exam",
    urgent: false,
    private: false,
    deadline: "2021-03-08T15:20:00.000Z",
  },
  {
    id: 2,
    description: "Call Mary",
    urgent: true,
    private: false,
    deadline: "2021-03-08T15:20:00.000Z",
  },
];

const filterNames = ["All", "Important", "Next7", "Private"];
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

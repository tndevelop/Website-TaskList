import { Col, Container } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskList from "./TaskList";

function MainContent(props) {
  return (
    <Col as={Container} fluid="xl" className="mainContainer below-nav">
      <h1 id="selectedFilter">
        <b>Filter</b>: all
      </h1>
      <TaskList taskList={props.taskList} selected={props.selected}></TaskList>
      {/* Bottom plus */}
      <AiFillPlusCircle className="plusButton" color="green"></AiFillPlusCircle>
    </Col>
  );
}

export default MainContent;

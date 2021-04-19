import { Col, Row, Container, Form, ListGroup } from 'react-bootstrap';
import { AiFillPlusCircle } from "react-icons/ai";
import { Actions } from "components/Actions.js";
import { Private } from "components/Private.js";
import Deadline from './Deadline';
import Description from './Description';


function MainContent(props){
    return(
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
                <Actions></Actions>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          {/* Bottom plus */}
          <AiFillPlusCircle
            className="plusButton"
            color="green"
          ></AiFillPlusCircle>
        </Col>
    );
}

export default MainContent;
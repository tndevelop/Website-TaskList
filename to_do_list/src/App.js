/*<<<<<<< Updated upstream
import logo from "./logo.svg";
import "./App.css";
=======

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, ListGroup, Navbar } from 'react-bootstrap';
>>>>>>> Stashed changes
*/
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, ListGroup, Navbar } from 'react-bootstrap';
function App() {
  return (
    <Container fluid>
      <Row className="vheight-100">
        <Col sm={4} xs={12} className="bg-light below-nav d-sm-block collapse" id="left-sidebar">
          <ListGroup variant="flush">
            <ListGroup.Item active action href="#">All</ListGroup.Item>
            <ListGroup.Item action href="#">Important</ListGroup.Item>
            <ListGroup.Item action href="#">Today</ListGroup.Item>
            <ListGroup.Item action href="#">Next 7 Days</ListGroup.Item>
            <ListGroup.Item action href="#">Private</ListGroup.Item>
          </ListGroup> 
          
        </Col>
      </Row>
    </Container>
     
  );
}




export default App;

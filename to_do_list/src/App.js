import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup, Container, Col, Row } from 'react-bootstrap';
import { Pencil, PersonSquare, Trash } from 'react-bootstrap-icons';
import "./App.css";

function App() {
  return (

    <Container>
      <h1><b>Filter</b>: all</h1>
      <ListGroup className="list-group-flush">

        <ListGroup.Item>
          <Row>

            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Study for the exam" />
              </Form.Group>
            </Col>

            <Col md="auto">
              <Pencil></Pencil>
            </Col>

            <Col xs={0.5}>
              <Trash></Trash>
            </Col>

          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>

            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Prepare the slides for the exam" />
              </Form.Group>
            </Col>

            <Col xs lg="2">
              <PersonSquare></PersonSquare>
            </Col>

            <Col>
              <p size="sm">Saturday, June 20th 2020, 12:00:00 am</p>
            </Col>

            <Col md="auto">
              <Pencil></Pencil>
            </Col>

            <Col xs={0.5}>
              <Trash></Trash>
            </Col>

          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>

            <Col>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Call Mary" />
              </Form.Group>
            </Col>

            <Col md="auto">
              <Pencil></Pencil>
            </Col>

            <Col xs={0.5}>
              <Trash></Trash>
            </Col>

          </Row>
        </ListGroup.Item>

      </ListGroup>

      <Button className="fixed-right-bottom" variant="success">+</Button>

    </Container>



    /* <Container>
      <Col md={8} class="below-nav">
  
        <h1><b>Filter</b>: all</h1>
  
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <div class="d-flex bd-highlight w-100 justify-content-between">
              <div class="p-2 bd-highlight">
                <div class="custom-control custom-checkbox">
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Study for the exam"/>
                  </Form.Group>
  
                </div>
              </div>
              <div class="p-2 bd-highlight">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
              </div>
            </div>
          </ListGroup.Item>
  
          <ListGroup.Item>
            <div class="d-flex h-25 d-inline-block justify-content-between">
              <div class="p-2 bd-highlight">
                <div class="custom-control custom-checkbox">
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Prepare the slides for the exam" />
                  </Form.Group>
                </div>
              </div>
              <div class="p-2 bd-highlight">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                </svg>
              </div>
              <div class="p-2 bd-highlight">
                <p size="sm">Saturday, June 20th 2020, 12:00:00 am</p>
              </div>
            </div>
          </ListGroup.Item>
  
          <ListGroup.Item>
            <div class="d-flex flex-row bd-highlight w-100 justify-content-between">
  
              <div class="p-2 bd-highlight">
                <div class="custom-control custom-checkbox">
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Call Mary" />
                  </Form.Group>
                </div>
              </div>
            </div>
          </ListGroup.Item>
  
        </ListGroup>
  
        <Button variant="success" fixed="right-bottom">&#43;</Button>
  
      </Col>
      </Container> */

  );

}


export default App;

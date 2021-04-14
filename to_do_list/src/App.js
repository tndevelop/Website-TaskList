

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Navbar } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl'
import { BsCheckAll } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import "./App.css";
import React from 'react';


function App() {
  return (
    <div className="App">


      <body>
        <Navbar bg="success" variant="dark" className="justify-content-between">

          <Navbar.Brand href="index.html">
            <BsCheckAll></BsCheckAll> ToDo Manager
          </Navbar.Brand>



          <Form className="form-inline my-2 my-lg-0 mx-auto d-none d-sm-block" action="#" role="search" aria-label="Quick search">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>


          <a className="nav-item nav-link" href="#">
            <IconContext.Provider value={{ size: "2em" }}>
              <div>
                <BiUserCircle></BiUserCircle>
              </div>
            </IconContext.Provider>
          </a>

        </Navbar>
      </body>

    </div>

  );
}

export default App;

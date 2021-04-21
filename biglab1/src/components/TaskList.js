import { Row, ListGroup } from 'react-bootstrap';
import  Actions  from "./Actions.js";
import  Private  from "./Private";
import Deadline from './Deadline';
import Description from './Description';

function TaskList(props) {
    return (
        <ListGroup variant="flush">
        {props.taskList.map((t, index) => {
    return <ListGroup.Item key={index} index={index}>
              <Row>
                <Description urgent={t.urgent} description={t.description}/>
                
                {t.private ? <Private></Private> : false }
                <Deadline deadline={t.deadline}></Deadline>
                <Actions taskList={props.taskList}></Actions>
              </Row>
            </ListGroup.Item>
          
        })}
        
      </ListGroup>
    );
  }

export default TaskList;
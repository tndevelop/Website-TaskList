import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

function ListGroupContainer(props) {

    return (
        <ListGroup variant="flush">
            {
                props.names.map(
                    (name, index) => <Link key={index} to={name}><ItemSide name={name} index={index} key={index} selected={name === props.selectedItem} chooseFilter={props.chooseFilter} /></Link>
                )
            }

        </ListGroup>


    );
}

function ItemSide(props) {
    return props.selected ?
        ( <ListGroup.Item action active>{props.name}</ListGroup.Item> )
        :
        ( <ListGroup.Item action onClick={() => props.chooseFilter(props.name)}>{props.name}</ListGroup.Item> )
}


export { ListGroupContainer };
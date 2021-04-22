import { ListGroup } from "react-bootstrap";
import { useState } from 'react';
function ListGroupContainer(props) {
    const [selectedItem, setSelectedItem] = useState(0);
    const chooseFilter = (index) => setSelectedItem(index);
    return (
        <ListGroup variant="flush">
            {
                props.names.map(
                    (name, index) => <ItemSide name={name} index={index} key={index} selected={index === selectedItem} choose={chooseFilter}/>         
                )
            }
        </ListGroup>
    );
}

function ItemSide(props){
    if(props.selected){
        return(
            <ListGroup.Item  action  href={"#" + props.name}  active>{props.name}</ListGroup.Item>
        );

    }
    else {
        return (
            <ListGroup.Item action  href={"#" + props.name} onClick={() => props.choose(props.index)}>{props.name}</ListGroup.Item>
        );
    }
} 


export { ListGroupContainer };
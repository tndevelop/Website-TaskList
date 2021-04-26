import { ListGroup } from "react-bootstrap";

function ListGroupContainer(props) {

    return (
        <ListGroup variant="flush">
            {
                props.names.map(
                    (name, index) => <ItemSide name={name} index={index} key={index} selected={name === props.selectedItem} chooseFilter={props.chooseFilter}/>
                       
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
            <ListGroup.Item action  href={"#" + props.name} onClick={() => props.chooseFilter(props.name)}>{props.name}</ListGroup.Item>
        );
    }
} 


export { ListGroupContainer };
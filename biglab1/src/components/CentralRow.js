import { Col, Row } from "react-bootstrap";
import { ListGroupContainer } from "./MySide.js";
import MainContent from "./MainContent";

function CentralRow(props) {
    return(
    <Row>
        <Col
            sm={3}
            xs={12}
            className="vheight-100 bg-light below-nav sidebar-left-padding d-sm-block collapse"
            id="left-sidebar"
        >
            <ListGroupContainer names={props.filterNames} selectedItem={props.selectedItem} chooseFilter={props.chooseFilter} />
        </Col>
        <MainContent showEditingForm={props.showEditingForm} taskId = {props.taskId} setDone={props.setDone} createElement={props.createElement} taskList={props.taskList} selected={props.selectedItem} />
    </Row>
    )}

export { CentralRow };
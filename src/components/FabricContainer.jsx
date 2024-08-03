import { Container, Row, Col } from "react-bootstrap"
import './FabricContainer.css'
import FabricCanvas from "./FabricCanvas"
import TextBox from "./drag-components/TextBox";
import Rectangle from "./drag-components/Rectangle";

function FabricContainer() {
    return (
       <Container>
        <Row>
          <Col className="col1">
            <div className="toolbox">
              <TextBox/>
              <Rectangle/>
            </div>
          </Col>
          <Col className="col2">
          <div className="playground">
            <FabricCanvas className="board"/>
          </div>
          </Col>
        </Row>
       </Container>
      );
}

export default FabricContainer;
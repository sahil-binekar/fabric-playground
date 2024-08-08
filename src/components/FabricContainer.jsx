import { Container, Row, Col } from "react-bootstrap"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import React from 'react';
import * as fabric from 'fabric';
import './FabricContainer.css'
import FabricCanvas from "./FabricCanvas"
import TextBox from "./drag-components/TextBox";
import Rectangle from "./drag-components/Rectangle";
import Circle from "./drag-components/Circle";
import Triangle from "./drag-components/Triangle";
import shape from '../assets/img/shapes.png'
import { useCanvasContext } from './CanvasProvider';
import FileUpload from "./FileUpload";
import scribble from "../assets/img/scribble.png"
import downld from "../assets/img/download.png"
import ToolTip from './ToolTip';

function FabricContainer() {
  const popoverClick = (
    <Popover id="popover-trigger-click" data-bs-title="Select Shape">
      <Rectangle/>
      <Circle/>
      <Triangle/>
    </Popover>
  );

  const { canvas } = useCanvasContext();

  const toggelCanvas = () =>{
    if (canvas.isDrawingMode == true) {
      canvas.isDrawingMode = false;
    }
    else {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
      canvas.freeDrawingBrush.width = 4;
      canvas.freeDrawingBrush.color = "purple";
    }
    // while adding the controll panel pass the whole property hash to the canvas while changing any of the setting
  }

  const downloadCanvas = (e) => {
    const dataURL = canvas.toDataURL("image/jpeg");
    var a = document.createElement("a");
    a.href =  dataURL
    a.download = "canvas.jpeg";
    a.click();
  }

  return (
    <Container>
    <Row>
      <Col className="col1">
        <div className="toolbox">
          <TextBox/>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverClick}>
            <img className="icon" src={shape} width="30" height="30" ></img>
          </OverlayTrigger>
          <FileUpload />
          <ToolTip title="Draw">
            <img className="icon" src={scribble} onClick={toggelCanvas} width="30" height="30" />
          </ToolTip>
          <ToolTip title="Download">
            <img className="icon" src={downld} onClick={downloadCanvas} width="30" height="30" />
          </ToolTip>
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
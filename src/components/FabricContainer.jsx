import { Container, Row, Col } from "react-bootstrap"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './FabricContainer.css'
import FabricCanvas from "./FabricCanvas"
import TextBox from "./drag-components/TextBox";
import Rectangle from "./drag-components/Rectangle";
import Circle from "./drag-components/Circle";
import Triangle from "./drag-components/Triangle";
// import Pencil from "./drag-components/Pencil";
import shape from '../assets/img/shapes.png'
import { useCanvasContext } from './CanvasProvider';

function FabricContainer() {
  const popoverClick = (
    <Popover id="popover-trigger-click" data-bs-title="Select Shape">
      <Rectangle/>
      <Circle/>
      <Triangle/>
    </Popover>
  );

  return (
    <Container>
    <Row>
      <Col className="col1">
        <div className="toolbox">
          <TextBox/>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverClick}>
            <img className="icon" src={shape} width="30" height="30" ></img>
          </OverlayTrigger>
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
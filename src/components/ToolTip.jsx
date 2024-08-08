import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ToolTip = ({ id, children, title }) => (
  <OverlayTrigger placement="right" overlay={<Tooltip id={id}>{title}</Tooltip>}>
    {children}
  </OverlayTrigger>
);

export default ToolTip
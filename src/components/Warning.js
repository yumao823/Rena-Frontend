import InfoCircle from 'react-bootstrap-icons/dist/icons/info-circle'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Warning = ({ label, description }) => {
  const renderTooltip = (props) => (
    <Tooltip id={props.description} {...props}>
      {description}
    </Tooltip>
  )

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 20, hide: 20 }}
      overlay={renderTooltip}
      description={description}
    >
      <a className="fw-bold mx-1" href="#">
        <span>{label}</span>
        <InfoCircle className="mx-1" size={16} />
      </a>
    </OverlayTrigger>
  )
}

export default Warning

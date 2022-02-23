import Accordion from 'react-bootstrap/Accordion'
import Grid from 'react-bootstrap-icons/dist/icons/grid-fill'

function More() {
  return (
    <div className="more">
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Grid className="me-2" />
            More from this collection
          </Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default More

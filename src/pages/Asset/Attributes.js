import { useEthers } from '@usedapp/core'
import _ from 'lodash'
import Accordion from 'react-bootstrap/Accordion'
import List from 'react-bootstrap-icons/dist/icons/list-ul'
import { ipfsUrl } from 'utils/convert'

function Attributes({ data }) {
  const { account } = useEthers()

  return (
    <div className="attributes">
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <List />
            <span className="ms-2">Attributes</span>
          </Accordion.Header>
          <Accordion.Body>
            {data.attributes?.map((item, index) => (
              <div className="d-flex justify-content-between" key={index}>
                <span>{item.trait_type}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Attributes

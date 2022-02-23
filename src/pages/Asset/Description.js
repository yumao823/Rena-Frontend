import { useEthers } from '@usedapp/core'
import _ from 'lodash'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ProgressBar from 'react-bootstrap/ProgressBar'
import DiscordIcon from 'react-bootstrap-icons/dist/icons/discord'
import TwitterIcon from 'react-bootstrap-icons/dist/icons/twitter'
import FacebookIcon from 'react-bootstrap-icons/dist/icons/facebook'
import JustifyLeftIcon from 'react-bootstrap-icons/dist/icons/justify-left'
import Address from 'components/Address'
import { ipfsUrl } from 'utils/convert'

function Description({ data, meta }) {
  const { account } = useEthers()

  return (
    <div className="description">
      <Accordion className="mt-2">
        <div className="d-flex align-items-center fw-bold description-head">
          <JustifyLeftIcon className="me-2" />
          <span>Description</span>
        </div>
        <div className="createdby">
          <span>Created by</span>
          <h5 className="ms-2 mb-0">
            <a href="#">2f322</a>
          </h5>
        </div>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Stats</Accordion.Header>
          <Accordion.Body>
            <div className="d-flex justify-content-between">
              <span>Generation</span>
              <span>0 of 99</span>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Levels</Accordion.Header>
          <Accordion.Body>
            <>
              <div className="d-flex justify-content-between">
                <span>Experience</span>
                <span>0 of 99</span>
              </div>
              <ProgressBar now={60} />
              <div className="d-flex justify-content-between mt-3">
                <span>Experience Level</span>
                <span>0 of 99</span>
              </div>
              <ProgressBar now={60} />
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>About {meta.name}</Accordion.Header>
          <Accordion.Body>
            <>
              <div className="d-flex pb-3">
                <img className="desc-logo" src={ipfsUrl(data.imageURL)} />
                <div className="d-flex-1 ms-3">
                  {meta.description || 'No description'}
                </div>
              </div>
              <ButtonGroup aria-label="about-layout">
                <Button variant="btn-outline-primary">
                  <DiscordIcon color="#ccc" />
                </Button>
                <Button variant="btn-outline-primary">
                  <TwitterIcon color="#ccc" />
                </Button>
                <Button variant="btn-outline-primary">
                  <FacebookIcon color="#ccc" />
                </Button>
              </ButtonGroup>
            </>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Details</Accordion.Header>
          <Accordion.Body>
            <>
              <div className="d-flex justify-content-between">
                <span>Contract Address</span>
                <Address address={data.contractAddress} />
              </div>
              <div className="d-flex justify-content-between">
                <span>Token ID</span>
                <span>{data.tokenId}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Token Standard</span>
                <span>ERC-{data.tokenType}</span>
              </div>
            </>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default Description

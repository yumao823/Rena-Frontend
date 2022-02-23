import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Gear from 'react-bootstrap-icons/dist/icons/gear-fill'
import Share from 'react-bootstrap-icons/dist/icons/share-fill'
import JazzIcon from 'components/JazzIcon'
import Address from 'components/Address'

function Banner() {
  const history = useHistory()
  const handleFiles = (e) => {}

  return (
    <div className="banner">
      <div className="banner-top">
        <input
          type="file"
          name="file"
          id="banner"
          hidden
          onChange={handleFiles}
        />
        <label for="banner" />
      </div>
      <div className="banner-bottom">
        <div className="d-flex-1" />
        <div className="d-flex-3 center">
          <JazzIcon
            account="0x636a633b126D6bfF9FFD9F8210eB70bb5968a8aD"
            size={126}
          />
          <h3 className="fw-bold">Hiroki Moto</h3>
          <Address address="0x385769e84b650c070964398929db67250b7ff72c" />
          <h5>Joined October 2021</h5>
        </div>
        <div className="d-flex d-flex-1 mt-3 align-items-center">
          <ButtonGroup aria-label="sort-layout">
            <Button variant="secondary border">
              <Share color="#ccc" />
            </Button>
            <Button variant="secondary border">
              <Gear color="#ccc" onClick={() => history.push('/settings')} />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

export default Banner

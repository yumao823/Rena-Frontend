import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ThreeDotIcon from 'react-bootstrap-icons/dist/icons/three-dots-vertical'
import CodeIcon from 'react-bootstrap-icons/dist/icons/code'
import Collection from 'components/Collection'
import Warning from 'components/Warning'
import RaribleIcon from 'assets/images/collections/rarible.svg'
import MintbaseIcon from 'assets/images/collections/mintbase.svg'
import CargoIcon from 'assets/images/collections/cargo.svg'
import MintableIcon from 'assets/images/collections/mintable.svg'
import ZoraIcon from 'assets/images/collections/zora.svg'

function Collections() {
  const history = useHistory()
  const collections = useSelector((state) => state.collections.collections)
  const data = collections?.collections

  return (
    <div className="my-collections">
      <h1>My Collections</h1>
      <p>
        Create, curate, and manage collections of unique NFTs to share and sell.
        <Warning description="Collections can be created either directly on OpenSea or imported from an existing smart contract. You can also mint on other services like Rarible or Mintable and import the items to OpenSea. Learn more" />
      </p>
      <div className="d-flex">
        <Button
          className="me-3"
          onClick={() => history.push('/collections/create')}
        >
          Create a collection
        </Button>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <ThreeDotIcon color="#ccc" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <CodeIcon size="18" />
              Import an existing smart contract
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={RaribleIcon} />
              Mint on Rarible
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={MintbaseIcon} />
              Mint on Mintbase
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={CargoIcon} />
              Mint on Cargo
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={MintableIcon} />
              Mint on Mintable
            </Dropdown.Item>
            <Dropdown.Item>
              <img src={ZoraIcon} />
              Mint on Zora
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="d-flex justify-content-between flex-wrap mt-5">
        {data.map((item) => (
          <Collection key={item.contractAddress} data={item} />
        ))}
      </div>
    </div>
  )
}

export default Collections

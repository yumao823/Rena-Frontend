import Filter from 'components/Filter'
import Search from 'components/Search'
import Sort from 'components/Sort'
import NFT from 'components/NFTCard'

const ITEMS = []

function Hidden() {
  return (
    <div className="created">
      <Filter defaultState />
      <div className="d-flex-1 mx-3 mt-4">
        <div className="d-flex">
          <Search placeholder="Search" />
          <Sort className="ms-3" />
        </div>
        <div className="d-flex">
          {ITEMS.length === 0 ? <p>No items to display</p> : <NFT />}
        </div>
      </div>
    </div>
  )
}

export default Hidden

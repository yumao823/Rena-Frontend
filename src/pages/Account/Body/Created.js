import Filter from 'components/Filter'
import Search from 'components/Search'
import Sort from 'components/Sort'
import NFT from 'components/NFTCard'

function Created() {
  return (
    <div className="created">
      <Filter defaultState />
      <div className="d-flex-1 mx-3 mt-4">
        <div className="d-flex">
          <Search placeholder="Search" />
          <Sort className="ms-3" />
        </div>
        <div className="d-flex">
          <NFT />
        </div>
      </div>
    </div>
  )
}

export default Created

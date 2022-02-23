import Filter from 'components/Filter'
import Search from 'components/Search'
import Sort from 'components/Sort'
import NFT from 'components/NFTCard'

function Collected() {
  return (
    <div className="collected">
      <Filter defaultState />
      <div className="d-flex-1 mx-3 mt-4">
        <div className="d-flex">
          <Search placeholder="Search" />
          <Sort className="ms-3" />
        </div>
        <div className="d-flex">
          <NFT />
          <NFT />
          <NFT />
        </div>
      </div>
    </div>
  )
}

export default Collected

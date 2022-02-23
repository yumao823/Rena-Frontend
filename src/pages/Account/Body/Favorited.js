import NFT from 'components/NFTCard'

const ITEMS = []

function Favorited() {
  return (
    <div className="favorited">
      {ITEMS.length === 0 ? (
        <p>You haven't favorited any items yet</p>
      ) : (
        <NFT />
      )}
    </div>
  )
}

export default Favorited

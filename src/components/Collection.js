import { ipfsUrl } from 'utils/convert'

function Collection({ data }) {
  return (
    <div className="collection">
      <img className="col-logo" src={ipfsUrl(data.imageURL)} />
      <div className="col-content">
        <p>{data.name}</p>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default Collection

import Like from 'react-bootstrap-icons/dist/icons/heart-fill'
import View from 'react-bootstrap-icons/dist/icons/eye-fill'

function Info({ data, liked }) {
  return (
    <div className="info">
      <div className="item">
        <span className="me-2">Owned By</span>
        <h5 className="fw-bold mb-0 me-4">
          <a href="#">{data.owner || 'Unknown'}</a>
        </h5>
      </div>
      <div className="item">
        <View />
        <span className="ms-2">
          {data.views || 0} view{data.views > 1 && 's'}
        </span>
      </div>
      <div className="item">
        <Like />
        <span className="ms-2">
          {data.liked || 0} favorite{data.liked > 1 && 's'}
        </span>
      </div>
    </div>
  )
}

export default Info

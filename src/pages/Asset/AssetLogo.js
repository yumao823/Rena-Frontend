import FavIcon from 'react-bootstrap-icons/dist/icons/heart'
import LogoImg from 'assets/images/logo.png'

function AssetLogo() {
  return (
    <div className="asset-logo">
      <div className="d-flex align-items-center p-2 logo-head">
        <FavIcon className="ms-auto" />
        <span className="ms-2">4</span>
      </div>
      <img src={LogoImg} />
    </div>
  )
}

export default AssetLogo

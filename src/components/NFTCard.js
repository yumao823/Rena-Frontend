import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PatchCheckFillIcon from 'react-bootstrap-icons/dist/icons/patch-check-fill'
import LikeIcon from 'react-bootstrap-icons/dist/icons/heart'
import cx from 'classnames'
import _ from 'lodash'
import EthIcon from 'assets/images/price/eth.svg'
import NoImage from 'assets/images/error/no-image.svg'
import { ipfsUrl } from 'utils/convert'

export default function NFTCard({ className, data }) {
  const history = useHistory()

  const handleNavigation = () => {
    history.push(`/asset/${data.contractAddress}/${data.tokenId}`)
  }

  return (
    <Card className={cx('nftcard', className)}>
      <Card.Img
        variant="top"
        src={data.imageURL ? ipfsUrl(data.imageURL) : NoImage}
        onClick={handleNavigation}
      />
      <Card.Body>
        <Card.Text>
          <div className="d-flex">
            <div className="d-flex-2">
              <div className="d-flex align-items-center">
                <span className="title">{data.name || 'Unknown'}</span>
                <PatchCheckFillIcon className="patch" />
              </div>
              <span>nftoffice.eth</span>
            </div>
            <div className="d-flex-1 text-end">
              <span className="title">Price</span>
              <div className="d-flex price justify-content-end">
                <img src={EthIcon} />
                <span className="ms-2">{data.price}</span>
              </div>
            </div>
          </div>
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="outline-primary">Buy now</Button>
          <span>
            <LikeIcon /> {data.liked}
          </span>
        </div>
      </Card.Body>
    </Card>
  )
}

import Button from 'react-bootstrap/Button'

function Status() {
  return (
    <div>
      <div className="d-flex">
        <Button className="d-flex-1" variant="btn-outline-primary">
          Buy Now
        </Button>
        <Button className="d-flex-1" variant="btn-outline-primary">
          On Auction
        </Button>
      </div>
      <div className="d-flex">
        <Button className="d-flex-1" variant="btn-outline-primary">
          New
        </Button>
        <Button className="d-flex-1" variant="btn-outline-primary">
          Has Offers
        </Button>
      </div>
    </div>
  )
}

export default Status

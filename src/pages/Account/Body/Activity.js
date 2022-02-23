import Filter from 'components/Filter'

function Activity() {
  return (
    <div className="activity">
      <Filter defaultState />
      <div className="d-flex-1 mx-3 mt-4">
        <div className="d-flex">
          <div className="d-flex-1" />
          <div className="d-flex-3">Item</div>
          <div className="d-flex-1">Price</div>
          <div className="d-flex-1">Quantity</div>
          <div className="d-flex-1">From</div>
          <div className="d-flex-1">To</div>
          <div className="d-flex-1">Time</div>
        </div>
      </div>
    </div>
  )
}

export default Activity

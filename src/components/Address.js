function Address({ address, counts = 3 }) {
  const length = String(address).length
  const left = String(address).slice(0, counts)
  const right = String(address).slice(length - counts, length)
  return (
    <span className="address">
      {left}...{right}
    </span>
  )
}

export default Address

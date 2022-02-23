import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import PatchCheckIcon from 'react-bootstrap-icons/dist/icons/patch-check'
import _ from 'lodash'
import Search from 'components/Search'
import { ipfsUrl } from 'utils/convert'

const CollectionItem = ({ collection, onClick }) => (
  <div
    className="d-h-center collections-item"
    onClick={() => onClick(collection)}
  >
    <img className="me-2" src={ipfsUrl(collection.imageURL)}></img>
    <span>{collection.name}</span>
    {collection.verified && <PatchCheckIcon className="ms-2 patch-check" />}
  </div>
)

function Collections({ onChange }) {
  const collections = useSelector((state) => state.collections.collections)
  const [filter, setFilter] = useState('')
  const [selected, setSelected] = useState([])
  const data = useMemo(() => {
    if (filter === '') return collections.collections
    else
      return collections.collections.filter((e) =>
        _.includes(_.toLower(e.name), filter)
      )
  }, [filter, collections])

  const handleClick = (e) => {
    let temp = _.clone(selected)
    const index = _.findIndex(temp, function (o) {
      return o.contractAddress === e.contractAddress
    })
    if (index > -1) {
      temp = _.filter(temp, function (o) {
        return o.contractAddress != e.contractAddress
      })
    } else {
      temp.push(e)
    }
    onChange(temp)
    setSelected(temp)
  }

  return (
    <div className="collections">
      <Search placeholder="Filter" onChange={(e) => setFilter(e)} />
      <div className="d-h-center mb-2">
        {selected.map((item) => (
          <div
            className="collections-tag me-1"
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
      {data?.map((collection) => (
        <CollectionItem
          key={collection.id}
          collection={collection}
          onClick={handleClick}
        />
      ))}
    </div>
  )
}

export default Collections

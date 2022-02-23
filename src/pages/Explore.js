import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import _ from 'lodash'
import Filter from 'components/Filter'
import Sort from 'components/Sort'
import NFT from 'components/NFTCard'

const Explore = () => {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.items)
  const data = items.items || []
  const [view, setView] = useState(6)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(24)
  const [payload, setPayload] = useState({
    // type: 'all',
    // sortby: 'createdAt',
    // filterBy: [],
    // category: null,
    // address: null,
    offset,
    limit
  })

  const handleView = (e) => setView(e)

  const handleSort = (e) => {
    const temp = { ...payload, ...e }
    setPayload(temp)
    dispatch({ type: 'GETITEMS_REQUEST', payload: temp })
  }

  const handlePrices = (e) => {
    const temp = { ...payload, ...e }
    dispatch({ type: 'RESETITEMS_REQUEST', payload: temp })
    setPayload(temp)
  }

  const handleCollections = (e) => {
    const collection = e.map((item) => item.id)
    const temp = { ...payload, collection }
    dispatch({ type: 'RESETITEMS_REQUEST', payload: temp })
    setPayload(temp)
  }

  const handlePage = () => {
    const temp = { ...payload, offset: offset + limit, limit }
    setOffset(offset + limit)
    setPayload(temp)
    dispatch({ type: 'GETITEMS_REQUEST', payload: temp })
  }

  const handleRefresh = () => {}

  useEffect(() => {
    dispatch({ type: 'RESETITEMS_REQUEST', payload })
    dispatch({ type: 'GETCOLLECTIONS_REQUEST', payload: { limit: 10 } })
  }, [])

  return (
    <div className="explore">
      <Filter onPrices={handlePrices} onCollections={handleCollections} />
      <div className="nft-content d-flex-1" id="scrollableDiv">
        <div className="sort">
          <span>{items.itemsCount} results</span>
          <Sort
            className="ms-auto"
            view={view}
            onToggle={handleView}
            onSort={handleSort}
          />
        </div>
        <div className="d-flex-1">
          <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={handlePage}
            hasMore
            loader={<h4 className="text-center">Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            refreshFunction={handleRefresh}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>
                &#8593; Release to refresh
              </h3>
            }
            scrollableTarget="scrollableDiv"
          >
            {_.range(0, Math.ceil(data.length / view)).map((idx1) => (
              <div className="d-flex" key={idx1}>
                {_.range(0, view).map((idx2) => {
                  if (view * idx1 + idx2 >= data.length)
                    return <div className="empty d-flex-1" key={idx2} />
                  else return <NFT data={data[idx1 * view + idx2]} key={idx2} />
                })}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  )
}

export default Explore

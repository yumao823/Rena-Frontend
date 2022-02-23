import { useState } from 'react'
import cx from 'classnames'
import Expanded from './Expanded'
import Collapsed from './Collapsed'

export default function Filter({
  defaultState = false,
  onPrices = () => {},
  onCollections = () => {}
}) {
  const [collapsed, setCollapsed] = useState(defaultState)

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={cx('filter', { collapsed })}>
      {collapsed ? (
        <Collapsed onToggle={handleToggle} />
      ) : (
        <Expanded
          onPrices={onPrices}
          onCollections={onCollections}
          onToggle={handleToggle}
        />
      )}
    </div>
  )
}

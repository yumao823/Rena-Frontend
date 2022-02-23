import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Grid from 'react-bootstrap-icons/dist/icons/grid-fill'
import Grid3x from 'react-bootstrap-icons/dist/icons/grid-3x3-gap-fill'
import Select from 'react-select'
import cx from 'classnames'

const ITEMS = [
  { value: 'all', label: 'All Items' },
  { value: 'single', label: 'Single Items' },
  { value: 'bundle', label: 'Bundles' }
]

const SORT = [
  {
    value: 'createdAt',
    label: 'Recently Created'
  },
  {
    value: 'oldest',
    label: 'Oldest'
  },
  {
    value: 'listedAt',
    label: 'Recently Listed'
  },
  {
    value: 'soldAt',
    label: 'Recently Sold'
  },
  {
    value: 'saleEndsAt',
    label: 'Ending Soon'
  },
  {
    value: 'price',
    label: 'Highest Price'
  },
  {
    value: 'cheapest',
    label: 'Lowest Price'
  },
  {
    value: 'lastSalePrice',
    label: 'Highest Last Sale'
  },
  {
    value: 'viewed',
    label: 'Mostly Viewed'
  }
]

export default function Sort({ className, view, onToggle, onSort }) {
  return (
    <div className={cx(className, 'sorter')}>
      <Select
        className="basic-single me-3"
        classNamePrefix="select"
        defaultValue={[ITEMS[0]]}
        name="items"
        options={ITEMS}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#93c1f1'
          }
        })}
        onChange={(e) => onSort({ type: e.value })}
      />
      <Select
        className="basic-single me-3"
        classNamePrefix="select"
        defaultValue={SORT[0]}
        isSearchable
        name="color"
        options={SORT}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: '#93c1f1'
          }
        })}
        onChange={(e) => onSort({ sortby: e.value })}
      />
      <ButtonGroup aria-label="sort-layout">
        <Button
          className={view === 3 && 'active'}
          variant="btn-outline-primary"
          onClick={() => onToggle(3)}
        >
          <Grid color="#ccc" />
        </Button>
        <Button
          className={view === 6 && 'active'}
          variant="btn-outline-primary"
          onClick={() => onToggle(6)}
        >
          <Grid3x color="#ccc" />
        </Button>
      </ButtonGroup>
    </div>
  )
}

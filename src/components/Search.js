import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import SearchIcon from 'react-bootstrap-icons/dist/icons/search'
import cx from 'classnames'

const Search = ({ className, placeholder, onChange = () => {} }) => {
  return (
    <InputGroup className={cx('search', className)}>
      <InputGroup.Text>
        <SearchIcon />
      </InputGroup.Text>
      <FormControl
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  )
}

export default Search

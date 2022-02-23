import { useState } from 'react'
import classNames from 'classnames'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Select from 'react-select'
import Sun from 'react-bootstrap-icons/dist/icons/sun-fill'
import Moon from 'react-bootstrap-icons/dist/icons/moon-fill'
import USAIcon from 'assets/images/flags/usa.svg'

const LANGUAGES = [
  {
    value: 'english',
    label: (
      <div className="d-flex align-items-center">
        <img src={USAIcon} />
        <span className="ms-2">English</span>
      </div>
    )
  }
]

function Appearance() {
  const [mode, setMode] = useState('dark')
  return (
    <div className="appearance">
      <h1 className="mb-4">Appearance Settings</h1>
      <p className="fw-bold">Theme</p>
      <p>Customize how OpenSea looks on your device.</p>
      <ButtonGroup className="mb-4" aria-label="sort-layout">
        <Button
          className={classNames(mode === 'light' && 'active')}
          variant="secondary border"
          onClick={() => setMode('light')}
        >
          <Sun />
          <span className="ms-2">Light Mode</span>
        </Button>
        <Button
          className={classNames(mode === 'dark' && 'active')}
          variant="secondary border"
          onClick={() => setMode('dark')}
        >
          <Moon />
          <span className="ms-2">Dark Mode</span>
        </Button>
      </ButtonGroup>

      <p className="fw-bold">Language</p>
      <p>Select your preferred language</p>
      <Select
        className="basic-single mb-3"
        classNamePrefix="select"
        defaultValue={LANGUAGES[0]}
        options={LANGUAGES}
      />
    </div>
  )
}

export default Appearance

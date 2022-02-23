import { useState } from 'react'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Offcanvas from 'react-bootstrap/Offcanvas'
import WalletFill from 'react-bootstrap-icons/dist/icons/wallet-fill'
import LogOut from 'react-bootstrap-icons/dist/icons/box-arrow-right'
import Refresh from 'react-bootstrap-icons/dist/icons/arrow-repeat'
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import WalletList from './WalletList'
import Warning from './Warning'
import JazzIcon from 'components/JazzIcon'

function Wallet() {
  const account = useSelector((state) => state.app.account)
  const { deactivate } = useEthers()
  const etherBalance = useEtherBalance(account)

  const [show, setShow] = useState(false)
  const [more, setMore] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleMore = () => setMore(!more)

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <WalletFill color="#ccc" size={30} />
      </Button>

      <Offcanvas show={show} placement="end" onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold d-flex align-items-center">
            {account ? (
              <Dropdown>
                <Dropdown.Toggle
                  className="d-flex align-items-center"
                  variant="success"
                  id="dropdown-basic"
                >
                  <JazzIcon className="mt-1" account={account} size={26} />
                  <span className="mx-2 mb-1">My Wallet</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => deactivate()}>
                    <LogOut size="20" />
                    <span className="ms-2">Log Out</span>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Refresh size="20" />
                    <span className="ms-2">Refresh funds</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <span>Connect your wallet</span>
              </>
            )}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {account ? (
            <>
              <ListGroup className="text-center">
                <ListGroupItem>
                  <span>Total balance</span>
                  <p className="fw-bold">
                    Balance:{' '}
                    {etherBalance && parseFloat(formatEther(etherBalance))} ETH
                  </p>
                </ListGroupItem>
                <ListGroupItem className="fw-bold add-funds">
                  Add Funds
                </ListGroupItem>
              </ListGroup>
            </>
          ) : (
            <>
              <span>Connect with one of our available</span>
              <Warning
                label="wallet"
                description="A crypto wallet is an application or hardware device that allows individuals to store and retrieve digital items."
              />
              <span>providers or create a new one.</span>
              <WalletList expanded={more} onToggle={handleMore} />
            </>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Wallet

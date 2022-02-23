import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useEthers } from '@usedapp/core'
import UserIcon from 'react-bootstrap-icons/dist/icons/person-fill'
import FavoriteIcon from 'react-bootstrap-icons/dist/icons/link'
import JazzIcon from 'components/JazzIcon'
import Wallet from 'components/Wallet'
import LogoImage from 'assets/images/logo.png'
import Search from './Search'

function Header() {
  const dispatch = useDispatch()
  const account = useSelector((state) => state.app.account)
  const { deactivate } = useEthers()

  const handleLogout = () => {
    deactivate()
    dispatch({ type: 'LOGOUT_REQUEST' })
  }

  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand className="me-5">
          <NavLink activeClassName="active" exact to="/">
            <img src={LogoImage} />
            Rena
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Search placeholder="Search items, collections, and accounts" />
        <Navbar.Collapse className="justify-content-end ms-5">
          <Nav className="ms-auto">
            <Nav.Item className="link">
              <NavLink activeClassName="active" to="/explore">
                Explore
              </NavLink>
            </Nav.Item>
            <Nav.Item className="link">
              <NavLink activeClassName="active" to="/stats">
                Stats
              </NavLink>
            </Nav.Item>
            {account && (
              <Nav.Item className="link">
                <NavLink activeClassName="active" to="/create">
                  Create
                </NavLink>
              </Nav.Item>
            )}
            {account && (
              <NavDropdown
                className="link"
                align="end"
                title={<JazzIcon account={account} size={32} />}
                id="account-dropdown"
              >
                <NavDropdown.Item>
                  <NavLink
                    className="d-flex align-items-center"
                    activeClassName="active"
                    to="/account?active=profile"
                  >
                    <UserIcon className="me-2" />
                    Profile
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="d-flex align-items-center"
                    activeClassName="active"
                    to="/account?active=favorite"
                  >
                    <FavoriteIcon className="me-2" />
                    Favorites
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="d-flex align-items-center"
                    activeClassName="active"
                    to="/collections"
                  >
                    <FavoriteIcon className="me-2" />
                    My Collections
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    className="d-flex align-items-center"
                    activeClassName="active"
                    to="/settings"
                  >
                    <FavoriteIcon className="me-2" />
                    Settings
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="d-flex align-items-center"
                  onClick={handleLogout}
                >
                  <FavoriteIcon className="me-2" />
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Item className="link">
              <Wallet />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

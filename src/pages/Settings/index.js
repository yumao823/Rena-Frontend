import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import ProfileIcon from 'react-bootstrap-icons/dist/icons/person-square'
import NotificationIcon from 'react-bootstrap-icons/dist/icons/bell-fill'
import OfferIcon from 'react-bootstrap-icons/dist/icons/tag-fill'
import AppearenceIcon from 'react-bootstrap-icons/dist/icons/palette-fill'
import SupportIcon from 'react-bootstrap-icons/dist/icons/shield-shaded'

import AccountSupport from './AccountSupport'
import Appearance from './Appearance'
import Notifications from './Notifications'
import Offers from './Offers'
import Profile from './Profile'

function Settings() {
  return (
    <div className="settings">
      <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
        <div className="d-flex d-flex-1">
          <div className="d-flex-3 nav-container p-3">
            <p>Settings</p>
            <Nav className="flex-column" variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="profile">
                  <ProfileIcon color="#ccc" size="20" />
                  <span className="ms-2">Profile</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="notifications">
                  <NotificationIcon color="#ccc" size="20" />
                  <span className="ms-2">Notifications</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="offers">
                  <OfferIcon color="#ccc" size="20" />
                  <span className="ms-2">Offers</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="appearance">
                  <AppearenceIcon color="#ccc" size="20" />
                  <span className="ms-2">Appearance</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="account-support">
                  <SupportIcon color="#ccc" size="20" />
                  <span className="ms-2">Account Support</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div className="d-flex-9">
            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <Profile />
              </Tab.Pane>
              <Tab.Pane eventKey="notifications">
                <Notifications />
              </Tab.Pane>
              <Tab.Pane eventKey="offers">
                <Offers />
              </Tab.Pane>
              <Tab.Pane eventKey="appearance">
                <Appearance />
              </Tab.Pane>
              <Tab.Pane eventKey="account-support">
                <AccountSupport />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  )
}

export default Settings

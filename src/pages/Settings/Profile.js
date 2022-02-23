import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import SiteIcon from 'react-bootstrap-icons/dist/icons/layout-text-window'
import Files from 'react-bootstrap-icons/dist/icons/files'
import ListGroup from 'react-bootstrap/ListGroup'
import Twitter from 'react-bootstrap-icons/dist/icons/twitter'
import Instagram from 'react-bootstrap-icons/dist/icons/instagram'
import Preview from 'react-bootstrap-icons/dist/icons/eye-fill'

import Warning from 'components/Warning'

function Profile() {
  return (
    <div className="profile">
      <div className="d-flex align-items-center">
        <h1 className="d-flex-1 py-4">Profile Settings</h1>
        <Button className="ms-auto me-auto">
          <Preview color="#ccc" size="20" />
          <span className="ms-2">Preview</span>
        </Button>
      </div>
      <div className="d-flex mb-4">
        <div className="d-flex-1">
          <Form.Group className="mb-3">
            <Form.Label>Username *</Form.Label>
            <Form.Control type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" type="text" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email *</Form.Label>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Links</Form.Label>
            <ListGroup>
              <ListGroup.Item>
                <InputGroup>
                  <InputGroup.Text>
                    <Twitter />
                  </InputGroup.Text>
                  <FormControl placeholder="YourTwitterHandle" />
                </InputGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                <InputGroup>
                  <InputGroup.Text>
                    <Instagram />
                  </InputGroup.Text>
                  <FormControl placeholder="YourInstargramHandle" />
                </InputGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                <InputGroup>
                  <InputGroup.Text>
                    <SiteIcon />
                  </InputGroup.Text>
                  <FormControl placeholder="yoursite.io" />
                </InputGroup>
              </ListGroup.Item>
            </ListGroup>
          </Form.Group>
          <div>
            <p className="fw-bold">Wallet Address</p>
            <InputGroup className="wallet-address">
              <FormControl placeholder="0x4b9bbccea42e631796549053783fe09e3c450e54" />
              <InputGroup.Text>
                <Files className="cursor-pointer" />
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <div className="ms-5">
          <h6>
            <span>Profile Image</span>
            <Warning description="Recommended 350px X 350px Max size: 100MB" />
          </h6>
          <div className="profile-upload mb-4">
            <input type="file" name="profile" id="profile" hidden />
            <label for="profile" />
          </div>
          <h6>
            <span>Banner Image</span>
            <Warning description="Recommended 1400px X 350px Max size: 100MB" />
          </h6>
          <div className="banner-upload">
            <input type="file" name="banner" id="banner" hidden />
            <label for="banner" />
          </div>
        </div>
      </div>
      <div className="d-flex">
        <Button className="ms-auto">Save</Button>
      </div>
    </div>
  )
}

export default Profile

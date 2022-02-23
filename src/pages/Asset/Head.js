import Dropdown from 'react-bootstrap/Dropdown'
import Share from 'react-bootstrap-icons/dist/icons/share-fill'
import Facebook from 'react-bootstrap-icons/dist/icons/facebook'
import Twitter from 'react-bootstrap-icons/dist/icons/twitter'
import Logo from 'assets/images/logo.png'

function Head({ name }) {
  return (
    <div className="head">
      <a href="#">{name}</a>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <Share color="#ccc" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <img src={Logo} />
            Copy Link
          </Dropdown.Item>
          <Dropdown.Item>
            <Facebook />
            Facebook
          </Dropdown.Item>
          <Dropdown.Item>
            <Twitter />
            Twitter
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Head

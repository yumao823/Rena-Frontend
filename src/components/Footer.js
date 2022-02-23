import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import DiscordIcon from 'react-bootstrap-icons/dist/icons/discord'
import TwitterIcon from 'react-bootstrap-icons/dist/icons/twitter'
import FacebookIcon from 'react-bootstrap-icons/dist/icons/facebook'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-head">
        <div className="d-flex-1 me-3">
          <h3>Stay in the loop</h3>
          <p className="mt-3">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating Rena
            Finance.
          </p>
          <div className="d-flex">
            <Form.Control type="text" placeholder="Email" />
            <Button className="signup ms-3">Sign up</Button>
          </div>
        </div>
        <div className="d-flex-1 ms-3">
          <h3>Join the community</h3>
          <div className="d-flex mt-3">
            <Button className="link me-3">
              <DiscordIcon color="#ccc" />
            </Button>
            <Button className="link me-3">
              <TwitterIcon color="#ccc" />
            </Button>
            <Button className="link">
              <FacebookIcon color="#ccc" />
            </Button>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <span>© 2020 - 2021 Rena Finance, Inc</span>
        <div className="d-flex">
          <span className="cursor-pointer me-2">Privacy Policy</span>
          <span className="cursor-pointer ms-2">Terms of Service</span>
        </div>
      </div>
    </div>
  )
}

export default Footer

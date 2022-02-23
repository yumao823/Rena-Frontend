import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Collected from './Collected'
import Created from './Created'
import Favorited from './Favorited'
import Hidden from './Hidden'
import Activity from './Activity'
import OffersReceived from './OffersReceived'
import OffersMade from './OffersMade'

function Body() {
  return (
    <div className="body">
      <Tabs defaultActiveKey="collected" id="account">
        <Tab eventKey="collected" title="Collected">
          <Collected />
        </Tab>
        <Tab eventKey="created" title="Created">
          <Created />
        </Tab>
        <Tab eventKey="favorited" title="Favorited">
          <Favorited />
        </Tab>
        <Tab eventKey="hidden" title="Hidden">
          <Hidden />
        </Tab>
        <Tab eventKey="activity" title="Activity">
          <Activity />
        </Tab>
        <Tab eventKey="offers-received" title="Offers Received">
          <OffersReceived />
        </Tab>
        <Tab eventKey="offers-made" title="Offers Made">
          <OffersMade />
        </Tab>
      </Tabs>
    </div>
  )
}

export default Body

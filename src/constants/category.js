import ArtIcon from 'assets/images/category/art-light.svg'
import CollectiblesIcon from 'assets/images/category/collectibles-light.svg'
import SportsIcon from 'assets/images/category/sports-light.svg'
import UtilityIcon from 'assets/images/category/utility-light.svg'
import TradingCardsIcon from 'assets/images/category/trading-cards-light.svg'
import VirtualWorldsIcon from 'assets/images/category/virtual-worlds-light.svg'
import DomainNamesIcon from 'assets/images/category/domain-names-light.svg'

export const CATEGORIES = [
  {
    value: 'Art',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={ArtIcon} /> Art
      </div>
    )
  },
  {
    value: 'Collectibles',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={CollectiblesIcon} /> Collectibles
      </div>
    )
  },
  {
    value: 'Sports',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={SportsIcon} /> Sports
      </div>
    )
  },
  {
    value: 'Utility',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={UtilityIcon} /> Utility
      </div>
    )
  },
  {
    value: 'Trading Cards',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={TradingCardsIcon} /> Trading Cards
      </div>
    )
  },
  {
    value: 'Virtual Worlds',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={VirtualWorldsIcon} /> Vitual Worlds
      </div>
    )
  },
  {
    value: 'Domain Names',
    label: (
      <div className="d-flex align-items-center py-1">
        <img className="me-2" src={DomainNamesIcon} /> Domain Names
      </div>
    )
  }
]

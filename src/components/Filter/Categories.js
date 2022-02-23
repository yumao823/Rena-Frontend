import ArtIcon from 'assets/images/category/art-light.svg'
import MusicIcon from 'assets/images/category/music-light.svg'
import DomainIcon from 'assets/images/category/domain-names-light.svg'
import VirtualIcon from 'assets/images/category/virtual-worlds-light.svg'
import TradingIcon from 'assets/images/category/trading-cards-light.svg'
import CollectiblesIcon from 'assets/images/category/collectibles-light.svg'
import SportsIcon from 'assets/images/category/sports-light.svg'
import UtilityIcon from 'assets/images/category/utility-light.svg'

const categories = [
  { name: 'Art ', img: ArtIcon },
  { name: 'Music', img: MusicIcon },
  { name: 'Domain Names', img: DomainIcon },
  { name: 'Virtual Worlds', img: VirtualIcon },
  { name: 'Trading Cards', img: TradingIcon },
  { name: 'Collectibles', img: CollectiblesIcon },
  { name: 'Sports', img: SportsIcon },
  { name: 'Utility', img: UtilityIcon }
]

function Categories() {
  return (
    <div className="categories">
      {categories.map((item, index) => (
        <div className="d-flex py-1" key={`ct-${index}`}>
          <img src={item.img}></img>
          <span className="ms-2">{item.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Categories

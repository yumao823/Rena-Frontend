import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import LogoImage from 'assets/images/logo.png'

const Brand = () => {
  const history = useHistory()

  return (
    <>
      <div className="d-flex">
        <div className="d-flex d-flex-1 flex-column justify-content-around">
          {[0, 1].map((item) => (
            <img className="item bitem" src={LogoImage} key={item} />
          ))}
        </div>
        <div className="d-flex-3">
          <div className="d-flex">
            <div className="d-flex d-flex-1 flex-column justify-content-around">
              {[0, 1].map((item) => (
                <img className="item sitem" src={LogoImage} key={item} />
              ))}
            </div>
            <div className="d-flex flex-column d-flex-3 justify-content-center align-items-between text-center">
              <div className="title">Rena Marketplace</div>
              <div className="desc">
                The world's first and largest NFT marketplace
              </div>
              <div className="d-flex mb-3">
                <Button
                  className="brand-btn me-3"
                  onClick={() => history.push('/explore')}
                >
                  Explore
                </Button>
                <Button
                  className="brand-btn ms-3"
                  variant="secondary"
                  onClick={() => history.push('/create')}
                >
                  Create
                </Button>
              </div>
            </div>
            <div className="d-flex d-flex-1 flex-column align-items-end justify-content-around">
              {[0, 1].map((item) => (
                <img className="item sitem" src={LogoImage} key={item} />
              ))}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {[0, 1, 2, 3, 4, 5, 6].map((item) => (
              <img className="item sitem" src={LogoImage} key={item} />
            ))}
          </div>
        </div>
        <div className="d-flex d-flex-1 flex-column align-items-end  justify-content-around">
          {[0, 1].map((item) => (
            <img className="item bitem" src={LogoImage} key={item} />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between">
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <img className="item bitem" src={LogoImage} key={item} />
        ))}
      </div>
    </>
  )
}

export default Brand

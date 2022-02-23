import React from 'react'
import { useDispatch } from 'react-redux'
import { useEthers } from '@usedapp/core'
import ListGroup from 'react-bootstrap/ListGroup'
import { toast } from 'react-toastify'
import MetaMaskIcon from 'assets/images/wallet/metamask.svg'
import CoinbaseWalletIcon from 'assets/images/wallet/coinbasewallet.png'
import WalletConnectIcon from 'assets/images/wallet/walletconnect.png'
import FortmaticIcon from 'assets/images/wallet/fortmatic.png'
import KaikasIcon from 'assets/images/wallet/kaikas.png'
import BitskiIcon from 'assets/images/wallet/bitski.png'
import VenlyIcon from 'assets/images/wallet/venly.svg'
import DrapperIcon from 'assets/images/wallet/drapper.png'
import AuthereumIcon from 'assets/images/wallet/authereum.png'
import TorusIcon from 'assets/images/wallet/torus.png'
import PortisIcon from 'assets/images/wallet/portis.svg'
import OperaTouchIcon from 'assets/images/wallet/operatouch.svg'
import TrustIcon from 'assets/images/wallet/trust.png'

const WALLETS = [
  { name: 'MetaMask', img: MetaMaskIcon },
  { name: 'Coinbase Wallet', img: CoinbaseWalletIcon },
  { name: 'WalletConnect', img: WalletConnectIcon },
  { name: 'Fortmatic', img: FortmaticIcon },
  { name: 'Kaikas', img: KaikasIcon },
  { name: 'Bitski', img: BitskiIcon },
  { name: 'Venly', img: VenlyIcon },
  { name: 'Drapper', img: DrapperIcon },
  { name: 'Authereum', img: AuthereumIcon },
  { name: 'Torus', img: TorusIcon },
  { name: 'Portis', img: PortisIcon },
  { name: 'OperaTouch', img: OperaTouchIcon },
  { name: 'Trust', img: TrustIcon }
]

const WalletList = ({ expanded, onToggle }) => {
  const dispatch = useDispatch()
  const { activateBrowserWallet } = useEthers()

  const handleWallet = async (e) => {
    if (e.name === 'MetaMask') {
      // activateBrowserWallet()
      dispatch({ type: 'LOGIN_REQUEST' })
    } else {
      toast(`We still does not support ${e.name} wallet!`)
    }
  }

  return (
    <ListGroup className="mt-3">
      {WALLETS.map(
        (item, index) =>
          (expanded ? true : index < 4) && (
            <ListGroup.Item
              className="d-flex align-items-center cursor-pointer"
              key={index}
              onClick={() => handleWallet(item)}
            >
              <img className="me-2" src={item.img} width={20} height={20} />
              <span>{item.name}</span>
            </ListGroup.Item>
          )
      )}
      <ListGroup.Item
        className="cursor-pointer text-center border-0"
        onClick={onToggle}
      >
        Show {expanded ? 'fewer' : 'more'} options
      </ListGroup.Item>
    </ListGroup>
  )
}

export default WalletList

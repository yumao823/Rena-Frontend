import { useState } from 'react'
import WalletList from 'components/WalletList'
import Warning from 'components/Warning'

export default function Login() {
  const [more, setMore] = useState(false)

  const handleMore = () => setMore(!more)

  return (
    <div className="login">
      <h2>Connect your wallet.</h2>
      <span>Connect with one of our available</span>
      <Warning
        label="wallet"
        description="A crypto wallet is an application or hardware device that allows individuals to store and retrieve digital items."
      />
      <span>providers or create a new one.</span>
      <WalletList expanded={more} onToggle={handleMore} />
    </div>
  )
}

import React, { useEffect, useRef } from 'react'
import Jazzicon from '@metamask/jazzicon'

const AccountIcon = ({ account, size, ...rest }) => {
  const ref = useRef()

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = ''
      ref.current.appendChild(
        Jazzicon(size || 16, parseInt(account.slice(2, 10), 16))
      )
    }
  }, [account, size])

  return <div className="jazz-icon" ref={ref} {...rest} />
}

export default AccountIcon

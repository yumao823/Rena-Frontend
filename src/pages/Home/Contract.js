import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Web3 from 'web3'
import ABI from 'constants/abi.json'

const ADDRESS = '0x5fbdb2315678afecb367f032d93f642f64180aa3'
const web3 = new Web3(window.ethereum)
const Contract = new web3.eth.Contract(ABI, ADDRESS, {
  from: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266' // default from address
  // gasPrice: '20000000' // default gas price in wei, 20 gwei in this case
})

const Test = () => {
  const [name, setName] = useState('')

  useEffect(async () => {
    await window.ethereum.enable()
  }, [])

  const handleClick = async () => {
    // await Contract.methods.setName(name).send()
    // const result = await Contract.methods.getName().call()
    // console.log(result)
    const result = await Contract.methods
      .mint(
        '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        'https://test.test.com/3244353'
      )
      .send()
    console.log('@@@@@@:   ', result)
  }

  const handleBalanceOf = async () => {
    const result = await Contract.methods
      .balanceOf('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266')
      .call()
    console.log('$$$$$:   ', result)
  }

  return (
    <div className="d-flex">
      <FormControl
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleClick}>Contract</Button>
      <Button onClick={handleBalanceOf}>Balance</Button>
    </div>
  )
}

export default Test

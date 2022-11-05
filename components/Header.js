import Web3Modal from "web3modal"
import { providers, Contract } from "ethers"
import { useRef, useEffect, useState } from "react"
import Landing from "./Landing"


const Header = () => {
  const [walletConnected, setWalletConnected] = useState(false)
  const Web3ModalRef = useRef()

  const getProviderOrSigner = async (needSigner = false) => {
    try {
      const provider = await Web3ModalRef.current.connect()
      const web3Provider = new providers.Web3Provider(provider)
      const { chainId } = await web3Provider.getNetwork()
      // console.log(chainId)
      if (chainId !== 80001) {
        window.alert("Change to Mumbai network")
        throw new Error("Change to Mumbai network")
      }
      if (needSigner) {
        const signer = web3Provider.getSigner()
        return signer
      }
      return web3Provider
    } catch (error) {
      console.error(error)
    }
  }

  const renderButton = () => {
    if (walletConnected) {
      return <div></div>
    } else {
      return <button onClick={connectWallet}>Connect Wallet</button>
    }
  }

  const connectWallet = async () => {
    try {
      await getProviderOrSigner()
      setWalletConnected(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (!walletConnected) {
      Web3ModalRef.current = new Web3Modal({
        network: "maticmum",
        providerOptions: {},
        disableInjectedProvider: false,
      })
      connectWallet()
    }
  }, [walletConnected])
   

  return (
    
    <div className='navbar'>
     <div className="header">
      <h1 className="head">Polyfund</h1>
      <div className='button'>
        <button className='btn'>Raise Funds</button>
        <button className='btn'>Donate funds</button>
        <button className='btn'>Redeem tokens </button>
        <button className='btn'>Connect Wallet</button>
      </div>
    </div>
    {renderButton()}

  </div>
  )
}

export default Header

import Web3 from 'web3'
import '../../types/index.d.ts'
import { getEthereum } from './ethereum'

// const HTTP_PROVIDER = 'http://127.0.0.1:8545'
const HTTP_PROVIDER = 'https://kovan.infura.io/v3/84842078b09946638c03157f83405213' // 'https://kovan.infura.io/v3/8525c62e59f047988bbf21b5f0f88075'

export const getWeb3 = async (): Promise<any> => {
  const ethereum = await getEthereum()
  let web3

  if (ethereum) {
    web3 = new Web3(ethereum)
  } else if (window.web3) {
    web3 = window.web3
  } else {
    const provider = new Web3.providers.HttpProvider(HTTP_PROVIDER)
    web3 = new Web3(provider)
  }

  return web3
}

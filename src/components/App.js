import React, { Component } from 'react'
import './App.css'
import Navbar from './Navbar' // we connect the navigation bar
import Content from './Content' // we connect the content
import { connect } from 'react-redux'
import {
  loadWeb3,
  loadAccount,
  loadToken,
  loadExchange
} from '../store/interactions'
import { contractsLoadedSelector } from '../store/selectors'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    await loadAccount(web3, dispatch)
    const token = await loadToken(web3, networkId, dispatch)
    if(!token) {  // if selected the wrong network on metamask
      window.alert('Token smart contract not detected on the current network. Please select another network with Metamask.')
      return
    }
    const exchange = await loadExchange(web3, networkId, dispatch)
    if(!exchange) { // if exchange not connect on metamask.
      window.alert('Exchange smart contract not detected on the current network. Please select another network with Metamask.')
      return
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        { this.props.contractsLoaded ? <Content /> : <div className="content"></div> } 

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contractsLoaded: contractsLoadedSelector(state) // loading the contract
  }
}

export default connect(mapStateToProps)(App)

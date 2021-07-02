import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SearchBar from './components/layout/SearchBar';
import ChargeMap from './components/map/ChargeMap';

class App extends Component {

  state = {
    connectorTypes: new Set(["CCS", "CHAdeMO", "Type 2"]),
    currentPosition: [52.5208, 13.4094],
    distance: 100,
  }

  componentDidMount() {
    this.updateCurrentPosition();
  }

  updateCurrentPosition = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      // this.setState({currentPosition: [position.coords.latitude, position.coords.longitude]});
    });
  }

  handleChangeDistance = (distance) => {
    this.setState({ distance });
  }

  handleChangeConnectorTypes = (connectorTypes) => {
    this.setState({ connectorTypes });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar distance={this.state.distance} onChangeDistance={this.handleChangeDistance} connectorTypes={this.state.connectorTypes} onChangeConnectorTypes={this.handleChangeConnectorTypes} />
        <ChargeMap currentPosition={this.state.currentPosition} />
      </div>
    );
  }
}

export default App;

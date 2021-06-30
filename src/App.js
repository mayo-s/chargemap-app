import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SearchBar from './components/layout/SearchBar';
import ChargeMap from './components/map/ChargeMap';

class App extends Component {
  
  state = {
    currentPosition: [52.5208, 13.4094],
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchBar />
        <ChargeMap currentPosition={this.state.currentPosition}/>
      </div>
    );
  }
}

export default App;

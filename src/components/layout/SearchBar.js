import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    distance: 100,
    distanceError: '',
    connectorTypes: new Set(["CCS", "CHAdeMO", "Type 2"]),
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  toggleConnectorTypes = (e) => {
    let ctypeValue = e.target.value;
    if (this.state.connectorTypes.has(ctypeValue)) this.state.connectorTypes.delete(ctypeValue);
    else this.state.connectorTypes.add(ctypeValue);
  }

  render() {
    return (
      <div className="wrapper grey darken-2">
        <div className="row">
          <div className="col s6 m3">
            <div className="input-field">
              <label htmlFor="distance">Distance in Km</label>
              <input className="white-text align-right" type="text" id="distance" value={this.state.distance} onChange={this.handleChange} />
              {this.state.distanceError ? (
                <div className="err_msg">{this.state.distanceError}</div>
              ) : null}
            </div>
          </div>
          <div className="col s6 m3">
            <div className="input-field">
              <label>
                <input type="checkbox" className="filled-in" value="Type 2" defaultChecked={true} onChange={this.toggleConnectorTypes} />
                <span>TYPE 2</span>
              </label>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="input-field">
              <label>
                <input type="checkbox" className="filled-in" value="CHAdeMO" defaultChecked={true} onChange={this.toggleConnectorTypes} />
                <span>CHAdeMO</span>
              </label>
            </div>
          </div>
          <div className="col s6 m3">
            <div className="input-field">
              <label>
                <input type="checkbox" className="filled-in" value="CCS" defaultChecked={true} onChange={this.toggleConnectorTypes} />
                <span>CCS</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SearchBar
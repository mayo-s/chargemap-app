import React, { Component } from 'react';

class SearchBar extends Component {


  connectorTypeOptions = ["CCS", "CHAdeMO", "Type 2"];

  state = {
    distanceError: '',
  }

  handleChangeDistance = (e) => {
    if (this.validate(e.target.value)) {
      this.props.onChangeDistance(e.target.value);
    }
  }

  validate = (distance) => {
    let distanceError = '';

    if (!distance || distance <= 0) {
      distanceError = 'Invalid distance';
      this.setState({ distanceError });
      return false;
    }

    this.setState({ distanceError });
    return true
  }

  toggleConnectorTypes = (e) => {
    let ctypeValue = e.target.value;
    let connectorTypes = this.props.connectorTypes;
    if (connectorTypes.has(ctypeValue)) connectorTypes.delete(ctypeValue);
    else connectorTypes.add(ctypeValue);

    this.props.onChangeConnectorTypes(connectorTypes);
  }

  render() {
    const connectorTypes = this.props.connectorTypes;

    return (
      <div className="wrapper grey darken-2">
        <div className="row">
          <div className="col s6 m3">
            <div className="input-field">
              <label htmlFor="distance">Distance in Km</label>
              <input className="white-text align-right" type="text" id="distance" value={this.props.distance} onChange={this.handleChangeDistance} />
              {this.state.distanceError ? (
                <div className="err_msg">{this.state.distanceError}</div>
              ) : null}
            </div>
          </div>

          {this.connectorTypeOptions.map((ctype) => {
            return (
              <div className="col s6 m3">
                <div className="input-field">
                  <label>
                    <input type="checkbox" className="filled-in" value={ctype} defaultChecked={connectorTypes.has(ctype)} onChange={this.toggleConnectorTypes} />
                    <span>{ctype}</span>
                  </label>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    )
  }

}

export default SearchBar
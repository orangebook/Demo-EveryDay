import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};
export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const { temperature } = this.props;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>
       Enter temperature in {scaleNames[scale]}:
        </legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

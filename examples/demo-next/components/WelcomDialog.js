import React, { Component } from 'react';

function FancyBorder(props) {
  return (
    <div className={`FancyBorder FancyBorder-${props.color}`}>
      {props.children}
    </div>
  );
}
export default class WelcomDialog extends Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
        Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
}

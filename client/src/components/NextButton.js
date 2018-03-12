import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NextButton extends Component {
  static propTypes = {
    index: PropTypes.number,
    incrementCardIdx: PropTypes.func,
    isDisabled: PropTypes.bool
  };
  
  constructor(props) {
    super(props);
    this.showNextButton = this.showNextButton.bind(this);
  }

  handleSubmit() {

  }

  showNextButton(index, isDisabled) {
    if (index > 4) { // this is # of cards...hardcoded sux
      return null;
    } else if (index <= 4 && !isDisabled){
      return (
        <button onClick={() => this.props.incrementCardIdx()}>
          Next
        </button>
      );
    } else if (index <= 4 && isDisabled) {
      return (
        <button disabled onClick={() => this.props.incrementCardIdx()}>
          Next
        </button>
      ); 
    }
  }


  render() {
    const { index, isDisabled } = this.props;
    return (
      <div>
        {this.showNextButton(index, isDisabled)}
      </div>
    );
  }
}
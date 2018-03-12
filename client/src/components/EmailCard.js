import React, { Component } from 'react';
import NextButton from './NextButton';
import PropTypes from 'prop-types';

export default class EmailCard extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    index: PropTypes.number,
    firstName: PropTypes.string,
    answer: PropTypes.object,
    incrementCardIdx: PropTypes.func
  };

  handleChange(index, event) {
    const id = event.target.id;
    const value = event.target.value;
    this.props.setCardAnswer(index, {
      [id]: value
    });
  }

  render() {
    const {index, firstName, answer } = this.props;
    const email = answer.email || "";
    const isDisabled = !email;
    return (
      <div>
        <div>
          Thanks {firstName}, can you tell us your email?
        </div>
        <form>
            <div><input id="email" placeholder="Email" type="text" value={email} onChange={(e) => this.handleChange(index, e)}/></div>
        </form>
        <NextButton index={index} incrementCardIdx={this.props.incrementCardIdx} isDisabled={isDisabled}/>
      </div>
    );
  }
}
import React, { Component } from 'react';
import NextButton from './NextButton';
import PropTypes from 'prop-types';

export default class SignupCard extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    index: PropTypes.number,
    firstName: PropTypes.string,
    answer: PropTypes.object,
    incrementCardIdx: PropTypes.func
  };

  render() {
    const {index, firstName, answer } = this.props;
    const email = answer.email || "";
    const isDisabled = !email;
    return (
      <div>
        <div>
          {firstName}, you could have saved $400 or more using Bridgit last year.
        </div>
        <div>
          Enter a password to signup, connect a bank later, and start saving money! 
        </div>
        <form>
            <div><input id="password" placeholder="Set Password" type="password" value={null}/></div>
            <div><input id="confirm_password" placeholder="Confirm Password" type="password" value={null}/></div>
        </form>
      </div>
    );
  }
}
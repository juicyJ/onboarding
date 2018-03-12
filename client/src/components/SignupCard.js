import React, { Component } from 'react';
import NextButton from './NextButton';
import PropTypes from 'prop-types';

export default class SignupCard extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    firstName: PropTypes.string,
    answers: PropTypes.object,
    estimatedSavings: PropTypes.number
  };

  process(answers, event) {
    const body = {
      first_name: answers[0].first_name,
      last_name: answers[0].last_name,
      email: answers[1].email,
      bank: answers[2].bank
    };

    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(body)
    })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      //do some redirect to a  /logged-in page with the plaid link
    });

  }
  render() {
    const {firstName, answers, estimatedSavings } = this.props;
    return (
      <div>
        <div>
          {firstName}, you could have saved ${estimatedSavings} or more using Bridgit last year.
        </div>
        <div>
          Enter a password to signup, connect a bank later, and start saving money! 
        </div>
        <div><input id="password" placeholder="Set Password" type="password"/></div>
        <div><input id="confirm_password" placeholder="Confirm Password" type="password"/></div>
        <button onClick={() => this.process(answers)}>Create </button>

      </div>
    );
  }
}
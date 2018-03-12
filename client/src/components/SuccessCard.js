import React, { Component } from 'react';
import NextButton from './NextButton';
import PropTypes from 'prop-types';

export default class EmailCard extends Component {
  render() {
    return (
      <div>
        You created an acccount. Now <a href="/login">login</a>, connect your bank account, and start saving money!
      </div>
    );
  }
};
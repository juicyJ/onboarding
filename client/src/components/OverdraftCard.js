import React, { Component } from 'react';
import NextButton from './NextButton';
import PropTypes from 'prop-types';

export default class OverdraftCard extends Component {
  static propTypes = {
    index: PropTypes.number,
    firstName: PropTypes.string,
    answer: PropTypes.object,
    incrementCardIdx: PropTypes.func,
    setCardAnswer: PropTypes.func,
    setEstimatedSavings: PropTypes.func
  };

  handleChange(index, event) {
    const id = event.target.id;
    const value = event.target.value;
    this.props.setCardAnswer(index, {
      [id]: value
    });

    if (id === 'bank' && value) {
      fetch('/api/estimate_savings')
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const amount = data.estimated_savings;
        this.props.setEstimatedSavings(amount);
      });
    }
  }

  showBankQuestion(index, answer) {
    if (answer.overdraft_count) {
      const bank = answer.bank || "";
      return (<div> 
        <div>
          Which bank? 
        </div>
        <div>
          <select id="bank" value={bank} onChange={(e) => this.handleChange(index, e)}>
            <option value> -- select bank -- </option>
            <option value="schwab">Schwab</option>
            <option value="chase">Chase</option>
            <option value="citi">Citi</option>
          </select>
        </div>
       </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const {index, firstName, answer } = this.props;
    const overdraftCount = answer.overdraft_count || "";
    const isDisabled = !answer.overdraft_count || !answer.bank;
    return (
      <div>
        <div>
          Ok {firstName}, first question...
        </div>

        <div>
          <em>In the past year</em>, how many times have you overdrafted?
        </div>

        <div>
          <select id="overdraft_count" value={overdraftCount} onChange={(e) => this.handleChange(index, e)}>
            <option value> -- select an option -- </option>
            <option value="small">0-3</option>
            <option value="medium">3-6</option>
            <option value="large">7-10</option>
            <option value="extreme">> 10</option>
          </select>
        </div>
        <div>
          {this.showBankQuestion(index, answer)}
        </div>

        <NextButton index={index} incrementCardIdx={this.props.incrementCardIdx} isDisabled={isDisabled}/>
      </div>
    );
  }
}
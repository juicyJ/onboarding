import React, { Component } from 'react';
import NextButton from './NextButton';
import PropTypes from 'prop-types';

export default class NameCard extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    index: PropTypes.number,
    incrementCardIdx: PropTypes.func,
    setCardAnswer: PropTypes.func,
    answer: PropTypes.object
  };

  handleChange(index, event) {
    const id = event.target.id;
    const value = event.target.value;
    this.props.setCardAnswer(index, {
      [id]: value
    });
  }

  render() {
    const { index } = this.props;
    const firstName = this.props.answer.first_name || "";
    const lastName = this.props.answer.last_name || "";
    const isDisabled = !firstName || !lastName;
    return (
      <div>
        <div>
          What's your name?
        </div>
        <div>
          <form>
            <div>
              <input id="first_name" placeholder="First" type="text" value={firstName} onChange={(e) => this.handleChange(index, e)}/>
             </div>
            <div>
              <input id="last_name" placeholder="Last" type="text" value={lastName} onChange={(e) => this.handleChange(index, e)}/>
             </div>
          </form>
          <NextButton index={index} incrementCardIdx={this.props.incrementCardIdx} isDisabled={isDisabled}/>
        </div>
      </div>
    );
  }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementCardIdx, decrementCardIdx, setCardAnswer } from '../actions/cards';
import NameCard from '../components/NameCard';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.showBackButton = this.showBackButton.bind(this);
    this.showNextButton = this.showNextButton.bind(this);
  }

  static propTypes = {
    answers: PropTypes.object,
    index: PropTypes.number,
    incrementCardIdx: PropTypes.func,
    decrementCardIdx: PropTypes.func
    
  };

  determineCard(index) {
    switch(index) {
      case 0:
        return <NameCard/>;
      default:
        return <div>default</div>;
    }
  }

  showBackButton(index) {
    if (index < 1) {
      return null;
    } else {
      return (
        <a href="#" onClick={() => this.props.decrementCardIdx()}>
          Back
        </a>
      );
    }
  }

  showNextButton(index) {
    if (index > 4) { // this is # of cards...hardcoded sux
      return null;
    } else {
      return (
        <a href="#" onClick={() => this.props.incrementCardIdx()}>
          Next
        </a>
      );
    }
  }


  render() {
    const { index, answers } = this.props;
    return (
      <div className="SignupPage">
        <div className="title">
          <h1> Signup Page </h1>
        </div>
        <div className="cardBody">
          {this.determineCard(index)}
        </div>
        <div className="backBtn">
          {this.showBackButton(index)}
        </div>
        <div className="nextBtn">
          {this.showNextButton(index)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.cards.answers,
    index: state.cards.index
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCardIdx: () => {
      dispatch(incrementCardIdx());
    },
    decrementCardIdx: () => {
      dispatch(decrementCardIdx());
    },
    setCardAnswer: (index, answer) => {
      dispatch(setCardAnswer(index, answer));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
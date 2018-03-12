import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { incrementCardIdx, decrementCardIdx, setCardAnswer, setEstimatedSavings } from '../actions/cards';
import NameCard from '../components/NameCard';
import EmailCard from '../components/EmailCard';
import OverdraftCard from '../components/OverdraftCard';
import SignupCard from '../components/SignupCard';
import SuccessCard from '../components/SuccessCard';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.showBackButton = this.showBackButton.bind(this);
    this.determineCard = this.determineCard.bind(this);
  }

  static propTypes = {
    answers: PropTypes.object,
    index: PropTypes.number,
    estimatedSavings: PropTypes.number,
    incrementCardIdx: PropTypes.func,
    decrementCardIdx: PropTypes.func,
    setCardAnswer: PropTypes.func,
    setEstimatedSavings: PropTypes.func
  };

  determineCard(index, answers, estimatedSavings) {
    const answer = answers[index] || {};
    let firstName;
    switch(index) {
      case 0:
        return (<NameCard index={index} 
                  incrementCardIdx={this.props.incrementCardIdx}
                  answer={answer} 
                  setCardAnswer={this.props.setCardAnswer}
                />);
      case 1:
        firstName = answers[0].first_name;
        return (<EmailCard index={index} 
                  firstName={firstName} 
                  answer={answer}
                  incrementCardIdx={this.props.incrementCardIdx}
                  setCardAnswer={this.props.setCardAnswer}
                />);
      case 2:
          firstName = answers[0].first_name;
          return (<OverdraftCard index={index}
                    firstName={firstName}
                    answer={answer}
                    incrementCardIdx={this.props.incrementCardIdx}
                    setCardAnswer={this.props.setCardAnswer}
                    setEstimatedSavings={this.props.setEstimatedSavings}
                 />);
      case 3:
        firstName = answers[0].first_name; 
        return (<SignupCard index={index}
                  firstName={firstName}
                  incrementCardIdx={this.props.incrementCardIdx}
                  answers={answers}
                  estimatedSavings={estimatedSavings}
                  />);
      case 4:
        return (<SuccessCard/>);
      default:
        return <div>default</div>;
    }
  }

  showBackButton(index) {
    if (index < 1 || index === 4) {
      return null;
    } else {
      return (
        <a href="#" onClick={() => this.props.decrementCardIdx()}>
          Back
        </a>
      );
    }
  }

  render() {
    const { index, answers, estimatedSavings } = this.props;
    return (
      <div className="SignupPage">
        <div className="title">
          <h1> Signup Page </h1>
        </div>
        <div className="cardBody">
          {this.determineCard(index, answers, estimatedSavings)}
        </div>
        <div className="backBtn">
          {this.showBackButton(index)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.cards.answers,
    index: state.cards.index,
    estimatedSavings: state.cards.estimated_savings
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
    },
    setEstimatedSavings: (amount) => {
      dispatch(setEstimatedSavings(amount));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
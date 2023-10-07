import { Component } from 'react';
import { FeedBack } from './FeedBack/FeedBack';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeState = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() === 0
      ? 0
      : (this.state.good / this.countTotalFeedback()) * 100;
  };

  render() {
    const title =
      this.countTotalFeedback() === 0
        ? 'There is no feedback'
        : 'Please leave feedback';

    return (
      <div>
        <FeedBack
          state={this.state}
          onChangeState={this.changeState}
          title={title}
        />
        <Statistics
          state={this.state}
          total={this.countTotalFeedback()}
          positive={this.countPositiveFeedbackPercentage().toFixed()}
        />
      </div>
    );
  }
}

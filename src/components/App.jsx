import React from 'react';
import Section from './Section/Section.jsx';
import Statistics from './Statistics/Statistics.jsx';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback()) * 100;
  };
  handleClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleClickNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleClickGood}
            onNeutral={this.handleClickNeutral}
            onBad={this.handleClickBad}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import Feedback from "./components/FeedBack/FeedBack";
import Statistics from "./components/Statistic/Statistic";
import Section from "./components/Section/Section";
import "../src/App.css";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat;
      return acc;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  handleClickButton = (nameBtn) => {
    this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClickButton}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

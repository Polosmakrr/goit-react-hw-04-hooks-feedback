import React, {useState} from "react";
import Feedback from "./components/FeedBack/FeedBack";
import Statistics from "./components/Statistic/Statistic";
import Section from "./components/Section/Section";
import "../src/App.css";

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, stat) => {
//       acc += stat;
//       return acc;
//     }, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   handleClickButton = (nameBtn) => {
//     this.setState({ [nameBtn]: this.state[nameBtn] + 1 });
//   };

export default function FB() {
  
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = ["good", "neutral", "bad"];

  const onLeaveFeedback = (options) => {
    switch (options) {
      case "good":
        setGood((state) => state + 1);
        break;
       case "neutral":
        setNeutral((state) => state + 1);
        break;
       case "bad":
        setBad((state) => state + 1);
        break;
    }
  }

  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();

  const countPositiveFeedbackPercentage=()=> {
    return Math.round((good / countTotalFeedback()) * 100);
  }
  const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <Section title="Please leave feedback">
        <Feedback
          options ={keys}
          onLeaveFeedback = {onLeaveFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  
}
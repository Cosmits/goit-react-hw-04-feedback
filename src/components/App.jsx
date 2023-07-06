import { useState } from 'react';
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {

  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (event) => {
    const btnName = event.target.name;
    if (btnName === "good") setGood(good + 1);
    if (btnName === "neutral") setNeutral(neutral + 1);
    if (btnName === "bad") setBad(bad + 1);
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalStateValue = countTotalFeedback();
    return totalStateValue > 0 ? Math.round((good / totalStateValue) * 100) : 0;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          leaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>)
}


export default App;
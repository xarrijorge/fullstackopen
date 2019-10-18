import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => {
    setGood(good + 1);
  };
  const setToNeutral = () => () => {
    setNeutral(neutral + 1);
  };
  const setToBad = () => () => {
    setBad(bad + 1);
  };

  const all = stats.length;
  const avg = 0;
  const perc = 0;

  return (
    <Fragment>
      <h2> Give Feedback</h2>
      <button onClick={() => setToGood()}>Good</button>
      <button onClick={setToNeutral()}>Neutral</button>
      <button onClick={setToBad()}>Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
        <li>all{all}</li>
        <li>average {avg}</li>
        <li>positive {perc}</li>
      </ul>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

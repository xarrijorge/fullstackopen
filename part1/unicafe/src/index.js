import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [stats, setStats] = useState([]);

  const setToGood = () => {
    setStats(stats.concat('G'));
    setGood(good + 1);
  };
  const setToNeutral = () => () => {
    setStats(stats.concat('N'));
    setNeutral(neutral + 1);
  };
  const setToBad = () => () => {
    setStats(stats.concat('B'));
    setBad(bad + 1);
  };

  const all = stats.length;
  const avg = (good * 1 + bad * -1) / all || 0;
  const perc = (good * 100) / all || 0;

  return (
    <Fragment>
      <h2> Give Feedback</h2>
      <button onClick={() => setToGood()}>Good</button>
      <button onClick={setToNeutral()}>Neutral</button>
      <button onClick={setToBad()}>Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li>
          good <span>{good}</span>
        </li>
        <li>
          neutral <span>{neutral}</span>
        </li>
        <li>
          bad <span>{bad}</span>
        </li>
        <li>
          all <span>{all}</span>
        </li>
        <li>
          average <span>{avg}</span>
        </li>
        <li>
          positive <span>{perc}</span> %
        </li>
      </ul>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

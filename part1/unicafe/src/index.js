import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = props => {
  const good = props.good;
  const bad = props.bad;
  const neutral = props.neutral;
  const stats = props.stats;

  const all = stats.length;
  const avg = (good * 1 + bad * -1) / all;
  const perc = (good * 100) / all || 0;

  return stats.length > 0 ? (
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
  ) : (
    'No Feedback Given!'
  );
};

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [stats, setStats] = useState([]);

  const setToGood = () => {
    setStats(stats.concat('G'));
    setGood(good + 1);
  };
  const setToNeutral = () => {
    setStats(stats.concat('N'));
    setNeutral(neutral + 1);
  };
  const setToBad = () => {
    setStats(stats.concat('B'));
    setBad(bad + 1);
  };

  return (
    <Fragment>
      <h2> Give Feedback</h2>
      <Button text="Good" handleClick={() => setToGood()} />
      <Button text="Neutral" handleClick={() => setToNeutral()} />
      <Button text="Bad" handleClick={() => setToBad()} />
      <h2>Statistics</h2>
      <Statistics stats={stats} good={good} bad={bad} neutral={neutral} />
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

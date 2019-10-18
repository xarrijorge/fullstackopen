import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <Fragment>
      <h2> Give Feedback</h2>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <h2>Statistics</h2>
      <ul>
        <li>good {good}</li>
        <li>neutral {neutral}</li>
        <li>bad {bad}</li>
      </ul>
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState('');
  const [vote, setVote] = useState('');
  let points = new Uint8Array(props.anecdotes.length);
  let copy = [...points];
  let rand = Math.floor(Math.random() * props.anecdotes.length);

  const updateApp = () => {
    setMessage(props.anecdotes[selected][0]);
    setVote(copy[selected]);
  };

  const updateVote = () => {
    let that = copy[selected];
    console.log(that);
    that = that + 1;
    console.log(that);
    return that;
  };

  useEffect(() => {
    updateApp();
    updateVote();
    console.log(copy);
  });

  return (
    <div>
      <h2>{message}</h2>
      <h3>{copy[selected]}</h3>
      <Button handleClick={() => updateVote()} text={'Vote'} />
      <Button handleClick={() => setSelected(rand)} text={'Next Quote'} />
    </div>
  );
};
const anecdotes = [
  ['If it hurts, do it more often', 0],
  [
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    0,
  ],
  ['Premature optimization is the root of all evil.', 0],
  [
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    0,
  ],
  [
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',

    0,
  ],
  ['Adding manpower to a late software project makes it later!', 0],
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

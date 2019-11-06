import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Button = props => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const App = props => {
  const [selected, setSelected] = useState(0);
  const [message, setMessage] = useState('');
  let [vote, setVote] = useState('');
  let points = new Uint8Array(props.anecdotes.length);
  const [copy, setCopy] = useState([...points]);
  let rand = Math.floor(Math.random() * props.anecdotes.length);

  const updateApp = () => {
    setMessage(props.anecdotes[selected]);
    setVote(copy[selected]);
  };

  const updateCopy = () => {
    let point = copy[selected];
    let newCopy = [...copy];
    point += 1;
    newCopy.splice(selected, 1, point);
    setCopy(newCopy);
  };

  useEffect(() => {
    updateApp();
  });

  return (
    <div>
      <h2>{message}</h2>
      <h3>{vote}</h3>
      <Button handleClick={() => updateCopy()} text={'Vote'} />
      <Button handleClick={() => setSelected(rand)} text={'Next Quote'} />
    </div>
  );
};
const anecdotes = [
  'If it hurts, do it more often',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Premature optimization is the root of all evil.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Adding manpower to a late software project makes it later!',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));

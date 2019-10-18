import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  ];
  let rand = Math.floor(Math.random() * anecdotes.length);
  const [selected, setSelected] = useState(rand);
  const [message, setMessage] = useState('');

  const updateMessage = () => {
    setSelected(rand);
  };

  useEffect(() => {
    setMessage(anecdotes[selected]);
  }, [anecdotes, selected]);

  return (
    <div>
      <h2> {message}</h2>
      <button onClick={() => updateMessage()}>Get Quote</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = props => {
  const objStore = props.objStore;
  const { name: name1, exercises: exer1 } = objStore[0];
  const { name: name2, exercises: exer2 } = objStore[1];
  const { name: name3, exercises: exer3 } = objStore[2];
  return (
    <Fragment>
      <Part name={name1} exercises={exer1} />
      <Part name={name2} exercises={exer2} />
      <Part name={name3} exercises={exer3} />
    </Fragment>
  );
};

const Total = props => {
  const store = props.store;
  const [exer1, exer2, exer3] = [
    store[0].exercises,
    store[1].exercises,
    store[2].exercises,
  ];
  return <p>Number of exercises {exer1 + exer2 + exer3}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content objStore={parts} />
      <Total store={parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

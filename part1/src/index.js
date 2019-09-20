import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
  return <h1>{props.course.name}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = props => {
  const course = props.course.course;
  const { name: name1, exercises: exer1 } = course[0];
  const { name: name2, exercises: exer2 } = course[1];
  const { name: name3, exercises: exer3 } = course[2];
  return (
    <Fragment>
      <Part name={name1} exercises={exer1} />
      <Part name={name2} exercises={exer2} />
      <Part name={name3} exercises={exer3} />
    </Fragment>
  );
};

const Total = props => {
  const course = props.course.course;
  const [exer1, exer2, exer3] = [
    course[0].exercises,
    course[1].exercises,
    course[2].exercises,
  ];
  return <p>Number of exercises {exer1 + exer2 + exer3}</p>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    course: [
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
    ],
  };
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

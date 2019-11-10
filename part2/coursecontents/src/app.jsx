import React, { Fragment } from 'react';

import Course from './components/course';


const App = () => {
  const course = {
    name: 'Half Stack application development',
    course: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Testing my new framework',
        exercises: 3
      }
    ]
  };
  return (
    <Course course={course}/>
  );
};

export default App;
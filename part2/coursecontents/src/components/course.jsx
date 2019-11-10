import React, { Fragment } from 'react';

const Header = ({course})=> {
  return <h1>{course.name}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  ); 
};

const Content = ({ course }) => {
  const data = course.course;

  let result = data.map(element => {
    return <Part name={element.name} exercises={element.exercises} /> 
  });

  return (
    <Fragment>
      {/* <Part name={data[0].name} exercises={data[0].exercises} /> */}
      {result}
    </Fragment>
  );
};

const Total = ({course})=> {
  const parts = course.course;

  let total = 0;
  parts.forEach((x) => { console.log(x); return total +=x.exercises;}); 
  return <p><strong>Number of exercises {total}</strong></p>;
};

const Course = ({course}) => {
    return (
      <>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </>
  );
};


export default Course;
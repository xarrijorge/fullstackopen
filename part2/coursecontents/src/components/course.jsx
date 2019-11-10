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
  const { name: name1, exercises: exer1 } = data[0];
  const { name: name2, exercises: exer2 } = data[1];
  const { name: name3, exercises: exer3 } = data[2];
  return (
    <Fragment>
      <Part name={name1} exercises={exer1} />
      <Part name={name2} exercises={exer2} />
      <Part name={name3} exercises={exer3} />
    </Fragment>
  );
};

const Total = ({course})=> {
  const parts = course.course;

  let total = parts.reduce((a,b) => a.exercises + b.exercises, 0); 
  console.log(total);
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
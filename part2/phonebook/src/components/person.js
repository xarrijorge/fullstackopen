import React from 'react';

const Person = ({person, toggleImportance}) =>{
    const label = person.important ? 'not important' : 'important';
    return (
      <p>
        {person.name} {person.number}
        <button onClick={toggleImportance}>{label}</button>
      </p>
    )
}

export default Person;
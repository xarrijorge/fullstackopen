import React from 'react';

const Person = ({person, toggleImportance, removeContact}) =>{
    const label = person.important ? 'not important' : 'important';
    return (
      <p>
        {person.name} {person.number}
        <button onClick={toggleImportance}>{label}</button>
        <button onClick = {removeContact}>delete</button>
      </p>
    )
}

export default Person;
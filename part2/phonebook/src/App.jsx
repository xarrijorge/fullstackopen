import React, { Fragment, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas"
    }
  ]);
  const [newName, setNewName] = useState("");

  const handleName = event => {
    setNewName(event.target.value);
  };

  let people = persons.map((person, i) => <p key={i}> {person.name} </p>);

  const handlePersons = event => {
    event.preventDefault();
    let person = {
      name: newName
    };

    let duplicate = persons.some(elem => newName === elem.name);
    if (duplicate) {
      alert(`${newName} is already in the phonebook`);
    } else {
      setPersons(persons.concat(person));
      setNewName("");
    }
  };

  return (
    <Fragment>
      <h2> Phonebook </h2>{" "}
      <form onSubmit={handlePersons}>
        <div>
          name: <input value={newName} onChange={handleName} />{" "}
        </div>{" "}
        <div>
          <button type="submit"> add </button>{" "}
        </div>{" "}
      </form>{" "}
      <h2> Numbers </h2> {people} <div></div>
    </Fragment>
  );
};

export default App;

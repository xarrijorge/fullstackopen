import React, { Fragment, useState, useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      tel: "040-1234567"
    }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  let buttonStatus = newName == "" || newNumber == "" ? true : false;

  const handleName = event => {
    setNewName(event.target.value);
  };

  const handleNumber = event => {
    setNewNumber(event.target.value);
  };

  let people = persons.map((person, i) => (
    <p key={i}>
      {" "}
      {person.name} {person.tel}
    </p>
  ));

  const handlePersons = event => {
    event.preventDefault();
    let person = {
      name: newName,
      tel: newNumber
    };

    let duplicate = persons.some(elem => newName === elem.name);
    if (duplicate) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(person));
      setNewName("");
    }
  };
  return (
    <Fragment>
      <h2> Phonebook </h2>
      <form onSubmit={handlePersons}>
        <div>
          <p>
            name: <input type="text" value={newName} onChange={handleName} />
          </p>
          <p>
            number:
            <input type="tel" value={newNumber} onChange={handleNumber} />
          </p>
        </div>
        <div>
          <button type="submit" disabled={buttonStatus}>
            add
          </button>
        </div>
      </form>
      <h2> Numbers </h2> {people} <div></div>
    </Fragment>
  );
};

export default App;

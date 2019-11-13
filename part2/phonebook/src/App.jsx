import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/search";
import AddContact from "./components/addContact";
import ShowContacts from "./components/showContacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFilterd] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  let buttonStatus = newName === "" || newNumber === "" ? true : false;

  const handleName = event => {
    setNewName(event.target.value);
  };

  const handleNumber = event => {
    setNewNumber(event.target.value);
  };

  const handleSearch = event => {
    setNewFilter(String(event.target.value));
    let data = persons.filter(elem => elem.name.includes(newFilter));
    setFilterd(data);
  };

  let display = newFilter !== "" ? filtered : persons;
  let people = display.map((person, i) => (
    <p key={i}>
      {" "}
      {person.name} {person.number}
    </p>
  ));

  const handlePersons = event => {
    event.preventDefault();
    let person = {
      name: newName,
      number: newNumber
    };

    let duplicate = persons.some(elem => newName === elem.name);
    if (duplicate) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat(person));
      setNewName("");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(res => {
      console.log(res);
      setPersons(res.data);
    });
  }, []);

  return (
    <Fragment>
      <h2> Phonebook </h2>
      <form onSubmit={handlePersons}>
        <Search search={handleSearch} />
        <AddContact
          newName={newName}
          handleName={handleName}
          newNumber={newNumber}
          handleNumber={handleNumber}
          buttonStatus={buttonStatus}
        />
        <ShowContacts people={people} />
      </form>
    </Fragment>
  );
};

export default App;

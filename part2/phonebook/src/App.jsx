import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

import Search from "./components/search";
import AddContact from "./components/addContact";
import ShowContacts from "./components/showContacts";
import Person from "./components/person";

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

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/persons/${id}`
    const person = persons.find(p => p.id === id);
    const changePerson = {...person, important: !person.important};
    console.log(url, person, changePerson);

    axios.put(url, changePerson).then(res => {
      setPersons(persons.map(person => person.id !== id ? person : res.data));
    })
  }

  
  let display = newFilter !== "" ? filtered : persons;

  let people = display.map((person) => (
   <Person 
     key={person.id}
     person={person}
     toggleImportance={() => toggleImportanceOf(person.id)}
   /> 
  ));

  const handlePersons = event => {
    event.preventDefault();
    let person = {
      name: newName,
      number: newNumber,
      important: Math.random() > 0.5,
    };
    axios
      .post("http://localhost:3001/persons", person)
      .then(res => console.log(res));
    setNewName("");
    setNewNumber("");
  };

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(res => {
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

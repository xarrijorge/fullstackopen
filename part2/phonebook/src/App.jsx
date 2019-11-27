import React, { Fragment, useState, useEffect } from "react";

import Search from "./components/search";
import AddContact from "./components/addContact";
import ShowContacts from "./components/showContacts";
import Person from "./components/person";
import contactService from "./services/contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFilterd] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  let buttonStatus = newName === "" || newNumber === "" ? true : false;

  const addContact = event => {
    event.preventDefault();
    let person = {
      name: newName,
      number: newNumber,
      important: Math.random() > 0.5
    };

    const duplicate = persons.some(elem => elem.name === person.name);
    if (!duplicate) {
      console.log(person);
      contactService.create(person).then(res => console.log(res));
      setNewName("");
      setNewNumber("");
    }else{
      if(window.confirm(`${person.name} is already added to contacts. Replace old number with new one?`)){
        let elem = persons.find(elem => elem.name === person.name);
        contactService.update(elem.id, person);
        setNewName("");
        setNewNumber("");
      }
    }
   
  }

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
    const person = persons.find(p => p.id === id);
    const changePerson = { ...person, important: !person.important };

    contactService.update(id, changePerson).then(returnedContact => {
      setPersons(
        persons.map(person => (person.id !== id ? person : returnedContact))
      );
    });
  };

  const deleteContact = id => {
    const contact = persons.find(person => person.id === id);
    if (window.confirm(`Do you really want to delete '${contact.name}'?`)) {
      contactService.deleteOne(contact.id).then(res => {
        setPersons(persons.map(person => person));
      });
    }
  };

  let display = newFilter !== "" ? filtered : persons;

  let people = display.map(person => (
    <Person
      key={person.id}
      person={person}
      toggleImportance={() => toggleImportanceOf(person.id)}
      removeContact={() => deleteContact(person.id)}
    />
  ));

  useEffect(() => {
    contactService.getAll().then(allContacts => {
      setPersons(allContacts);
    });
  }, []);

  return (
    <Fragment>
      <h1> Phonebook </h1>
      <form>
        <Search search={handleSearch} />
        <AddContact
          newName={newName}
          handleName={handleName}
          newNumber={newNumber}
          handleNumber={handleNumber}
          buttonStatus={buttonStatus}
          handleClick={addContact}
        />
        <h2> Numbers </h2>
        <ShowContacts people={people} />
      </form>
    </Fragment>
  );
};

export default App;

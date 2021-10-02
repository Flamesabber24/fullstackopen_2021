import React, { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [searchList, setSearchList] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  let id = 5;

  const addName = (event) => {
    event.preventDefault();
    const person = { name: newName, number: newNumber, id: id };
    id++;

    if (persons.indexOf(person) === -1) {
      setPersons(persons.concat(person));
    }

    setNewName('');
    setNewNumber('');
  }

  const handleNameChange = (event) => {
    persons.forEach((person) => {
      if (person.name === event.target.value) {
        window.alert(`${event.target.value} is already added to phonebook`);
        setNewName('');
      }
      else {
        setNewName(event.target.value);
      }
    });
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    const to_search = event.target.value.toLowerCase();
    setSearch(event.target.value);

    const res = (to_search === '') ? [] : persons.filter(person => person.name.toLowerCase().includes(to_search));

    setSearchList(res);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        handleSearch={handleSearch}
      />
      <h3>Add a new</h3>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons 
        searchList = {searchList}
        persons = {persons}
      />
    </div>
  )
}

export default App
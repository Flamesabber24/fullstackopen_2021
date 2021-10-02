import React from "react";

const Persons = (props) => {
    return (
        <>
            {
                (props.searchList === undefined || props.searchList.length === 0) ?
                    props.persons.map(person => <div key={person.id}>{person.name} {person.number}</div>) :
                    props.searchList.map(person => <div key={person.id}>{person.name} {person.number}</div>)
            }
        </>
    );
}

export default Persons;
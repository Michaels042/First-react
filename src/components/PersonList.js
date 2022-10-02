import React from "react";
import Person from "./Person";

const PersonList = () => {
  const persons = [
    {
      id: 1,
      name: "Jackie",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Jet",
      age: 11,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Tom",
      age: 30,
      skill: "Node",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
};

export default PersonList;

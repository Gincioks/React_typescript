import * as React from "react";
import Person from "./components/Person";

const app: React.FC = () => {
  const [personsState, setPersonsState] = React.useState({
    persons: [
      { id: 0, name: "Max", age: 28 },
      { id: 1, name: "David", age: 18 },
      { id: 2, name: "Elyza", age: 48 },
    ],
    showPersons: false,
  });

  const togglePersonsHandler = () => {
    const doesShow = personsState.showPersons;
    setPersonsState({
      ...personsState,
      showPersons: !doesShow,
    });
  };

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    id
  ) => {
    let persons = personsState.persons;
    persons[id] = { id: id, name: event.target.value, age: 28 };
    setPersonsState({
      persons: persons,
      showPersons: true,
    });
  };

  const deletePersonHandler = (index: number) => {
    let persons = personsState.persons;
    const inde = persons.indexOf(persons[index]);
    if (inde > -1) {
      persons.splice(inde, 1);
    }
    setPersonsState({ persons: persons, showPersons: true });
  };

  let persons = null;

  if (personsState.showPersons) {
    persons = (
      <div>
        {personsState.persons.map(
          (person: { name: string; age: number }, index: number) => {
            return (
              <Person
                click={() => deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => nameChangeHandler(event, index)}
                key={index}
              />
            );
          }
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p>This is really working</p>
      <button onClick={togglePersonsHandler} className="toggle_persons">
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};
export default app;

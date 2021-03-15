import * as React from "react";
import Person from "./components/Person";

const app: React.FC = () => {
  const [personsState, setPersonsState] = React.useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "David", age: 18 },
      { name: "Elyza", age: 48 },
    ],
    showPersons: false,
  });

  const togglePersonsHandler = () => {
    setPersonsState({
      ...personsState,
      showPersons: true,
    });
  };

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "David", age: 18 },
        { name: "Elyza", age: 48 },
      ],
      showPersons: true,
    });
  };

  const deletePersonHandler = (index: number) => {
    const persons = personsState.persons;

    persons.slice(index, 1);
    setPersonsState({ persons: persons, ...personsState });
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
                changed={nameChangeHandler}
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

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

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPersonsState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "David", age: 18 },
        { name: "Elyza", age: 48 },
      ],
      ...personsState,
    });
  };

  const togglePersonsHandler = () => {
    setPersonsState({
      ...personsState,
      showPersons: true,
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App </h1>
      <p>This is really working</p>
      <button onClick={togglePersonsHandler} className="toggle_persons">
        Toggle Persons
      </button>
      {personsState.showPersons ? (
        <div>
          <Person
            name={personsState.persons[0].name}
            age={personsState.persons[0].age}
            changed={nameChangeHandler}
          />
          <Person
            name={personsState.persons[1].name}
            age={personsState.persons[1].age}
            changed={nameChangeHandler}
          />
        </div>
      ) : null}
    </div>
  );
};
export default app;

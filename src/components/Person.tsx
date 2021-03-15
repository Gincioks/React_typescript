import * as React from "react";

type Props = {
  name: string;
  age: number;
  changed: React.ChangeEventHandler<HTMLInputElement>;
};

const Person = (props: Props): JSX.Element => {
  return (
    <div className="person">
      <p>
        I'm {props.name} and {props.age} years old
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;

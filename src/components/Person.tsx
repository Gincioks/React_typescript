import * as React from "react";

type Props = {
  click: React.MouseEventHandler<HTMLDivElement>;
  name: string;
  age: number;
  changed: React.ChangeEventHandler<HTMLInputElement>;
  key: number;
};

const Person: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="person">
      <p onClick={props.click}>
        I'm {props.name} and {props.age} years old
      </p>
      <input type="text" onChange={props.changed} placeholder={props.name} />
    </div>
  );
};

export default Person;

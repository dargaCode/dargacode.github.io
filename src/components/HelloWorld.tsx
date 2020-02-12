import React from "react";
import { join } from "lodash";

interface Props {
  descriptor: string;
}

function sum(numA: number, numB: number): string {
  return `the sum is ${numA + numB}!`;
}

export default function HelloWorld(props: Props): JSX.Element {
  const { descriptor } = props;

  const mySum = sum(10, 22);

  const message = join(["Hello", descriptor, "World!"], " ");

  return (
    <div>
      <div className="hello-world-message">{message}</div>
      {mySum}
    </div>
  );
}

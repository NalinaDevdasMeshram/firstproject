/* eslint-disable react/prop-types */
/** props driling is the situation  same data need to pass every level because of the final requirement */
import { useState } from "react";

const ProDrilling = () => {
  const [fName, setFName] = useState("firstName");
  const [lName, setLName] = useState("LastName");
  return (
    <div>
      <h5>I Am Parent Component</h5>
      <ChildA fName={fName} lName={lName} />
    </div>
  );
};
const ChildA = ({ fName, lName }) => {
  return (
    <div>
      <h5>I am child Component</h5>
      <ChildB fName={fName} lName={lName} />
    </div>
  );
};
const ChildB = ({ fName, lName }) => {
  return (
    <div>
      <h5>I am secondChild Component</h5>
      <ChildC fName={fName} lName={lName} />
    </div>
  );
};
const ChildC = ({ fName, lName }) => {
  return (
    <div>
      <h5> I am third child Component</h5>
      <h6>{fName}</h6>
      <h6>{lName}</h6>
    </div>
  );
};

export default ProDrilling;

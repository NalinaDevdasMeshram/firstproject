import { useContext } from "react";
import { AppContext } from "./AppContext";

const Contact = () => {
  const { phone, Name } = useContext(AppContext);
  return (
    <div>
      <h2>Contact</h2>
      <h3>Phone:{phone}</h3>
      <h3>Name:{Name}</h3>
    </div>
  );
};

export default Contact;

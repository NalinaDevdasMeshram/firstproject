/* eslint-disable react/prop-types */
import { createContext } from "react";
export const AppContext = createContext();
const ContextProvider = (props) => {
  const phone = "+91 7854623548";
  const Name = "Random Name";
  return (
    <AppContext.Provider key={Name} value={{ phone, Name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;

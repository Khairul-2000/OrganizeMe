import { PropsWithChildren, useState } from "react";
import UserContext from "../userContext";

const ContextProvider = ({ children }: PropsWithChildren) => {
  const [newuser, setNewUser] = useState({});
  const [todos, setTodos] = useState([]);

  const contextValue = {
    newuser,
    setNewUser,
    todos,
    setTodos,
  };

  return (
    <div>
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default ContextProvider;

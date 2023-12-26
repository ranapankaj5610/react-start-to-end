import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  //Here children are all the components which we will wrap up inside this provider from app.jsx
  const [user, setUser] = React.useState(null);
  return (
    // we are passing the user and setUser in the value such taht we can use it from every children component.
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

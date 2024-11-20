import React, { createContext, useState } from "react";

import { authUser as authUserData } from "../mock/data";

export const AuthDataContext = createContext();

export const AuthDataProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(authUserData);

  return (
    <AuthDataContext.Provider value={{ authUser }}>
      {children}
    </AuthDataContext.Provider>
  );
};

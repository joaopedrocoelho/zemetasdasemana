//create user Context
import React, { createContext, useState } from "react";

interface UserContextProps {
  email: string;
  setUser: (email: string) => void;
}

export const UserContext = createContext({
  email: "",
  setUser: (email: string) => {},
});

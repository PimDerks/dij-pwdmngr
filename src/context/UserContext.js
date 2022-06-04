import { createContext } from "react";

const UserContext = createContext();

const addPassword = (passwords, passwordToAdd) => {
  const id = passwords.length + 1;
  return [...passwords, { id, ...passwordToAdd }];
};

const removePassword = (passwords, passwordToRemove) => {
  return passwords.filter((pw) => pw.id !== passwordToRemove.id);
};

export default UserContext;

export { addPassword, removePassword };

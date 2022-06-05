import { createContext } from "react";

const UserContext = createContext();

const addPassword = (passwords, passwordToAdd) => {
  // Add additional props to pw
  const addedProps = {
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
  };
  return [...passwords, { ...addedProps, ...passwordToAdd }];
};

const editPassword = (passwords, passwordToEdit) => {
  return passwords.map((pw) => {
    if (pw.id === passwordToEdit.id) {
      return passwordToEdit;
    }
    return pw;
  });
};

const removePassword = (passwords, passwordToRemove) => {
  return passwords.filter((pw) => pw.id !== passwordToRemove.id);
};

export default UserContext;

export { addPassword, removePassword, editPassword };

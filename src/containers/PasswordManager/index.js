import { useContext } from "react";
import PasswordForm from "../../components/PasswordForm";
import PasswordList from "../../components/PasswordList";
import UserContext, {
  addPassword,
  removePassword,
} from "../../context/UserContext";

const PasswordManager = () => {
  const { passwords, setPasswords } = useContext(UserContext);

  const onSubmit = (pw) => {
    setPasswords(addPassword(passwords, pw));
  };

  const onRemove = (pw) => {
    setPasswords(removePassword(passwords, pw));
  };

  return (
    <>
      <PasswordForm onSubmit={onSubmit} />
      <PasswordList passwords={passwords} onRemove={onRemove} />
    </>
  );
};

export default PasswordManager;

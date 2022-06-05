import { useContext } from "react";
import PasswordForm from "../../components/PasswordForm";
import UserContext, { addPassword } from "../../context/UserContext";

const Add = () => {
  const { passwords, setPasswords } = useContext(UserContext);

  const onSubmit = (pw) => {
    setPasswords(addPassword(passwords, pw));
  };

  return <PasswordForm onSubmit={onSubmit} />;
};

export default Add;

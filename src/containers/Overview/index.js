import { useContext } from "react";
import PasswordList from "../../components/PasswordList";
import UserContext, { removePassword } from "../../context/UserContext";

const Overview = () => {
  const { passwords, setPasswords } = useContext(UserContext);

  const onRemove = (pw) => {
    setPasswords(removePassword(passwords, pw));
  };

  return <PasswordList passwords={passwords} onRemove={onRemove} />;
};

export default Overview;

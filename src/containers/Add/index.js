import { useContext } from "react";
import PasswordForm from "../../components/PasswordForm";
import UserContext, { addPassword } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const { passwords, setPasswords } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (pw) => {
    setPasswords(addPassword(passwords, pw));
    navigate("/");
  };

  return <PasswordForm onSubmit={onSubmit} />;
};

export default Add;

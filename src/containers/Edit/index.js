import { useContext } from "react";
import PasswordForm from "../../components/PasswordForm";
import UserContext, { addPassword } from "../../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { passwords, setPasswords } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const pw = passwords.find((pw) => {
    return pw.id === parseInt(id);
  });

  const onSubmit = (pw) => {
    setPasswords(addPassword(passwords, pw));
    navigate("/");
  };

  return <PasswordForm onSubmit={onSubmit} passwordToEdit={pw} />;
};

export default Edit;

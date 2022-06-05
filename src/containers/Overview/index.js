import { useContext } from "react";
import PasswordList from "../../components/PasswordList";
import UserContext, { removePassword } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const { passwords, setPasswords } = useContext(UserContext);
  const navigate = useNavigate();

  const onRemove = (pw) => {
    setPasswords(removePassword(passwords, pw));
  };

  const onEdit = ({ id }) => {
    navigate(`/edit/${id}`);
  };

  return (
    <PasswordList passwords={passwords} onRemove={onRemove} onEdit={onEdit} />
  );
};

export default Overview;

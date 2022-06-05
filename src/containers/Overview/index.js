import { useContext } from "react";
import PasswordList from "../../components/PasswordList";
import Filter from "../../components/Filter";
import UserContext, { removePassword } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const { passwords, setPasswords } = useContext(UserContext);
  const { currentFilter, setCurrentFilter } = useContext(UserContext);
  const navigate = useNavigate();

  const onRemove = (pw) => {
    setPasswords(removePassword(passwords, pw));
  };

  const onChange = (filter) => {
    setCurrentFilter(filter);
  };

  const onEdit = ({ id }) => {
    navigate(`/edit/${id}`);
  };

  const filteredPasswords = passwords.filter((pw) => {
    const regexp = new RegExp(currentFilter, "i");
    if (currentFilter) {
      return regexp.test(pw.name);
    }
    return pw;
  });

  return (
    <div>
      <Filter onChange={onChange} value={currentFilter} />
      <PasswordList
        passwords={filteredPasswords}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </div>
  );
};

export default Overview;

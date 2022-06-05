import PropTypes from "prop-types";
import { useContext } from "react";
import PasswordListItem from "../PasswordListItem";
import PasswordListEmpty from "../PasswordListEmpty";
import AppContext from "../../context/AppContext";
import passwordProps from "../../propTypes/password";

const PasswordList = ({ passwords, onRemove, onEdit }) => {
  const { clients } = useContext(AppContext);

  // Attach client data to passwords
  const mappedPasswords = passwords.map((pw) => {
    const client = clients.filter((c) => {
      return c.id === pw.clientId;
    });

    if (client.length) {
      const { name: clientName, color: clientColor } = client[0];
      return { clientName, clientColor, ...pw };
    } else {
      return pw;
    }
  });

  if (!mappedPasswords.length) {
    return <PasswordListEmpty />;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Password</th>
            <th scope="col">Client</th>
            <th scope="col">Timestamp</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mappedPasswords.map((pw) => (
            <PasswordListItem
              onEdit={onEdit}
              onRemove={onRemove}
              key={`pw-${pw.id}`}
              {...pw}
            />
          ))}
        </tbody>
      </table>
    );
  }
};

PasswordList.defaultProps = {
  passwords: [],
};

PasswordList.propTypes = {
  passwords: PropTypes.arrayOf(PropTypes.exact(passwordProps)),
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default PasswordList;

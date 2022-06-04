import { useContext } from "react";
import PasswordListItem from "../PasswordListItem";
import PasswordListEmpty from "../PasswordListEmpty";
import AppContext from "../../context/AppContext";

const PasswordList = ({ passwords, onRemove }) => {
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
      <div>
        {mappedPasswords.map((pw) => (
          <PasswordListItem onRemove={onRemove} key={`pw-${pw.id}`} {...pw} />
        ))}
      </div>
    );
  }
};

export default PasswordList;

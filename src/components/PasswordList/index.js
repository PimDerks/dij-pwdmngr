import PasswordListItem from "../PasswordListItem";
import PasswordListEmpty from "../PasswordListEmpty";

const PasswordList = ({ passwords, onRemove }) => {
  if (!passwords.length) {
    return <PasswordListEmpty />;
  } else {
    return (
      <div>
        {passwords.map((pw) => (
          <PasswordListItem onRemove={onRemove} key={`pw-${pw.id}`} {...pw} />
        ))}
      </div>
    );
  }
};

export default PasswordList;

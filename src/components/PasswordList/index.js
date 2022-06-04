import PasswordListItem from "../PasswordListItem";
import PasswordListEmpty from "../PasswordListEmpty";

const PasswordList = ({ passwords }) => {
  if (!passwords.length) {
    return <PasswordListEmpty />;
  } else {
    return (
      <div>
        {passwords.map((pw) => (
          <PasswordListItem key={`pw-${pw.id}`} {...pw} />
        ))}
      </div>
    );
  }
};

export default PasswordList;

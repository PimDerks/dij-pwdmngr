import Button from "../input/Button";

const PasswordListItem = ({ id, name, password, client, onRemove }) => {
  const buttonRemoveConfig = {
    label: "Remove",
    onClick: (e) => {
      if (onRemove) {
        onRemove({ id, name, password, client });
      }
    },
  };
  return (
    <div>
      <dl>
        <dt>Id</dt>
        <dd>{id}</dd>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Password</dt>
        <dd>{password}</dd>
        <dt>Client</dt>
        <dd>{client}</dd>
      </dl>
      <Button {...buttonRemoveConfig} />
    </div>
  );
};

export default PasswordListItem;

import { useState } from "react";

import Button from "../input/Button";

const PasswordListItem = ({ id, name, password, client, onRemove }) => {
  const [isShown, setIsShown] = useState(false);

  const buttonRemoveConfig = {
    label: "Remove password",
    onClick: (e) => {
      if (onRemove) {
        onRemove({ id, name, password, client });
      }
    },
  };

  const buttonShowConfig = {
    label: "Show password",
    onClick: () => {
      setIsShown(!isShown);
    },
  };

  const buttonCopyConfig = {
    label: "Copy password to clipboard",
    onClick: () => {
      navigator.clipboard.writeText(password).then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
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
        <dd>{isShown ? password : "******"}</dd>
        <dt>Client</dt>
        <dd>{client}</dd>
      </dl>
      <Button {...buttonRemoveConfig} />
      <Button {...buttonCopyConfig} />
      <Button {...buttonShowConfig} />
    </div>
  );
};

export default PasswordListItem;

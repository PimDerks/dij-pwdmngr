import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../input/Button";

const PasswordListItem = ({
  id,
  name,
  password,
  clientId,
  clientName,
  clientColor,
  onRemove,
  onEdit,
}) => {
  const [isShown, setIsShown] = useState(false);

  const buttonEditConfig = {
    label: "Edit password",
    onClick: () => {
      if (onEdit) {
        onEdit({ id });
      }
    },
  };

  const buttonRemoveConfig = {
    label: "Remove password",
    onClick: () => {
      if (onRemove) {
        onRemove({ id });
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
        () => {
          console.log("Async: Copying to clipboard was successful!");
        },
        (err) => {
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
        {clientName && (
          <>
            <dt>Client</dt>
            <dd>
              <div
                className="client-indicator"
                style={{ backgroundColor: clientColor }}
              ></div>
              {clientName}
            </dd>
          </>
        )}
      </dl>
      <Button {...buttonRemoveConfig} />
      <Button {...buttonCopyConfig} />
      <Button {...buttonShowConfig} />
      <Button {...buttonEditConfig} />
    </div>
  );
};

PasswordListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  clientName: PropTypes.string,
  clientColor: PropTypes.string,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

export default PasswordListItem;

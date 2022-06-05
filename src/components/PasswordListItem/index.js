import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../input/Button";
import passwordProps from "../../propTypes/password";

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
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{isShown ? password : "******"}</td>
      <td>
        {clientName && (
          <>
            <div
              className="client-indicator"
              style={{ backgroundColor: clientColor }}
            ></div>
            {clientName}
          </>
        )}
      </td>
      <td>
        <Button {...buttonRemoveConfig} />
        <Button {...buttonCopyConfig} />
        <Button {...buttonShowConfig} />
        <Button {...buttonEditConfig} />
      </td>
    </tr>
  );
};

PasswordListItem.propTypes = {
  ...{
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
    timestamp: PropTypes.string,
  },
  ...passwordProps,
};

export default PasswordListItem;

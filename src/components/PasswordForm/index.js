import { useState, useContext } from "react";
import PropTypes from "prop-types";
import AppContext from "../../context/AppContext";
import Button from "../input/Button";
import Input from "../input/Input";
import Select from "../input/Select";
import PasswordInput from "../input/PasswordInput";

const PasswordForm = ({ onSubmit, passwordToEdit }) => {
  const { clients } = useContext(AppContext);
  const [name, setName] = useState(passwordToEdit ? passwordToEdit.name : "");
  const [password, setPassword] = useState(
    passwordToEdit ? passwordToEdit.password : ""
  );
  const [id] = useState(passwordToEdit ? passwordToEdit.id : "");
  const [clientId, setClientId] = useState(
    passwordToEdit ? passwordToEdit.clientId : ""
  );

  const onSubmitEvent = (e) => {
    e.preventDefault();
    onSubmit({
      id,
      name,
      password,
      clientId,
    });
  };

  const inputConfig = {
    id: "name",
    label: "Name",
    value: name,
    placeholder: "e.g. google.com",
    required: true,
    onChange: (e) => {
      setName(e.target.value);
    },
  };

  const inputPasswordConfig = {
    id: "password",
    label: "Password",
    value: password,
    required: true,
    onChange: (e) => {
      setPassword(e.target.value);
    },
  };

  const selectConfig = {
    id: "client",
    label: "Client",
    value: clientId,
    required: true,
    onChange: (e) => {
      setClientId(e.target.value);
    },
    options: clients.map((c) => {
      return { value: c.id, label: c.name };
    }),
  };

  // Set default client id, otherwise this will only update onChange.
  if (clients.length && !clientId) {
    setClientId(clients[0].id);
  }

  const buttonConfig = {
    label: "Submit",
    type: "submit",
  };

  return (
    <form action="." onSubmit={onSubmitEvent}>
      <Input {...inputConfig} />
      <PasswordInput {...inputPasswordConfig} />
      <Select {...selectConfig} />
      <Button {...buttonConfig} />
    </form>
  );
};

PasswordForm.defaultProps = {};

PasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  passwordToEdit: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    clientId: PropTypes.string,
    clientColor: PropTypes.string,
    clientName: PropTypes.string,
  }),
};

export default PasswordForm;

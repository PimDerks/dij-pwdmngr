import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/AppContext";
import Button from "../input/Button";
import Input from "../input/Input";
import Select from "../input/Select";
import PasswordInput from "../input/PasswordInput";

const PasswordForm = ({ onSubmit }) => {
  const { clients } = useContext(AppContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [client, setClient] = useState("");

  // default value
  const clientValue = client || 0;

  const onSubmitEvent = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      password,
      client,
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
    value: clientValue,
    required: true,
    onChange: (e) => {
      setClient(e.target.value);
    },
    options: clients.map((c, i) => {
      return { value: i, label: c.name };
    }),
  };

  const buttonConfig = {
    label: "Submit",
    type: "submit",
  };

  useEffect(() => {
    setClient(clientValue);
  }, []);

  return (
    <form action="." onSubmit={onSubmitEvent}>
      <Input {...inputConfig} />
      <PasswordInput {...inputPasswordConfig} />
      <Select {...selectConfig} />
      <Button {...buttonConfig} />
    </form>
  );
};

export default PasswordForm;

import Button from "../input/Button";
import Input from "../input/Input";
import Select from "../input/Select";
import PasswordInput from "../input/PasswordInput";

const PasswordForm = ({ onSubmit }) => {
  const onSubmitEvent = (e) => {
    console.log("submit!");
    onSubmit(e);
  };

  const inputConfig = {
    id: "name",
    label: "Name",
    placeholder: "e.g. google.com",
    required: true,
    onChange: (e) => {
      console.log("on change name");
    },
  };

  const inputPasswordConfig = {
    id: "password",
    label: "Password",
    required: true,
    onChange: (e) => {
      console.log("on change pw");
    },
  };

  const selectConfig = {
    id: "client",
    label: "Client",
    required: true,
    onChange: (e) => {
      console.log("on change client");
    },
    options: [
      {
        value: "A",
        label: "A",
      },
      {
        value: "B",
        label: "B",
      },

      {
        value: "C",
        label: "C",
      },
    ],
  };

  const buttonConfig = {
    label: "Submit",
    onClick: (e) => {
      console.log("on click");
    },
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

export default PasswordForm;

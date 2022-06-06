import React from "react";
import { render } from "@testing-library/react";
import PasswordList, { mapClientsToPasswords } from "./index";

let passwords;

const contextValue = {
  clients: [
    {
      id: "client",
      name: "Client",
      color: "red",
    },
  ],
};

beforeEach(() => {
  passwords = [
    {
      id: "1",
      name: "name",
      password: "pw",
      clientId: "client",
    },
  ];
  jest.spyOn(React, "useContext").mockImplementation(() => contextValue);
});

test("it attaches client data to the array of passwords", () => {
  expect(passwords[0].clientName).toBeUndefined();
  passwords = mapClientsToPasswords(passwords, contextValue.clients);
  expect(passwords[0].clientName).toBe("Client");
});

test("renders a tr for each password", () => {
  const { queryByText } = render(<PasswordList passwords={passwords} />);
  const node = queryByText("name");
  expect(node).not.toBeNull();
});

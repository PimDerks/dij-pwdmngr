import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordInput from "./";

afterEach(cleanup);

it("Updates the toggle button label after clicking it", () => {
  const { getByText } = render(<PasswordInput id="pw" label="password" />);
  expect(getByText(/Show/i)).toBeTruthy();
  userEvent.click(getByText(/Show/i));
  expect(getByText(/Hide/i)).toBeTruthy();
});

it("Updates the state on clicking the toggle button", () => {
  const setShowPassword = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation((showPassword) => [
    showPassword,
    setShowPassword,
  ]);

  const { getByText } = render(<PasswordInput id="pw" label="password" />);
  userEvent.click(getByText(/Show/i));
  expect(setShowPassword).toBeCalled();
});

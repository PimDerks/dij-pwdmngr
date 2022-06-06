import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PasswordListItem from "./index";

const pw = {
  id: "1",
  name: "name",
  password: "pw",
  clientId: "client-id",
  clientColor: "red",
  clientName: "Client Name",
};

const pwNoClient = {
  id: "1",
  name: "name",
  password: "pw",
  clientId: null,
  clientColor: null,
  clientName: null,
};

test("renders the element", () => {
  render(
    <table>
      <tbody>
        <PasswordListItem {...pw} />
      </tbody>
    </table>
  );
});

test("renders the element without client details when details are not available", () => {
  const { queryByText } = render(
    <table>
      <tbody>
        <PasswordListItem {...pwNoClient} />
      </tbody>
    </table>
  );
  const clientNode = queryByText(/Client/i);
  expect(clientNode).toBeNull();
});

test("it hides the password by default and reveals it after clicking the button", () => {
  const setIsShown = jest.fn();
  const handleClick = jest.spyOn(React, "useState");
  handleClick.mockImplementation((isShown) => [isShown, setIsShown]);

  const { getByText } = render(
    <table>
      <tbody>
        <PasswordListItem {...pw} />
      </tbody>
    </table>
  );
  userEvent.click(getByText(/Show/i));
  expect(setIsShown).toBeCalled();

  // restore mock for tests after this
  handleClick.mockRestore();
});

test("it triggers the onRemove prop when the remove button is clicked", () => {
  const onRemove = jest.fn();
  const options = { onRemove, ...pw };
  const { getByText } = render(
    <table>
      <tbody>
        <PasswordListItem {...options} />
      </tbody>
    </table>
  );
  userEvent.click(getByText(/Remove/i));
  expect(onRemove).toBeCalled();
});

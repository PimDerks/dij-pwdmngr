import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./index";

test("renders the element", () => {
  render(<Input id="test" label="Label" />);
});

test("triggers the onChange prop when the value changes", () => {
  const mockOnChange = jest.fn();
  const { getByLabelText } = render(
    <Input id="test" label="Label" onChange={mockOnChange} />
  );

  // trigger change
  const input = getByLabelText(/Label/i);
  userEvent.type(input, "input");
  expect(mockOnChange).toHaveBeenCalled();
});

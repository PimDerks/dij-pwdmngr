import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./index";

const options = [
  {
    label: "A",
    value: "A",
  },
  {
    label: "B",
    value: "B",
  },
];

test("renders the element", () => {
  render(<Select id="test" label="Label" options={options} />);
});

test("triggers the onChange prop when the value changes", () => {
  const mockOnChange = jest.fn();
  const { getByLabelText } = render(
    <Select id="test" label="Label" onChange={mockOnChange} options={options} />
  );

  // trigger change
  const select = getByLabelText(/Label/i);

  userEvent.selectOptions(select, ["B"]);
  expect(screen.getByRole("option", { name: "A" }).selected).toBe(false);
  expect(screen.getByRole("option", { name: "B" }).selected).toBe(true);
  expect(mockOnChange).toHaveBeenCalledTimes(1);

  userEvent.selectOptions(select, ["A"]);
  expect(screen.getByRole("option", { name: "B" }).selected).toBe(false);
  expect(screen.getByRole("option", { name: "A" }).selected).toBe(true);
  expect(mockOnChange).toHaveBeenCalledTimes(2);
});

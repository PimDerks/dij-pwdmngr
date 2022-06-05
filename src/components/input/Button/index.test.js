import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index";

test("renders the element", () => {
  render(<Button label="Label" />);
});

test("triggers the onClick prop when clicked", () => {
  const mockOnClick = jest.fn();
  render(<Button label="Label" onClick={mockOnClick} />);

  // trigger click
  userEvent.click(screen.getByText("Label"));
  expect(mockOnClick).toHaveBeenCalled();
});

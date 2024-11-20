import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello world! correctly", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello World!")).toBeInTheDocument();
  });

  test("renders 'It's good to see you!' if the button was NOT clicked", () => {
    render(<Greeting />);
    expect(screen.getByText("It's good to see you!")).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    expect(screen.getByText("Changed!")).toBeInTheDocument();
  });

  test("does not render 'It's good to see you!' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    expect(
      screen.queryByText("It's good to see you!", { exact: false })
    ).toBeNull();
  });
});

import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";

import { Contacts } from "../../../components";
import { changeInputValue, changeTextareaValue } from "./utils.ts";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Contact Component Tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Render Test", () => {
    const { container } = render(<Contacts />);

    expect(container).toMatchSnapshot();
  });

  test("renders the contact form correctly", () => {
    const { getByTestId, getByLabelText, getByText } = render(<Contacts />);

    expect(getByText("Contact Me")).toBeInTheDocument();

    expect(getByTestId("fullname")).toBeInTheDocument();
    expect(getByTestId("email")).toBeInTheDocument();
    expect(getByTestId("message")).toBeInTheDocument();

    expect(getByLabelText("Fullname")).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Message")).toBeInTheDocument();
  });

  test("submit form with valid data", async () => {
    const { getByTestId, getByText, container } = render(<Contacts />);

    changeInputValue(container, "fullname", "John Doe");
    changeInputValue(container, "email", "john@example.com");
    changeTextareaValue(container, "message", "Test message");

    fireEvent.submit(getByTestId("contact-form"));

    await waitFor(() => {
      expect(getByText("Contact Me")).toBeInTheDocument();
    });
  });
});

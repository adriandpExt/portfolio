import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";

import { Contacts } from "../../../components";
import { changeInputValue, changeTextareaValue } from "./utils.ts";
import { Provider } from "react-redux";
import store from "../../../redux/store.ts";

const screenContact = (
  <Provider store={store}>
    <Contacts />
  </Provider>
);

window.open = jest.fn();

describe("Contact Component Tests", () => {
  test("Render Test", () => {
    const { container } = render(screenContact);

    expect(container).toMatchSnapshot();
  });

  test("renders the contact form correctly", () => {
    const { getByTestId, getByLabelText, getByText } = render(screenContact);

    expect(getByText("Contact Me")).toBeInTheDocument();

    expect(getByTestId("fullname")).toBeInTheDocument();
    expect(getByTestId("email")).toBeInTheDocument();
    expect(getByTestId("message")).toBeInTheDocument();

    expect(getByLabelText("Fullname")).toBeInTheDocument();
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Message")).toBeInTheDocument();
  });

  test("submit form with valid data", async () => {
    const { getByTestId, getByText, container } = render(screenContact);

    changeInputValue(container, "fullname", "John Doe");
    changeInputValue(container, "email", "john@example.com");
    changeTextareaValue(container, "message", "Test message");

    fireEvent.submit(getByTestId("contact-form"));

    await waitFor(() => {
      expect(getByText("Contact Me")).toBeInTheDocument();
    });
  });

  test("linkedin open in new window", () => {
    const { getByTestId } = render(screenContact);

    fireEvent.click(getByTestId("linkedin"));

    expect(window.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/adrian-del-prado-285aa81b8",
      "_blank"
    );
  });

  test("facebook open in new window", () => {
    const { getByTestId } = render(screenContact);

    fireEvent.click(getByTestId("facebook"));

    expect(window.open).toHaveBeenCalledWith(
      "https://www.facebook.com/adrian.delprado.98",
      "_blank"
    );
  });
});

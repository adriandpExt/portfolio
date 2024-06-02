import "@testing-library/jest-dom";
import { Navbar } from "../../../components";
import { render, waitFor } from "@testing-library/react";
import { menuItems } from "../../../components/navbar/utils";

jest.mock("react-router-dom");

describe("navbar component test", () => {
  test("Navbar renders menu items correctly", () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });

  test("should render info", () => {
    const { getByTestId } = render(<Navbar />);
    waitFor(() => expect(getByTestId("email")).toBeInTheDocument());
    waitFor(() => expect(getByTestId("phoneNumber")).toBeInTheDocument());
  });

  test("should render list", () => {
    menuItems.map((item) => {
      waitFor(() => expect(item.listText).toBeInTheDocument());
    });
  });
});

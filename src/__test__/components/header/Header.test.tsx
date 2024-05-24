import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from "../../../components";

describe("header component test", () => {
  test("should render header", () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  test("should render name", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("fullname")).toBeInTheDocument();
  });

  test("should render profession", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("profession")).toBeInTheDocument();
  });
});

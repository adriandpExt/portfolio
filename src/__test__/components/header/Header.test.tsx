import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Header } from "../../../components";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

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

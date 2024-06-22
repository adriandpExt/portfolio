import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Home } from "../../../components";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("home component test", () => {
  test("should render home", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});

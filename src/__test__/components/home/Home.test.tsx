import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Home } from "../../../components";

describe("home component test", () => {
  test("should render home", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});

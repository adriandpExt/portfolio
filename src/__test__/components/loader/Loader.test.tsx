import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Loader } from "../../../components";

describe("Loader component test", () => {
  test("should render loader", () => {
    const { container } = render(<Loader />);

    expect(container).toMatchSnapshot();
  });
});

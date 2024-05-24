import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";

import { Footer } from "../../../components";

import store from "../../../redux/store";

jest.mock("react-router-dom");

const footerScreen = (
  <Provider store={store}>
    <Footer />
  </Provider>
);

window.open = jest.fn();

describe("Footer component test", () => {
  test("should render footer ", () => {
    const { container } = render(footerScreen);

    expect(container).toMatchSnapshot();
  });

  test("linkedin open in new window", () => {
    const { getByTestId } = render(footerScreen);

    fireEvent.click(getByTestId("linkedin"));

    expect(window.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/in/adrian-del-prado-285aa81b8",
      "_blank"
    );
  });

  test("facebook open in new window", () => {
    const { getByTestId } = render(footerScreen);

    fireEvent.click(getByTestId("facebook"));

    expect(window.open).toHaveBeenCalledWith(
      "https://www.facebook.com/adrian.delprado.98",
      "_blank"
    );
  });
});

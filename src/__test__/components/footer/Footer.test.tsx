import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";

import { Footer } from "../../../components";

import store from "../../../redux/store";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

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
    const linkedin = "https://www.linkedin.com/in/adrian-del-prado-285aa81b8";

    fireEvent.click(getByTestId("linkedin"));

    expect(window.open).toHaveBeenCalledWith(linkedin, "_blank");
  });

  test("facebook open in new window", () => {
    const { getByTestId } = render(footerScreen);
    const facebookUrl = "https://www.facebook.com/adrian.delprado.98";

    fireEvent.click(getByTestId("facebook"));

    expect(window.open).toHaveBeenCalledWith(facebookUrl, "_blank");
  });

  test("navigate to contact page", () => {
    const { getByTestId } = render(footerScreen);

    const contactIcon = getByTestId("contact");
    fireEvent.click(contactIcon);

    expect(mockedNavigate).toHaveBeenCalledWith("/portfolio/contact");
  });
});

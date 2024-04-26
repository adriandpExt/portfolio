import { ReactElement } from "react";

import { toggleLightTheme } from "../../components/utils";

import { Form } from "./component";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = (props: ContactProps): ReactElement => {
  const { isDarkMode } = props;

  return (
    <section
      id="contact"
      className={`${toggleLightTheme(isDarkMode)} py-4 px-8 h-full`}
    >
      <h5 className="text-center font-serif font-extrabold text-3xl">
        WORK EXPERIENCE
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-10">
        <Form />

        <div>test</div>
      </div>
    </section>
  );
};

export default Contact;

import { ReactElement } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

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
        MESSAGE ME
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mt-10">
        <Form />

        <div className="text-3xl space-y-10">
          <p>
            <FaPhoneAlt size={50} />
            +63 926 391 2007
          </p>
          <p>
            <MdOutlineMailOutline size={50} /> adriandp52@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

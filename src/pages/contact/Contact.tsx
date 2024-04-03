import { ReactElement } from "react";

import { toggleDarkTheme } from "../../components/utils";

import { ContactCard } from "./component";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = (props: ContactProps): ReactElement => {
  const { isDarkMode } = props;

  return (
    <section
      id="contact"
      className={`${toggleDarkTheme(isDarkMode)} py-4 px-8 h-screen`}
    >
      <h1 className="text-3xl text-center mt-6">Contact Us</h1>

      <div className="grid grid-cols-2 gap-4 mt-32">
        <ContactCard content="+63 926 391 2007" iconName={"ic_mobile"} />
        <ContactCard
          islink
          link="https://www.linkedin.com/in/adrian-del-prado-285aa81b8/"
          content="adrian-del-prado-285aa81b8"
          iconName={"ic_linkedin"}
        />
        <ContactCard
          islink
          link="https://github.com/adriandpExt"
          content="adriandpExt"
          iconName={"ic_github"}
        />
        <ContactCard content="adriandp52@gmail.com" iconName={"ic_gmail"} />
      </div>
    </section>
  );
};

export default Contact;

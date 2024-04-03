import { ReactElement } from "react";

import { IconName, SvgIcons } from "../../../../components";

interface ContactCardProps {
  content: string;
  iconName: IconName;
  islink?: boolean;
  link?: string;
}

export const ContactCard = (props: ContactCardProps): ReactElement => {
  const { content, iconName, link, islink = true } = props;

  return (
    <div className="block text-center gap-4">
      <SvgIcons name={iconName} />
      {islink ? (
        <a href={link} target="_blank">
          {content}
        </a>
      ) : (
        <p className="text-2xl">{content}</p>
      )}
    </div>
  );
};

export default ContactCard;

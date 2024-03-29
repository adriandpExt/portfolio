import type { ReactElement } from "react";
import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";

import MuiSvgIcon from "@mui/material/SvgIcon";

export type IconName =
  | "ic_gmail"
  | "ic_mobile"
  | "ic_facebook"
  | "ic_github"
  | "ic_linkedin";

type SvgIconProps = {
  name: IconName;
} & MuiSvgIconProps;

export const SvgIcons = (props: SvgIconProps): ReactElement => {
  const { name, ...rest } = props;

  return (
    <MuiSvgIcon {...rest} sx={{ width: 50, height: 50 }}>
      <svg aria-hidden="true">
        <use href={`#icon-${name}`} />
      </svg>
    </MuiSvgIcon>
  );
};

export default SvgIcons;

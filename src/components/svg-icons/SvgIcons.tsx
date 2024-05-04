import type { ReactElement } from "react";
import type { SvgIconProps as MuiSvgIconProps } from "@mui/material/SvgIcon";

import MuiSvgIcon from "@mui/material/SvgIcon";
import { IconName } from "./utils";

type SvgIconProps = {
  name: IconName;
  width?: number;
  height?: number;
} & MuiSvgIconProps;

export const SvgIcons = (props: SvgIconProps): ReactElement => {
  const { name, width = 50, height = 50, ...rest } = props;

  return (
    <MuiSvgIcon {...rest} sx={{ width: { width }, height: { height } }}>
      <svg aria-hidden="true">
        <use href={`#icon-${name}`} />
      </svg>
    </MuiSvgIcon>
  );
};

export default SvgIcons;

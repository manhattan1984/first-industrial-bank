// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon16Icon(props: Icon16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      focusable={"false"}
      viewBox={"0 0 51.91 40.29"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M51.81 22.48L47.14 8 31.8 13h7.82a3.14 3.14 0 013.14 3.14v11.42l7.72-2.49a2.06 2.06 0 001.33-2.59M45.65 3.4l-.64-2A2.06 2.06 0 0042.42.1L6.68 11.63A2.05 2.05 0 005.35 13H16z"
        }
      ></path>

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M39.62 14.05H2.06A2.06 2.06 0 000 16.11v22.12a2.06 2.06 0 002.06 2.06h37.56a2.06 2.06 0 002.06-2.06V16.11a2.06 2.06 0 00-2.06-2.06zM12.86 35h6.62v-2.23h-6.62zm-9.4-8a1 1 0 011-1h4.7a1 1 0 01.9 1v3a1 1 0 01-1 1H4.47a1 1 0 01-1-1zm.05 8h6.62v-2.23H3.51zm28 0h6.62v-2.23h-6.58zm-2.73-2.26V35H22.2v-2.23h6.62z"
        }
      ></path>
    </svg>
  );
}

export default Icon16Icon;
/* prettier-ignore-end */

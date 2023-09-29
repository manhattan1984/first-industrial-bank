// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon19Icon(props: Icon19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"-4.5 0 50 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M36 3.7V1.8C32.9.7 27.3 0 20.9 0S8.9.7 5.8 1.8v1.9L0 12.9c0 3.2 2.6 5.8 5.7 5.8 2.1 0 4-1.2 5.1-3 1.5 2.8 5 3.8 7.8 2.3 1-.5 1.8-1.3 2.3-2.3 1.5 2.8 5 3.8 7.8 2.3 1-.5 1.8-1.3 2.3-2.3 1.5 2.8 5 3.8 7.8 2.3 1.8-1 3-2.9 3-5.1L36 3.7M18.4 30h-.8v1.9h.9c.5 0 .9-.3.9-.8v-.2c.1-.5-.3-.9-.7-.9h-.3z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M37.7 35V20.9c-.6.1-1.1.1-1.7.1-.5 0-1.1 0-1.6-.1v4.4H7.1v-4.4l-1.4.1c-.6 0-1.1 0-1.6-.1V35l-2.8 2v4h39.2v-4l-2.8-2zm-25.3.2c-2 0-2.9-1.2-2.9-3.1s.9-3.1 2.9-3.1 2.8 1.4 2.8 3.1c-.1 1.7-1 3.1-2.8 3.1zm6.2-2.4h-1v2.3h-1.3v-6h2.3c1.4 0 2 .7 2 1.9 0 1-.7 1.8-1.7 1.9-.1-.1-.2-.1-.3-.1zm7.1 2.3h-4.2v-6h4.2v.9h-2.8v1.5h2.4v.8h-2.4v1.8h3l-.2 1zm6.2 0h-1.2l-2-3.2-.6-1v4.2h-1.2v-6h1.3L30 32l.8 1.3v-4.1H32l-.1 5.9z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={
          "M12.4 29.9c-1.2 0-1.5 1.1-1.5 2.3s.4 2.2 1.5 2.2 1.4-.9 1.4-2.2-.3-2.3-1.4-2.3z"
        }
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */

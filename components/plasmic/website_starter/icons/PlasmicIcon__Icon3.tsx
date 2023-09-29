// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon3Icon(props: Icon3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M12.75 3.75H12V12h8.25v-.75a7.5 7.5 0 00-7.5-7.5zm.75 6.75V5.296a6.003 6.003 0 015.204 5.204H13.5zm-9 3c0-3.06 2.29-5.585 5.25-5.954v6.704h6.704A6.001 6.001 0 014.5 13.5zm6-7.5a7.5 7.5 0 107.5 7.5v-.75h-6.75V6h-.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon3Icon;
/* prettier-ignore-end */

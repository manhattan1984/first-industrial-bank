// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon12Icon(props: Icon12IconProps) {
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
          "M3.75 5.25L3 6v12l.75.75h16.5L21 18V6l-.75-.75H3.75zm.75 2.446v9.554h15V7.695L12 14.514 4.5 7.696zm13.81-.946H5.69L12 12.486l6.31-5.736z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon12Icon;
/* prettier-ignore-end */

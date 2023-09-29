// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon17Icon(props: Icon17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      focusable={"false"}
      viewBox={"0 0 42.05 38.82"}
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
          "M0 20.65h7.13v18.17h9.26V23.2h9.27v15.62h9.26V20.65h7.13l-7.13-7V3.86h-6.19v3.71L21.02 0 0 20.65z"
        }
      ></path>
    </svg>
  );
}

export default Icon17Icon;
/* prettier-ignore-end */

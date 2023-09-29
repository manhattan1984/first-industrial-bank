// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon18Icon(props: Icon18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      focusable={"false"}
      viewBox={"0 0 49.17 25.03"}
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
          "M49.14 20.13c-1.19.44-5 .23-5 .23l-2.94.06a6 6 0 01-11.61.07H17.27a6 6 0 01-11.58 0H.12C-.16 19.56 0 10 1.05 8.61 2.26 7 8.26.51 8.26.51 9 0 22.47-.31 25.79.4c1.6.34 10 6.94 10 6.94s10.26 3 11.46 4.17c2.3 2.3 1.85 8.62 1.85 8.62m-37.62-4.92A3.84 3.84 0 1015.32 19a3.84 3.84 0 00-3.84-3.84m23.94 0A3.84 3.84 0 1039.26 19a3.84 3.84 0 00-3.84-3.83"
        }
      ></path>
    </svg>
  );
}

export default Icon18Icon;
/* prettier-ignore-end */

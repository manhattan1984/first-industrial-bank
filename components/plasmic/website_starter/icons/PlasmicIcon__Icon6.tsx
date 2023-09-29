// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon6Icon(props: Icon6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"currentColor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"none"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={
          "M8 11A5 5 0 108 1a5 5 0 000 10zm6.643 4.696a6.745 6.745 0 00-1.62-2.673C11.772 11.76 10.013 11 8 11c-4 0-7 3-7 7v5h10m1-4.176L16.19 22 23 13"
        }
      ></path>
    </svg>
  );
}

export default Icon6Icon;
/* prettier-ignore-end */

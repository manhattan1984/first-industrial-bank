// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon4Icon(props: Icon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      version={"1.1"}
      fill={"currentColor"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M384 85.333l85.333 85.334v256H42.667V85.333H384zM373.333 128h-288v256h341.334V181.333L373.333 128zM192 320v32h-64v-32h64zm192 0v32H234.667v-32H384zm-192-64v32h-64v-32h64zm192 0v32H234.667v-32H384zm-192-64v32h-64v-32h64zm192 0v32H234.667v-32H384z"
        }
        fill={"currentColor"}
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Icon4Icon;
/* prettier-ignore-end */

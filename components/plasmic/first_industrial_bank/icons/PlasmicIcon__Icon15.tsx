// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon15IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon15Icon(props: Icon15IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      focusable={"false"}
      viewBox={"0 0 35.48 41.05"}
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
          "M0 25a14.73 14.73 0 0114.85-14.82 17 17 0 018.65 2.25c3-3.75 8.73-2.81 8.73-2.81L29 16.5a22.06 22.06 0 006.5 4.34v7.1c-3.53 3.35-6.31 6.73-9.57 8.33L26.4 41h-2.28l-2.29-3.34a26.83 26.83 0 01-6 .61 18.23 18.23 0 01-5.13-.73L8.34 41H6.06l.55-5.2C2.57 33.3 0 29.29 0 25M14.83 7.49a17.56 17.56 0 015.28.79 5.74 5.74 0 00.56-2.45A5.85 5.85 0 009 5.84a5.76 5.76 0 00.61 2.57 15.28 15.28 0 015.24-.91"
        }
      ></path>
    </svg>
  );
}

export default Icon15Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon21Icon(props: Icon21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      focusable={"false"}
      viewBox={"0 0 28 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <defs>
        <path
          id={"qPj_mTv8wOCja"}
          d={
            "M544.476 978.877v4.321c0 2.318-3.812 4.195-8.516 4.195-4.703 0-8.007-1.877-8.007-4.195v-4.148l8.029 3.206 8.494-3.379zm-8.46 2.169l-9.25-3.612v3.784a.97.97 0 01.47.83l.542 3.7h-3.034l.542-3.7c0-.351.188-.655.464-.827v-4.185l-3.773-1.474L536 970.224l14.023 5.338-14.007 5.484z"
          }
        ></path>
      </defs>

      <use
        fill={"currentColor"}
        xlinkHref={"#qPj_mTv8wOCja"}
        fillRule={"evenodd"}
        transform={"translate(-522 -970)"}
      ></use>
    </svg>
  );
}

export default Icon21Icon;
/* prettier-ignore-end */

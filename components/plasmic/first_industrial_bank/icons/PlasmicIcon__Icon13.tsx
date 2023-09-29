// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon13Icon(props: Icon13IconProps) {
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
        d={
          "M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 00.402-.432c.099-.206.099-.446.099-.926v-2.817c0-.404 0-.606-.067-.779a.999.999 0 00-.277-.396c-.14-.122-.33-.191-.71-.329l-3.206-1.166c-.441-.16-.662-.24-.872-.227a1 1 0 00-.513.182c-.171.121-.292.322-.534.725L14 16a12.1 12.1 0 01-6-6l1.369-.821c.402-.242.604-.363.725-.534a1 1 0 00.182-.513c.014-.21-.066-.43-.227-.872L8.883 4.053c-.138-.38-.207-.569-.329-.709a1 1 0 00-.396-.278C7.985 3 7.783 3 7.379 3H4.562c-.48 0-.72 0-.926.1a1.06 1.06 0 00-.432.401c-.114.198-.13.416-.162.85C3.014 4.732 3 5.115 3 5.5z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Icon13Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: afW6VKi63uhPvxynGzSkb1
// Component: XXScvUgQS8Qh

"use client";

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: tXjcP5o2LFJ9/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: PCEFu9szMa56/codeComponent

import { useScreenVariants as useScreenVariantsm7DfCoXpX3H } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: _M7DfCOXpX3h/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_first_industrial_bank.module.css"; // plasmic-import: afW6VKi63uhPvxynGzSkb1/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: XXScvUgQS8Qh/css

import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: doN94wHuWag9/icon
import Icon11Icon from "./icons/PlasmicIcon__Icon11"; // plasmic-import: 3d3-BaIG3MnT/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: yCyxqbAHHoKJ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: dIat2o990mPz/icon

createPlasmicElementProxy;

export type PlasmicHeader__VariantMembers = {
  menuOpen: "menuOpen";
  signedIn: "signedIn";
};
export type PlasmicHeader__VariantsArgs = {
  menuOpen?: SingleBooleanChoiceArg<"menuOpen">;
  signedIn?: SingleBooleanChoiceArg<"signedIn">;
};
type VariantPropType = keyof PlasmicHeader__VariantsArgs;
export const PlasmicHeader__VariantProps = new Array<VariantPropType>(
  "menuOpen",
  "signedIn"
);

export type PlasmicHeader__ArgsType = {
  dashboardUrl?: string;
  signOut?: (event: any) => void;
};
type ArgPropType = keyof PlasmicHeader__ArgsType;
export const PlasmicHeader__ArgProps = new Array<ArgPropType>(
  "dashboardUrl",
  "signOut"
);

export type PlasmicHeader__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHeaderProps {
  dashboardUrl?: string;
  signOut?: (event: any) => void;
  menuOpen?: SingleBooleanChoiceArg<"menuOpen">;
  signedIn?: SingleBooleanChoiceArg<"signedIn">;
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHeader__RenderFunc(props: {
  variants: PlasmicHeader__VariantsArgs;
  args: PlasmicHeader__ArgsType;
  overrides: PlasmicHeader__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          dashboardUrl: "/signin"
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "showMenu",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "menuOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.menuOpen
      },
      {
        path: "signedIn",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.signedIn
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariantsm7DfCoXpX3H()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootmenuOpen]: hasVariant($state, "menuOpen", "menuOpen"),
          [sty.rootmenuOpen_signedIn]:
            hasVariant($state, "signedIn", "signedIn") &&
            hasVariant($state, "menuOpen", "menuOpen"),
          [sty.rootsignedIn]: hasVariant($state, "signedIn", "signedIn")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__gHGgU, {
          [sty.freeBoxmenuOpen__gHGgUTeSwf]: hasVariant(
            $state,
            "menuOpen",
            "menuOpen"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__gjTm, {
            [sty.freeBoxmenuOpen_signedIn__gjTmTeSwfDSOz3]:
              hasVariant($state, "signedIn", "signedIn") &&
              hasVariant($state, "menuOpen", "menuOpen"),
            [sty.freeBoxsignedIn__gjTmdSOz3]: hasVariant(
              $state,
              "signedIn",
              "signedIn"
            )
          })}
        >
          <p.PlasmicLink
            data-plasmic-name={"link"}
            data-plasmic-override={overrides.link}
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link
            )}
            component={Link}
            href={`/`}
            platform={"nextjs"}
          >
            {"First Industrial Bank"}
          </p.PlasmicLink>
          <div
            className={classNames(projectcss.all, sty.freeBox__bjGv1, {
              [sty.freeBoxmenuOpen__bjGv1TeSwf]: hasVariant(
                $state,
                "menuOpen",
                "menuOpen"
              )
            })}
          >
            {(
              hasVariant($state, "menuOpen", "menuOpen") &&
              hasVariant(globalVariants, "mobile", "mobileOnly")
                ? true
                : hasVariant(globalVariants, "mobile", "mobileOnly")
                ? (() => {
                    try {
                      return !$state.showMenu;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })()
                : true
            ) ? (
              <Icon10Icon
                className={classNames(projectcss.all, sty.svg__on8OP, {
                  [sty.svgmenuOpen__on8OPTeSwf]: hasVariant(
                    $state,
                    "menuOpen",
                    "menuOpen"
                  )
                })}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateMenuOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: "menuOpen",
                          operation: 2,
                          value: "menuOpen"
                        };
                        return (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }

                          const oldValue = p.get($state, vgroup);
                          p.set($state, vgroup, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateMenuOpen"] === "object" &&
                    typeof $steps["updateMenuOpen"].then === "function"
                  ) {
                    $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                  }
                }}
                role={"img"}
              />
            ) : null}
            {(
              hasVariant($state, "menuOpen", "menuOpen") &&
              hasVariant(globalVariants, "mobile", "mobileOnly")
                ? true
                : hasVariant(globalVariants, "mobile", "mobileOnly")
                ? (() => {
                    try {
                      return $state.showMenu;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })()
                : false
            ) ? (
              <Icon11Icon
                className={classNames(projectcss.all, sty.svg__ieHuD, {
                  [sty.svgmenuOpen__ieHuDTeSwf]: hasVariant(
                    $state,
                    "menuOpen",
                    "menuOpen"
                  )
                })}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateMenuOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: "menuOpen",
                          operation: 2,
                          value: "menuOpen"
                        };
                        return (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }

                          const oldValue = p.get($state, vgroup);
                          p.set($state, vgroup, !oldValue);
                          return !oldValue;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateMenuOpen"] === "object" &&
                    typeof $steps["updateMenuOpen"].then === "function"
                  ) {
                    $steps["updateMenuOpen"] = await $steps["updateMenuOpen"];
                  }
                }}
                role={"img"}
              />
            ) : null}
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.freeBox__eH0Fo, {
            [sty.freeBoxmenuOpen__eH0FoTeSwf]: hasVariant(
              $state,
              "menuOpen",
              "menuOpen"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uX723, {
              [sty.freeBoxmenuOpen__uX723TeSwf]: hasVariant(
                $state,
                "menuOpen",
                "menuOpen"
              )
            })}
          >
            <Button
              className={classNames("__wab_instance", sty.button__fwMbe)}
              color={"clear"}
              link={`/`}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__weuyY
                )}
              >
                {"Home"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__latLi, {
                [sty.buttonmenuOpen__latLiTeSwf]: hasVariant(
                  $state,
                  "menuOpen",
                  "menuOpen"
                ),
                [sty.buttonsignedIn__latLIdSOz3]: hasVariant(
                  $state,
                  "signedIn",
                  "signedIn"
                )
              })}
              color={"clear"}
              link={`/contact`}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kGug8
                )}
              >
                {"Contact"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__ruCw9)}
              color={"clear"}
              link={`/about`}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__i7Mpj
                )}
              >
                {"About"}
              </div>
            </Button>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__qm3U3, {
              [sty.freeBoxsignedIn__qm3U3DSOz3]: hasVariant(
                $state,
                "signedIn",
                "signedIn"
              )
            })}
          >
            <Button
              className={classNames("__wab_instance", sty.button__uqJl1, {
                [sty.buttonsignedIn__uqJl1DSOz3]: hasVariant(
                  $state,
                  "signedIn",
                  "signedIn"
                )
              })}
              color={"clear"}
              link={"/signin"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___1Hps,
                  {
                    [sty.textsignedIn___1HpsDSOz3]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  }
                )}
              >
                {hasVariant($state, "signedIn", "signedIn")
                  ? "Dashboard"
                  : "Sign In"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__uxfXy, {
                [sty.buttonsignedIn__uxfXydSOz3]: hasVariant(
                  $state,
                  "signedIn",
                  "signedIn"
                )
              })}
              color={"white"}
              ghost={true}
              link={hasVariant($state, "signedIn", "signedIn") ? "" : "/signup"}
              onClick={async event => {
                const $steps = {};
              }}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kultU,
                  {
                    [sty.textsignedIn__kultUdSOz3]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  }
                )}
              >
                {hasVariant($state, "signedIn", "signedIn")
                  ? "Sign Out"
                  : "Sign Up"}
              </div>
            </Button>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ohrPs, {
              [sty.freeBoxsignedIn__ohrPsdSOz3]: hasVariant(
                $state,
                "signedIn",
                "signedIn"
              )
            })}
          >
            <Button
              className={classNames("__wab_instance", sty.button__sZenC, {
                [sty.buttonsignedIn__sZenCdSOz3]: hasVariant(
                  $state,
                  "signedIn",
                  "signedIn"
                )
              })}
              color={"clear"}
              link={args.dashboardUrl}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iGfDu,
                  {
                    [sty.textsignedIn__iGfDUdSOz3]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  }
                )}
              >
                {hasVariant($state, "signedIn", "signedIn")
                  ? "Dashboard"
                  : "Dashboard"}
              </div>
            </Button>
            <Button
              className={classNames("__wab_instance", sty.button__hYiI2, {
                [sty.buttonsignedIn__hYiI2DSOz3]: hasVariant(
                  $state,
                  "signedIn",
                  "signedIn"
                )
              })}
              color={"white"}
              ghost={
                hasVariant($state, "signedIn", "signedIn") ? true : undefined
              }
              link={hasVariant($state, "signedIn", "signedIn") ? "" : "/signup"}
              onClick={args.signOut}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__kcmD,
                  {
                    [sty.textsignedIn__kcmDdSOz3]: hasVariant(
                      $state,
                      "signedIn",
                      "signedIn"
                    )
                  }
                )}
              >
                {hasVariant($state, "signedIn", "signedIn")
                  ? "Sign Out"
                  : "Sign Out"}
              </div>
            </Button>
          </p.Stack>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader__VariantsArgs;
    args?: PlasmicHeader__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHeader__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHeader__ArgProps,
          internalVariantPropNames: PlasmicHeader__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */

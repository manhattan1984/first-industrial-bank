// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: afW6VKi63uhPvxynGzSkb1
// Component: SsNqfTXsbW_l

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
import Features from "../../Features"; // plasmic-import: cjM9J0kp_zQY/component

import { useScreenVariants as useScreenVariantsm7DfCoXpX3H } from "./PlasmicGlobalVariant__Mobile"; // plasmic-import: _M7DfCOXpX3h/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_first_industrial_bank.module.css"; // plasmic-import: afW6VKi63uhPvxynGzSkb1/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: SsNqfTXsbW_l/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: yCyxqbAHHoKJ/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: dIat2o990mPz/icon
import Icon14Icon from "./icons/PlasmicIcon__Icon14"; // plasmic-import: 4e5Ny4sp--8i/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: 9bpY84fvLnfK/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: AVLuChxJURnl/icon
import Icon19Icon from "./icons/PlasmicIcon__Icon19"; // plasmic-import: 5EgXyzfZsjL2/icon
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: 1OCfuUCiVE5i/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20"; // plasmic-import: lAtVJ272mocC/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: XrzkzKkfmDub/icon
import Icon21Icon from "./icons/PlasmicIcon__Icon21"; // plasmic-import: vEUHatqH1MB5/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  h6?: p.Flex<"h6">;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    mobile: useScreenVariantsm7DfCoXpX3H()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <section className={classNames(projectcss.all, sty.section__hMrnc)}>
            <div className={classNames(projectcss.all, sty.freeBox__kIwfn)}>
              <div className={classNames(projectcss.all, sty.freeBox__i9P5D)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x6XbJ
                  )}
                >
                  {"Welcome to FIRST INDUSTRIAL BANK"}
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__y01Bb)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__uSLx)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mMTvG
                      )}
                    >
                      {"Invest in Your Future with Confidence"}
                    </div>
                  </div>
                </div>
              </div>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uzXjR)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3J5Ha
                  )}
                >
                  {
                    "Discover endless possibilities for your financial growth with First Industrial Bank. We specialize in guiding you towards intelligent investment choices that illuminate your path to prosperity. With our expert insights and innovative strategies, your financial dreams are within reach."
                  }
                </div>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___9WcDn)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__vrHFf)}
                    color={"blue"}
                    link={"/signup"}
                  >
                    {"Get Started "}
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__lalDh)}
                    color={"blue"}
                    ghost={true}
                    link={`/about`}
                  >
                    {"Learn More"}
                  </Button>
                </p.Stack>
              </p.Stack>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__w7RJ)}>
            <div className={classNames(projectcss.all, sty.freeBox___898Rf)}>
              <Features
                className={classNames("__wab_instance", sty.features__mnWt0)}
              />

              <Features
                className={classNames("__wab_instance", sty.features___6Xp53)}
                slot={"Auto Loans"}
              >
                <Icon18Icon
                  className={classNames(projectcss.all, sty.svg__cs99U)}
                  role={"img"}
                />
              </Features>
              <Features
                className={classNames("__wab_instance", sty.features__rpwNj)}
                slot={"Savings & CDs"}
              >
                <Icon15Icon
                  className={classNames(projectcss.all, sty.svg__fea1Q)}
                  role={"img"}
                />
              </Features>
              <Features
                className={classNames("__wab_instance", sty.features__wgA1)}
                slot={"Small Business"}
              >
                <Icon19Icon
                  className={classNames(projectcss.all, sty.svg__vv4Mo)}
                  role={"img"}
                />
              </Features>
              <Features
                className={classNames("__wab_instance", sty.features___04Cfp)}
                slot={"Credit Cards"}
              >
                <Icon16Icon
                  className={classNames(projectcss.all, sty.svg___5KxHb)}
                  role={"img"}
                />
              </Features>
              <Features
                className={classNames("__wab_instance", sty.features__kb2Y)}
                slot={"Investing"}
              >
                <Icon20Icon
                  className={classNames(projectcss.all, sty.svg__f9WPy)}
                  role={"img"}
                />
              </Features>
              <Features
                className={classNames("__wab_instance", sty.features__h0ObR)}
                slot={"Home Loans"}
              >
                <Icon17Icon
                  className={classNames(projectcss.all, sty.svg__lFtNt)}
                  role={"img"}
                />
              </Features>
              <Features
                className={classNames("__wab_instance", sty.features__mEsTg)}
                slot={"Student Banking"}
              >
                <Icon21Icon
                  className={classNames(projectcss.all, sty.svg__mFt8F)}
                  role={"img"}
                />
              </Features>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__qF44Q)}>
            <h3
              data-plasmic-name={"h3"}
              data-plasmic-override={overrides.h3}
              className={classNames(
                projectcss.all,
                projectcss.h3,
                projectcss.__wab_text,
                sty.h3
              )}
            >
              {"Financial guidance for every stage of life."}
            </h3>
            <div className={classNames(projectcss.all, sty.freeBox__un3FP)}>
              <div className={classNames(projectcss.all, sty.freeBox__fsEit)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__yPl4)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  loading={"lazy"}
                  src={
                    "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-bmh-module-default-education-ent_edu_bac_5806145_608_en_gc_01-CSX2861d8b8.jpg"
                  }
                />

                <div className={classNames(projectcss.all, sty.freeBox__nwfkQ)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__oIgSf)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img___8Ff4)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={
                        "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-icons-ent_edu_bac_5449395_icon_gc_a-CSXc8677456.svg"
                      }
                    />
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a5Yl7
                    )}
                  >
                    {"Pay off credit card debts faster"}
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rWiLe
                )}
              >
                {"Explore more topics and build your financial know\u2011how."}
              </div>
              <Button
                className={classNames("__wab_instance", sty.button___7LnKk)}
                color={"blue"}
                shape={"sharp"}
              >
                {"Visit Better Money Habits"}
              </Button>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__aGw9I)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__xY4M
              )}
            >
              {"Your news and information"}
            </h4>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__nMaG
              )}
            >
              {"Level up your account security"}
            </h4>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zqyj3
              )}
            >
              {
                "Watch your security meter rise as you take action against fraud. See it in the Security Center in Mobile and Online Banking."
              }
            </div>
            <Button
              className={classNames("__wab_instance", sty.button__hyhIa)}
              color={"red"}
              shape={"sharp"}
            >
              {"Check your level"}
            </Button>
            <div className={classNames(projectcss.all, sty.freeBox__jj36V)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__pkzum)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={
                  "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-news-life-services-yni_sec_phone_4657392_e-CSX8c7d2691.webp"
                }
              />
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__hp21)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__tDd1G
              )}
            >
              {"Secure, convenient banking with our Mobile app\n"}
            </h4>
            <Button
              className={classNames("__wab_instance", sty.button___0Rf6O)}
              color={"white"}
              ghost={true}
              shape={"sharp"}
            >
              {"Explore our app"}
            </Button>
            <div className={classNames(projectcss.all, sty.freeBox__jn5IO)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__qIr4E)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={
                  "https://www1.bac-assets.com/homepage/spa-assets/images/assets-images-site-homepage-news-life-services-yni_sec_phone_4657392_e-CSX8c7d2691.webp"
                }
              />
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__u7Uvv)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__jQmAj
              )}
            >
              <React.Fragment>
                <React.Fragment>{""}</React.Fragment>
                {
                  <h6
                    data-plasmic-name={"h6"}
                    data-plasmic-override={overrides.h6}
                    className={classNames(
                      projectcss.all,
                      projectcss.h6,
                      projectcss.__wab_text,
                      sty.h6
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#0073CF" }}
                      >
                        {"Online Banking Service Agreement"}
                      </span>
                    </React.Fragment>
                  </h6>
                }
                <React.Fragment>
                  {
                    '\nInvesting in securities involves risks, and there is always the potential of losing money when you invest in securities. You should review any planned financial transactions that may have tax or legal implications with your personal tax or legal advisor.\n\nSecurities products are provided by Merrill Lynch, Pierce, Fenner & Smith Incorporated (also referred to as "MLPF&S", or "Merrill"), a registered broker-dealer, registered investment adviser, '
                  }
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#0073CF" }}
                >
                  {"Member SIPC"}
                </span>
                <React.Fragment>
                  {
                    " layer, and a wholly-owned subsidiary of Bank of America Corporation. MLPF&S makes available certain investment products sponsored, managed, distributed or provided by companies that are affiliates of Bank of America Corporation.\n\nBank of America Private Bank is a division of Bank of America, N.A., Member FDIC and a wholly owned subsidiary of Bank of America Corporation. Trust and fiduciary services are provided by Bank of America, N.A. and U.S. Trust Company of Delaware. Both are indirect subsidiaries of Bank of America Corporation.\n\nInsurance Products are offered through Merrill Lynch Life Agency Inc. (MLLA) and/or Banc of America Insurance Services, Inc., both of which are licensed insurance agencies and wholly-owned subsidiaries of Bank of America Corporation.\n\nBanking, credit card, automobile loans, mortgage and home equity products are provided by Bank of America, N.A. and affiliated banks, Members FDIC and wholly owned subsidiaries of Bank of America Corporation. Credit and collateral are subject to approval. Terms and conditions apply. This is not a commitment to lend. Programs, rates, terms and conditions are subject to change without notice.\n\nInvestment and insurance products:"
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___1ObbS)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__heGsg
                )}
              >
                {"Are Not FDIC Insured"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__cnQk)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wDqaN
                )}
              >
                {"Are Not Bank Guaranteed"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__lq9C4)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rbTsL
                )}
              >
                {"May Lose Value"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__rIWp5)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___6FQW
                )}
              >
                {"Are Not Deposits"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__tBx8T)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sf5Mt
                )}
              >
                {"Are Not Insured by Any Federal Government Agency"}
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___4Phk2)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nc0M
                )}
              >
                {"Are Not a Condition to Any Banking Service or Activity"}
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "h6"],
  h3: ["h3"],
  h6: ["h6"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  h6: "h6";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    h6: makeNodeComponent("h6"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

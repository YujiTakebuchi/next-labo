/*===================================*/
// FixedSlider COMP
// 固定スクロールアニメーションのスライド管理用コンポーネント
/*===================================*/
import styles from "./FixedPresentation.module.scss";
import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  attachScrollEventListener,
  detachScrollEventListener,
} from "../../../features/util";
import FixedSlide from "../molecules/FixedSlide";
import { css } from "@emotion/react";
import { responsiveCSS } from "../../../features/emotionUtil";
import { JsxElement } from "typescript";

type FixedPresentationProps = {
  slides: Array<JSX.Element>;
  isInFixedArea: boolean;
};

type FixedSliderControllerProps = {
  isInFixedArea: boolean;
  scrollDir: { current: number };
  slideStatus: { phase: number; slide: number };
  setSlideStatus: Function;
  slideLength: number;
};

const getScrollDirection: (
  currentScrlAmnt: number,
  prevScrlAmnt: number
) => number = (currentScrlAmnt: number, prevScrlAmnt: number) => {
  return Math.sign(currentScrlAmnt - prevScrlAmnt);
};

/**
 * 固定スクロールアニメーションのスライド管理用コンポーネント
 * @param {FixedPresentationProps} props
 * @return {import("react").ReactElement} 固定スクロールアニメーションのスライド管理用コンポーネント
 */
export default function FixedPresentation(
  props: FixedPresentationProps
): JSX.Element {
  const [slideStatus, setSlideStatus] = useState({ phase: 0, slide: 0 });
  const slideRef = useRef(null);
  const scrollDir = useRef(1);

  return (
    <div className={`${styles["fixed-presentation"]}`} ref={slideRef}>
      <div className={`${styles["fixed-presentation__body"]}`}>
        {props.slides.map((s: ReactElement, idx) => {
          const stateElement = cloneElement(
            s ?? <React.Fragment key={idx}></React.Fragment>,
            {
              phase: slideStatus.phase,
              isDisplayed: idx === slideStatus.slide,
              isInFixedArea: props.isInFixedArea,
            }
          );
          return (
            <FixedSlide key={idx} isDisplayed={idx === slideStatus.slide}>
              {stateElement}
            </FixedSlide>
          );
        })}
      </div>
      {/* <nav className={`${styles["fixed-slider__nav"]}`}>
        {slides.map((s, idx) => {
          return (
            <button
              key={idx}
              className={`${slideStatus.slide === idx ? styles["selected"] : ""}`}
              onClick={() => handleNavClick(idx)}
            ></button>
          );
        })}
      </nav> */}
      <div className={`${styles["fixed-presentation__controller"]}`}>
        <FixedSliderController
          isInFixedArea={props.isInFixedArea}
          scrollDir={scrollDir}
          slideStatus={slideStatus}
          setSlideStatus={setSlideStatus}
          slideLength={props.slides.length}
        />
      </div>
    </div>
  );
}

const FixedSliderController: (
  props: FixedSliderControllerProps
) => JSX.Element = (props: FixedSliderControllerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    attachScrollEventListener(ref.current, handleControllerScroll, {
      passive: false,
    });
    return () => {
      detachScrollEventListener(ref.current, handleControllerScroll, {
        passive: false,
      });
    };
  });

  const moveSlideStatus = (
    nextPhase: number,
    nextSlide: number,
    dir: -1 | 1
  ) => {
    if (dir === -1 && nextSlide < 0) {
      console.log("out of slide (minus area)");
      return;
    }
    if (dir === 1 && nextSlide >= props.slideLength) {
      console.log("out of slide (plus area)");
      return;
    }
    props.setSlideStatus({ phase: nextPhase, slide: nextSlide });
  };

  const handleControllerScroll: (e: Event) => void = (e) => {
    if (!ref.current) throw Error("div要素が見つけられなかったよ…！；；");
    const scrollOffset = 0;
    props.scrollDir.current = getScrollDirection(
      ref.current.scrollTop - 1,
      scrollOffset
    );
    console.log(props.scrollDir);
    console.log(props.slideStatus);
    if (props.scrollDir.current === 1) {
      const nextPhase = 0.5 - props.slideStatus.phase;
      console.log(nextPhase);
      if (nextPhase === 0) {
        moveSlideStatus(
          nextPhase,
          props.slideStatus.slide + 1,
          props.scrollDir.current
        );
      } else {
        moveSlideStatus(
          nextPhase,
          props.slideStatus.slide,
          props.scrollDir.current
        );
      }
    } else if (props.scrollDir.current === -1) {
      const nextPhase = 0.5 - props.slideStatus.phase;
      if (nextPhase === 0.5) {
        moveSlideStatus(
          nextPhase,
          props.slideStatus.slide - 1,
          props.scrollDir.current
        );
      } else {
        moveSlideStatus(
          nextPhase,
          props.slideStatus.slide,
          props.scrollDir.current
        );
      }
    } else {
    }
    ref.current.scrollTop = 1;
  };
  return (
    <div
      className={`${styles["fixed-presentation-controller"]}`}
      css={css`
        ${responsiveCSS(
          "overflow-y",
          `${props.isInFixedArea ? "auto" : "hidden"}`,
          `${props.isInFixedArea ? "auto" : "hidden"}`
        )}
      `}
      ref={ref}
    >
      <div
        className={`${styles["fixed-presentation-controller--content"]}`}
      ></div>
    </div>
  );
};

/*===================================*/
// FixedSlider COMP
// 固定スクロールアニメーションのスライド管理用コンポーネント
/*===================================*/
import styles from "./FixedPresentation.module.scss";
import React, { cloneElement, useEffect, useRef, useState } from "react";
import {
  attachScrollEventListener,
  detachScrollEventListener,
} from "../../features/util";
import FixedSlide from "../_molecules/FixedSlide";
import { css } from "@emotion/react";
import { responsiveCSS } from "../../features/var";

const getScrollDirection = (currentScrlAmnt, prevScrlAmnt) => {
  return Math.sign(currentScrlAmnt - prevScrlAmnt);
};

/**
 * 固定スクロールアニメーションのスライド管理用コンポーネント
 * @param {Array.<import("react").ReactElement>} slides
 * @param {boolean} isInFixedArea 固定エリアに入ったかどうかのフラグ
 * @return {import("react").ReactElement} 固定スクロールアニメーションのスライド管理用コンポーネント
 */
export default function FixedPresentation({
  slides = [<></>],
  isInFixedArea = false,
}) {
  const [slideStatus, setSlideStatus] = useState({ phase: 0, slide: 0 });
  const slideRef = useRef(null);
  const scrollDir = useRef(1);

  return (
    <div className={`${styles["fixed-presentation"]}`} ref={slideRef}>
      <div className={`${styles["fixed-presentation__body"]}`}>
        {slides.map((s, idx) => {
          const stateElement = cloneElement(
            s ?? <React.Fragment key={idx}></React.Fragment>,
            {
              phase: slideStatus.phase,
              isDisplayed: idx === slideStatus.slide,
              isInFixedArea,
            }
          );
          return (
            <FixedSlide
              key={idx}
              currentSlide={slideStatus.slide}
              isDisplayed={idx === slideStatus.slide}
              isInFixedArea={isInFixedArea}
              progress={slideStatus.phase}
            >
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
          isInFixedArea={isInFixedArea}
          scrollDir={scrollDir}
          slideStatus={slideStatus}
          setSlideStatus={setSlideStatus}
          slideLength={slides.length}
        />
      </div>
    </div>
  );
}

const FixedSliderController = ({
  isInFixedArea,
  scrollDir,
  slideStatus,
  setSlideStatus = (f) => f,
  slideLength,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    attachScrollEventListener(ref.current, [
      handleControllerScroll,
      { passive: false },
    ]);
    return () => {
      detachScrollEventListener(ref.current, [
        handleControllerScroll,
        { passive: false },
      ]);
    };
  });

  const moveSlideStatus = (nextPhase, nextSlide, dir) => {
    if (dir === -1 && nextSlide < 0) {
      console.log("out of slide (minus area)");
      return;
    }
    if (dir === 1 && nextSlide >= slideLength) {
      console.log("out of slide (plus area)");
      return;
    }
    setSlideStatus({ phase: nextPhase, slide: nextSlide });
  };

  const handleControllerScroll = (e) => {
    const scrollOffset = 0;
    scrollDir.current = getScrollDirection(
      ref.current.scrollTop - 1,
      scrollOffset
    );
    console.log(scrollDir);
    console.log(slideStatus);
    if (scrollDir.current === 1) {
      const nextPhase = 0.5 - slideStatus.phase;
      console.log(nextPhase);
      if (nextPhase === 0) {
        moveSlideStatus(nextPhase, slideStatus.slide + 1, scrollDir.current);
      } else {
        moveSlideStatus(nextPhase, slideStatus.slide, scrollDir.current);
      }
    } else if (scrollDir.current === -1) {
      const nextPhase = 0.5 - slideStatus.phase;
      if (nextPhase === 0.5) {
        moveSlideStatus(nextPhase, slideStatus.slide - 1, scrollDir.current);
      } else {
        moveSlideStatus(nextPhase, slideStatus.slide, scrollDir.current);
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
          `${isInFixedArea ? "auto" : "hidden"}`,
          `${isInFixedArea ? "auto" : "hidden"}`
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

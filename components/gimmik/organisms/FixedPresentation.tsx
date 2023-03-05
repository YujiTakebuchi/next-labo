/*===================================*/
// FixedSlider COMP
// 固定スクロールアニメーションのスライド管理用コンポーネント
/*===================================*/
import styles from "./FixedPresentation.module.scss";
import React, { cloneElement, ReactElement, useRef, useState } from "react";
import FixedSlide from "../molecules/FixedSlide";
import FixedSliderController from "./FixedSliderController";

type FixedPresentationProps = {
  slides: Array<JSX.Element>;
  isInFixedArea: boolean;
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

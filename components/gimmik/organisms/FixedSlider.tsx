/*===================================*/
// FixedSlider COMP
// 固定スクロールアニメーションのスライド管理用コンポーネント
/*===================================*/
import styles from "./FixedSlider.module.scss";
import React, {
  cloneElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  attachScrollEventListener,
  detachScrollEventListener,
  responsiveCSS,
} from "../../../features/util";
import FixedSlide from "../molecules/FixedSlide";
import { css } from "@emotion/react";

const useWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

type Props = {
  slides: Array<JSX.Element>;
  isInFixedArea: boolean | undefined;
  scrollAmount: number | undefined;
};

export default function FixedSlider({
  slides = [<></>],
  isInFixedArea = false,
  scrollAmount = 0,
}: Props) {
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [width, height] = useWindowSize();
  useEffect(() => {
    if (slideRef.current !== null) {
      // 変数
      if (currentSlide !== 0 && slideRef.current.children[0].scrollTop === 0)
        slideRef.current.children[0].scrollTop += 1;
      if (
        currentSlide !== slidersNum + 1 &&
        slideRef.current.children[0].scrollTop ===
          window.innerHeight * slidersNum + 2
      )
        slideRef.current.children[0].scrollTop -= 1;
    }

    attachScrollEventListener(document, handleScroll, { passive: true });
    return () => {
      // 再描画される前にイベントリスナをデタッチしてイベントが重複しないようにする
      detachScrollEventListener(document, handleScroll, { passive: true });
    };
  });

  const slidersNum = slides.length;

  // windowのonScroll関数
  const handleScroll = () => {
    const progressMax = window.innerHeight;
    const progressPx = scrollAmount;
    const progressTo = Math.floor(progressPx / progressMax);
    const progressRatio =
      ((progressPx - progressMax * progressTo) / progressMax) * 100;
    if (isInFixedArea && progressPx < progressMax * (slidersNum + 1)) {
      if (Math.abs(currentSlide - progressTo) > 1) {
        // ワープ
        setProgress(0);
        moveCurrentSlide(progressTo - currentSlide);
      } else if (progressPx >= progressMax * (currentSlide + 1)) {
        // 次のスライドに進む
        setProgress(0);
        moveCurrentSlide(currentSlide + 1);
      } else if (progressPx < progressMax * currentSlide) {
        // 前のスライドに戻る
        setProgress(100);
        moveCurrentSlide(currentSlide - 1);
      } else {
        // スライド移動なし
        setProgress(progressRatio);
      }
    }
  };

  // 移動系
  const moveCurrentSlide = (nextNum: number) => {
    if (nextNum === 0) {
      setProgress(0);
      setCurrentSlide(0);
    } else if (nextNum >= slidersNum) {
      setProgress(0);
      setCurrentSlide(slidersNum);
    } else {
      setCurrentSlide(nextNum);
    }
  };

  // ナビゲーションのonClick関数
  const handleNavClick = (slideN: number) => {
    if (slideRef.current !== null)
      slideRef.current.children[0].scrollTop = window.innerHeight * slideN + 1;
  };

  return (
    <div className={`${styles["fixed-slider"]}`} ref={slideRef}>
      <div className={`${styles["fixed-slider--content"]}`}>
        <div
          className={`${styles["fixed-slider--content__body"]}`}
          css={css`
            ${responsiveCSS("padding-bottom", `${height ?? 0}px`)}
          `}
        >
          {slides.map((s, idx) => {
            const stateElement = cloneElement(
              s ?? <React.Fragment key={idx}></React.Fragment>,
              {
                progress,
              }
            );
            return (
              <FixedSlide key={idx} isDisplayed={idx === currentSlide}>
                {stateElement}
              </FixedSlide>
            );
          })}
        </div>
        <nav className={`${styles["fixed-slider--content__nav"]}`}>
          {slides.map((s, idx) => {
            return (
              <button
                key={idx}
                className={`${currentSlide === idx ? styles["selected"] : ""}`}
                onClick={() => handleNavClick(idx)}
              ></button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

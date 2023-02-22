import { css } from "@emotion/react";
import { cloneElement, ReactNode, useEffect, useRef, useState } from "react";
import {
  attachScrollEventListener,
  detachScrollEventListener,
} from "../../features/util";
import styles from "./FixOnAvailable.module.scss";

/**
 * 要素が画面に収まった時に中の要素を固定表示するコンポーネント
 * @param {boolean} fixedStyleObjectList position: fixedになる要素に当てるemotion
 * @param {ReactNode} children 子要素
 * @return {ReactNode} 要素が画面に収まった時に中の要素を固定表示するコンポーネント
 */
export default function FixOnAvailable({
  fixedStyleObjectList = [],
  children,
}) {
  const ref = useRef(null);
  const [isInFixedArea, setIsInFixedArea] = useState(false);
  const [scrollAmountByWindowTop, setScrollAmountByWindowTop] = useState(0);
  useEffect(() => {
    attachScrollEventListener(window, handleScroll, { passive: true });
    return () => {
      detachScrollEventListener(window, handleScroll, { passive: true });
    };
  });

  const handleScroll = () => {
    const scrollTarget: HTMLElement | any = ref.current;
    const positionTarget = scrollTarget.children[0];
    if (
      scrollTarget.getBoundingClientRect().top <= 0 &&
      scrollTarget.getBoundingClientRect().bottom - window.innerHeight > 0
    ) {
      isInFixedArea || setIsInFixedArea(true);
      scrollTarget.style.height = `${positionTarget.clientHeight}px`;
      positionTarget.style.width = `${scrollTarget.clientWidth}px`;
      positionTarget.classList.remove(`${styles["relative"]}`);
      positionTarget.classList.add(`${styles["fixed"]}`);
    } else {
      isInFixedArea && setIsInFixedArea(false);
      scrollTarget.style.height = "auto";
      positionTarget.style.width = "100%";
      positionTarget.classList.remove(`${styles["fixed"]}`);
      positionTarget.classList.add(`${styles["relative"]}`);
    }
    setScrollAmountByWindowTop(scrollTarget.getBoundingClientRect().top * -1);
  };

  return (
    <div className={`${styles["fix-on-available"]}`} ref={ref}>
      <div
        className={`${styles["fix-on-available__content"]} ${styles["relative"]}`}
        css={
          isInFixedArea
            ? css`
                ${fixedStyleObjectList.map((so) => so)}
              `
            : ""
        }
      >
        {cloneElement(children, {
          isInFixedArea,
          scrollAmount: scrollAmountByWindowTop,
        })}
      </div>
    </div>
  );
}

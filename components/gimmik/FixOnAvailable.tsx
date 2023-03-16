import { css, SerializedStyles } from "@emotion/react";
import React, { cloneElement, useEffect, useRef, useState } from "react";
import {
  attachScrollEventListener,
  detachScrollEventListener,
} from "../../features/util";
import styles from "./FixOnAvailable.module.scss";

type Props = {
  fixedStyleObjectList: Array<string>;
  cssOverrides: SerializedStyles;
  children: JSX.Element;
};

// 要素が画面ないに収まった時に固定表示に切り替えるコンポーネント(要素の上端が画面上端より上に来て要素下端が画面下端より下の時、つまり要素が画面を埋め尽くしてる時)
const FixOnAvailable: React.FC<Props> = (props: Props) => {
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
      positionTarget.style.width = `${scrollTarget.clientWidth}px`;
      positionTarget.classList.remove(`${styles["relative"]}`);
      positionTarget.classList.add(`${styles["fixed"]}`);
    } else {
      isInFixedArea && setIsInFixedArea(false);
      positionTarget.style.width = "100%";
      positionTarget.classList.remove(`${styles["fixed"]}`);
      positionTarget.classList.add(`${styles["relative"]}`);
    }
    setScrollAmountByWindowTop(scrollTarget.getBoundingClientRect().top * -1);
  };

  return (
    <div
      className={`${styles["fix-on-available"]}`}
      ref={ref}
      css={props.cssOverrides}
    >
      <div
        className={`${styles["fix-on-available__content"]} ${styles["relative"]}`}
        css={css`
          ${props.fixedStyleObjectList.map((so) => so)}
        `}
      >
        {cloneElement(props.children, {
          isInFixedArea,
          scrollAmount: scrollAmountByWindowTop,
        })}
      </div>
    </div>
  );
};

export default FixOnAvailable;

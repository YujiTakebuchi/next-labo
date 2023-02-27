/*===================================*/
// FixedSlide COMP
// 固定スクロールアニメーションのスライドコンポーネント
/*===================================*/
import React, { ReactNode } from "react";
import styles from "./FixedSlide.module.scss";

type Props = {
  isDisplayed: boolean;
  children: any;
};

/**
 * 固定スクロールアニメーションのスライドコンポーネント
 * @param {Props} props 現在表示されているスライドかどうかのフラグ
 * @return {import("react").ReactElement} 固定スクロールアニメーションのスライドコンポーネント
 */
export default function FixedSlide(props: Props): JSX.Element {
  return (
    <div
      className={`${styles["fixed-slide"]}`}
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        className={`${styles["fixed-slide__content"]} ${
          props.isDisplayed ? styles["displayed"] : ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
}

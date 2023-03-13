/*===================================*/
// FixedSliderSlide01 COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import { css } from "@emotion/react";
import styles from "./FixedSliderSlide01.module.scss";

type Props = {
  progress: number;
  fixedStyleObjectList: Array<string>;
  slidesLength: number;
  color: string;
};
export default function FixedSliderSlide01({
  progress,
  fixedStyleObjectList,
  slidesLength,
  color,
}: Props): JSX.Element {
  return (
    <div
      className={`${styles["fixed-slider-slide-01"]}`}
      style={{ backgroundColor: color }}
      css={css`
        ${fixedStyleObjectList.map((so) => so)}
      `}
    >
      <div
        className={`${styles["fixed-slider-slide-01__barx"]}`}
        style={{ left: `${progress}%` }}
      ></div>
      <div
        className={`${styles["fixed-slider-slide-01__bary"]}`}
        style={{ top: `${progress / slidesLength}%` }}
      ></div>
    </div>
  );
}

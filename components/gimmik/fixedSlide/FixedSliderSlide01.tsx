/*===================================*/
// FixedSliderSlide01 COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import { css } from "@emotion/react";
import styles from "./FixedSliderSlide01.module.scss";

type Props = {
  progress: number | undefined;
  fixedStyleObjectList: Array<string>;
  color: string;
};
export default function FixedSliderSlide01({
  progress,
  fixedStyleObjectList,
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
        style={{ top: `${progress}%` }}
      ></div>
    </div>
  );
}

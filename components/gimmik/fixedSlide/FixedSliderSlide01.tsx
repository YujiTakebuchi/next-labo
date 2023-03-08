/*===================================*/
// FixedSliderSlide01 COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import { css } from "@emotion/react";
import styles from "./FixedSliderSlide01.module.scss";

type Props = {
  progress: number;
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
      className={`${styles["role-first"]}`}
      style={{ backgroundColor: color }}
      css={css`
        ${fixedStyleObjectList.map((so) => so)}
      `}
    >
      <div
        className={`${styles["role-first__barx"]}`}
        style={{ left: `${progress}%` }}
      ></div>
      <div
        className={`${styles["role-first__bary"]}`}
        style={{ top: `${progress / 4}%` }}
      ></div>
    </div>
  );
}

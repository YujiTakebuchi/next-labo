/*===================================*/
// FixedSliderSlide01 COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import styles from "./FixedSliderSlide01.module.scss";

/**
 * 固定スクロールアニメーションのアニメーションコンポーネント01
 * @param {object} progress アニメーション進行度、0 ~ 100
 * @return {import("react").ReactElement} 固定スクロールアニメーションのアニメーションコンポーネント01
 */
export default function FixedSliderSlide01({ progress, color }) {
  return (
    <div
      className={`${styles["role-first"]}`}
      style={{ backgroundColor: color }}
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

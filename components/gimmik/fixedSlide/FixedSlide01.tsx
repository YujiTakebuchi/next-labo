/*===================================*/
// RoleFirst COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import styles from "./FixedSlide01.module.scss";

/**
 * 固定スクロールアニメーションのアニメーションコンポーネント01
 * @param {object} progress アニメーション進行度、0 ~ 100
 * @return {import("react").ReactElement} 固定スクロールアニメーションのアニメーションコンポーネント01
 */
export default function FixedSlide01({
  phase,
  isDisplayed,
  isInFixedArea,
  fixedStyleObjectList,
}) {
  return (
    <div
      className={`${styles["fixed-slide-01"]}`}
      css={fixedStyleObjectList.map((so) => so)}
    ></div>
  );
}

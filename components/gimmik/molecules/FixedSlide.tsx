/*===================================*/
// FixedSlide COMP
// 固定スクロールアニメーションのスライドコンポーネント
/*===================================*/
import styles from "./FixedSlide.module.scss";

/**
 * 固定スクロールアニメーションのスライドコンポーネント
 * @param {boolean} isDisplayed 現在表示されているスライドかどうかのフラグ
 * @param {object} children 子要素
 * @return {import("react").ReactElement} 固定スクロールアニメーションのスライドコンポーネント
 */
export default function FixedSlide({ isDisplayed, children }) {
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
          isDisplayed ? styles["displayed"] : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/*===================================*/
// FixedSliderSlide01 COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import styles from "./FixedSliderSlide01.module.scss";

type Props = {
  progress: number;
  color: string;
};
export default function FixedSliderSlide01({
  progress,
  color,
}: Props): JSX.Element {
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

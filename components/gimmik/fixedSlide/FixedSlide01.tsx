/*===================================*/
// RoleFirst COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import styles from "./FixedSlide01.module.scss";

type Props = {
  fixedStyleObjectList: Array<string>;
  children: JSX.Element;
};

export default function FixedSlide01(props: Props): JSX.Element {
  return (
    <div
      className={`${styles["fixed-slide-01"]}`}
      css={props.fixedStyleObjectList.map((so) => so)}
    ></div>
  );
}

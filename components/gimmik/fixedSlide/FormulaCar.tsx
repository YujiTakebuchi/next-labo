/*===================================*/
// FormulaCar COMP
// 固定スクロールアニメーションのアニメーションコンポーネント01
/*===================================*/
import { css } from "@emotion/react";
import styles from "./FormulaCar.module.scss";

type Props = {
  progress: number | undefined;
  fixedStyleObjectList: Array<string>;
};

export default function FormulaCar({
  progress,
  fixedStyleObjectList,
}: Props): JSX.Element {
  return (
    <div
      className={`${styles["formula-car"]}`}
      css={css`
        ${fixedStyleObjectList.map((so) => so)}
      `}
    >
      <span
        className={`${styles["formula-car--content"]}`}
        style={{ left: `${100 - (progress ?? 0)}%` }}
      >
        🏎️
      </span>
    </div>
  );
}

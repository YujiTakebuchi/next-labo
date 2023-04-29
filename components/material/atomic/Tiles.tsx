/*===================================*/
// Tiles module
// タイル形式のコンポーネントを含むモジュール
/*===================================*/
import { responsiveCSS } from "@/features/emotionUtil";
import { css } from "@emotion/react";
import React, { ReactNode } from "react";
import styles from "./Tiles.module.scss";

type CheckTileProps = {
  sizeStyleList: Array<{
    maxWidth: number | undefined;
    size: string;
    aspectRatio: number;
  }>;
};

/**
 * チェックタイルコンポーネント
 * @param {Props} props チェックタイルのスタイルを指定するprops
 * @return {import("react").ReactElement} チェックタイルコンポーネント
 */
export function CheckTile(props: CheckTileProps): JSX.Element {
  return (
    <div className={`${styles["check-tile"]}`}>
      <div
        className={`${styles["check-tile--content"]}`}
        css={css`
          ${props.sizeStyleList.map((ss) => {
            const widthStyleTuple: [
              string | undefined,
              string | undefined,
              number | undefined
            ] = ss.maxWidth
              ? [undefined, ss.size, ss.maxWidth]
              : [ss.size, undefined, undefined];
            const heightStyleTuple: [
              string | undefined,
              string | undefined,
              number | undefined
            ] = ss.maxWidth
              ? [undefined, `calc(${ss.size} / ${ss.aspectRatio})`, ss.maxWidth]
              : [`calc(${ss.size} / ${ss.aspectRatio})`, undefined, undefined];
            const styleString: string = `${responsiveCSS(
              "width",
              ...widthStyleTuple
            )} ${responsiveCSS("height", ...heightStyleTuple)}`;
            return styleString;
          })}
        `}
      >
        <div className={`${styles["check-tile--content__tp-lf"]}`} />
        <div className={`${styles["check-tile--content__tp-rt"]}`} />
        <div className={`${styles["check-tile--content__bt-lf"]}`} />
        <div className={`${styles["check-tile--content__bt-rt"]}`} />
      </div>
    </div>
  );
}

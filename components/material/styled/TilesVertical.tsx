/*===================================*/
// TilesVertical module
// タイル形式のコンポーネントを含むモジュール
/*===================================*/
import { responsiveCSS } from "@/features/emotionUtil";
import { css } from "@emotion/react";
import React, { ReactNode, useEffect, useState } from "react";
import { CheckTile } from "../atomic/Tiles";
import styles from "./TilesVertical.module.scss";

/**
 * チェックタイルコンポーネント
 * @return {import("react").ReactElement} チェックタイルコンポーネント
 */
export function CheckTileFillVertical(): JSX.Element {
  const tileHeigth = 30;
  const calcTileLengthFillVertical = (
    verticalHeight: number,
    tileHeigth: number
  ) => {
    return Math.ceil(verticalHeight / tileHeigth);
  };
  const [tileLengthFillVertical, setTileLengthFillVertical] = useState(0);
  useEffect(() => {
    if (!window) return;
    setTileLengthFillVertical(
      calcTileLengthFillVertical(window.innerHeight, tileHeigth)
    );
  }, []);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("resize", () => {
      setTileLengthFillVertical(
        calcTileLengthFillVertical(window.innerHeight, tileHeigth)
      );
    });
  });
  return (
    <div>
      {new Array(tileLengthFillVertical).fill(null).map(() => {
        return (
          <CheckTile
            sizeStyleList={[
              {
                maxWidth: undefined,
                size: `${tileHeigth}px`,
                aspectRatio: 1 / 1,
              },
            ]}
          />
        );
      })}
    </div>
  );
}

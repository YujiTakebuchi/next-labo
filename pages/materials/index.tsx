import variable from "../../styles/var.module.scss";
import { CheckTile } from "@/components/material/atomic/Tiles";

export default function Home() {
  return (
    <>
      <h1>デザイン素材となるレイアウトコンポーネント</h1>
      <div>
        <h2>PCスタイルのみ</h2>
        <div>
          <h3>PCスタイルのみ</h3>
          <CheckTile
            sizeStyleList={[
              { maxWidth: undefined, size: "20px", aspectRatio: 1 / 1 },
            ]}
          />
        </div>
        <div>
          <h3>PC, SPスタイル</h3>
          <CheckTile
            sizeStyleList={[
              { maxWidth: undefined, size: "120px", aspectRatio: 1 / 1 },
              {
                maxWidth: parseInt(variable.breakpoint),
                size: "60px",
                aspectRatio: 1 / 1,
              },
            ]}
          />
        </div>
        <div>
          <h3>PC, SP, Tabスタイル</h3>
          <CheckTile
            sizeStyleList={[
              { maxWidth: undefined, size: "360px", aspectRatio: 1 / 1 },
              {
                maxWidth: parseInt(variable.breakpointPC),
                size: "240px",
                aspectRatio: 1 / 1,
              },
              {
                maxWidth: parseInt(variable.breakpoint),
                size: "120px",
                aspectRatio: 1 / 1,
              },
            ]}
          />
        </div>
        <div>
          <h3>PC, SP, Tabスタイル & 各アスペクトレシオ設定</h3>
          <CheckTile
            sizeStyleList={[
              { maxWidth: undefined, size: "360px", aspectRatio: 16 / 9 },
              {
                maxWidth: parseInt(variable.breakpointPC),
                size: "240px",
                aspectRatio: 4 / 3,
              },
              {
                maxWidth: parseInt(variable.breakpoint),
                size: "120px",
                aspectRatio: 2 / 1,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}

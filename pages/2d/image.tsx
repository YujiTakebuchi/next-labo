import type { NextPage } from "next";
import { useEffect } from "react";
import * as PIXI from "pixi.js";

const Home: NextPage = () => {
  let app: PIXI.Application, container: PIXI.Container, sprite: PIXI.Sprite;
  const sizes = {
    width: 0,
    height: 0,
  };

  useEffect(() => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    init();
    window.addEventListener("resize", resize);
  }, []);

  const init = () => {
    if (app) return;
    app = new PIXI.Application({
      width: sizes.width,
      height: sizes.height,
      resizeTo: window,
    });
    const main = document.getElementById("main")!;
    main.appendChild(app.view as HTMLCanvasElement);

    // コンテナの作成
    const container = new PIXI.Container();
    app.stage.addChild(container);
    // app.loader.add("/thirteen.svg").load(spriteSetUp);
    const sprite = PIXI.Sprite.from("/thirteen.svg");
    let elapsed = 0.0;
    app.stage.addChild(sprite);
    app.ticker.add((delta) => {
      elapsed += delta;
      sprite.x = sizes.width / 2 + Math.cos(elapsed / 50.0) * (sizes.width / 2);
      // iPhoneで見た時終端位置がずれてる
      // sprite.x =
      //   sizes.width / window.devicePixelRatio +
      //   Math.cos(elapsed / 50.0) * (sizes.width / window.devicePixelRatio);
    });
  };

  // 画像を表示
  const spriteSetUp = () => {
    sprite = PIXI.Sprite.from("/thirteen.svg");
    sprite.width = sizes.width - 20;
    sprite.height = 300;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    sprite.position.x = sizes.width / 2;
    sprite.position.y = sizes.height / 2;
    container.addChild(sprite);
  };

  // リサイズ処理
  const resize = () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    sprite.position.x = sizes.width / 2;
    sprite.position.y = sizes.height / 2;
    app.renderer.resize(sizes.width, sizes.height);
  };
  return (
    <>
      <div
        id="main"
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      ></div>
    </>
  );
};

export default Home;

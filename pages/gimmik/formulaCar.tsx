import FormulaCar from "@/components/gimmik/fixedSlide/FormulaCar";
import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import FixedSlider from "@/components/gimmik/organisms/FixedSlider";
import { CheckTileFillVertical } from "@/components/material/styled/TilesVertical";
import { responsiveCSS } from "@/features/util";
import { useWindowSize } from "@/hooks/windowHooks";
import { css } from "@emotion/react";

export default function Home() {
  const [width, height] = useWindowSize();
  const slideStyleList: Array<string> = [
    responsiveCSS("width", "100%", "100%"),
  ];
  const slides = [
    <div
      css={css`
        position: relative;
        height: 100%;
      `}
    >
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        `}
      >
        <CheckTileFillVertical />
      </div>
      <FormulaCar
        key={"s1"}
        progress={undefined}
        fixedStyleObjectList={slideStyleList}
      />
    </div>,
    <FormulaCar
      key={"s2"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
    />,
    <FormulaCar
      key={"s3"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
    />,
    <FormulaCar
      key={"s4"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
    />,
  ];
  return (
    <div style={{ padding: "9000px 0" }}>
      <FixOnAvailable
        fixedStyleObjectList={slideStyleList}
        cssOverrides={css`
          ${responsiveCSS("height", `${height * (slides.length + 1) ?? 0}px`)}
        `}
      >
        <FixedSlider
          slides={slides}
          isInFixedArea={undefined}
          scrollAmount={undefined}
        />
      </FixOnAvailable>
    </div>
  );
}

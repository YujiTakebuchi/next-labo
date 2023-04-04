import FormulaCar from "@/components/gimmik/fixedSlide/FormulaCar";
import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import FixedSlider from "@/components/gimmik/organisms/FixedSlider";
import { responsiveCSS } from "@/features/util";
import { useWindowSize } from "@/hooks/windowHooks";
import { css } from "@emotion/react";

export default function Home() {
  const [width, height] = useWindowSize();
  const slideStyleList: Array<string> = [
    responsiveCSS("width", "100%", "100%"),
  ];
  const slides = [
    <FormulaCar
      key={"s1"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
    />,
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

import FixedSlide01 from "@/components/gimmik/fixedSlide/FixedSlide01";
import FixedSliderSlide01 from "@/components/gimmik/fixedSlide/FixedSliderSlide01";
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
    <FixedSliderSlide01
      key={"s1"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
      color="blue"
    />,
    <FixedSliderSlide01
      key={"s2"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
      color="red"
    />,
    <FixedSliderSlide01
      key={"s3"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
      color="green"
    />,
    <FixedSliderSlide01
      key={"s4"}
      progress={undefined}
      fixedStyleObjectList={slideStyleList}
      color="yellow"
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

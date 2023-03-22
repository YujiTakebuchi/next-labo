import FixedSlide01 from "@/components/gimmik/fixedSlide/FixedSlide01";
import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import FixedPresentation from "@/components/gimmik/organisms/FixedPresentation";
import { responsiveCSS } from "@/features/util";
import { css } from "@emotion/react";

export default function Home() {
  const slideStyleList: Array<string> = [
    responsiveCSS("width", "100%", "100%"),
    responsiveCSS("height", "100vh"),
  ];
  return (
    <div style={{ padding: "2000px 0" }}>
      <FixOnAvailable
        fixedStyleObjectList={slideStyleList}
        cssOverrides={css``}
      >
        <FixedPresentation
          slides={[
            <FixedSlide01 key={"s1"} fixedStyleObjectList={slideStyleList} />,
            <FixedSlide01 key={"s2"} fixedStyleObjectList={slideStyleList} />,
          ]}
          isInFixedArea={undefined}
        ></FixedPresentation>
      </FixOnAvailable>
    </div>
  );
}

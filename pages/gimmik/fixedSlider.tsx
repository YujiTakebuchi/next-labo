import FixedSlide01 from "@/components/gimmik/fixedSlide/FixedSlide01";
import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import FixedSlider from "@/components/gimmik/organisms/FixedSlider";
import { responsiveCSS } from "@/features/util";

export default function Home() {
  const slideStyleList: Array<string> = [
    responsiveCSS("width", "100%", "100%"),
    responsiveCSS("height", "100vh"),
  ];
  return (
    <div style={{ padding: "2000px 0" }}>
      <FixOnAvailable fixedStyleObjectList={slideStyleList}>
        <FixedSlider
          slides={[
            <FixedSlide01 fixedStyleObjectList={slideStyleList} />,
            <FixedSlide01 fixedStyleObjectList={slideStyleList} />,
          ]}
        ></FixedSlider>
      </FixOnAvailable>
    </div>
  );
}

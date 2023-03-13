import FixedSlide01 from "@/components/gimmik/fixedSlide/FixedSlide01";
import FixedSliderSlide01 from "@/components/gimmik/fixedSlide/FixedSliderSlide01";
import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import FixedSlider from "@/components/gimmik/organisms/FixedSlider";
import { responsiveCSS } from "@/features/util";

export default function Home() {
  const slideStyleList: Array<string> = [
    responsiveCSS("width", "100%", "100%"),
    responsiveCSS("height", "100vh"),
  ];
  const slides = [
    <FixedSliderSlide01 fixedStyleObjectList={slideStyleList} color="blue" />,
    <FixedSliderSlide01 fixedStyleObjectList={slideStyleList} color="red" />,
    <FixedSliderSlide01 fixedStyleObjectList={slideStyleList} color="green" />,
    <FixedSliderSlide01 fixedStyleObjectList={slideStyleList} color="yellow" />,
  ];
  return (
    <div style={{ padding: "9000px 0" }}>
      <FixOnAvailable fixedStyleObjectList={slideStyleList}>
        <FixedSlider slides={slides}></FixedSlider>
      </FixOnAvailable>
    </div>
  );
}

import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import FixedSlide from "@/components/gimmik/molecules/FixedSlide";
import FixedPresentation from "@/components/gimmik/organisms/FixedPresentation";
import Reducer from "@/components/react-hooks/Reducer";
import { responsiveCSS } from "@/features/util";

export default function Home() {
  return (
    <div style={{ padding: "2000px 0" }}>
      <FixOnAvailable
        fixedStyleObjectList={[responsiveCSS("width", "100%", "100%")]}
      >
        <FixedPresentation slides={[<FixedSlide />]}></FixedPresentation>
      </FixOnAvailable>
    </div>
  );
}

import FixOnAvailable from "@/components/gimmik/FixOnAvailable";
import Reducer from "@/components/react-hooks/Reducer";
import { responsiveCSS } from "@/features/util";

export default function Home() {
  return (
    <div style={{ padding: "2000px 0" }}>
      <FixOnAvailable
        fixedStyleObjectList={[responsiveCSS("width", "100%", "100%")]}
      >
        <div
          style={{ width: "100%", height: "200px", backgroundColor: "#ff00ff" }}
        />
      </FixOnAvailable>
    </div>
  );
}

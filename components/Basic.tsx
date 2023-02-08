import { Splide, SplideSlide } from "splide-nextjs/react-splide";
import "splide-nextjs/splide/dist/css/themes/splide-sea-green.min.css";

const Basic = () => {
  return (
    <Splide>
      <SplideSlide>
        <div>1</div>
      </SplideSlide>
      <SplideSlide>
        <div>2</div>
      </SplideSlide>
      <SplideSlide>
        <div>3</div>
      </SplideSlide>
      <SplideSlide>
        <div>4</div>
      </SplideSlide>
    </Splide>
  );
};

export default Basic;

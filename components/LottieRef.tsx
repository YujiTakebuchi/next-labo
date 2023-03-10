import { useEffect, useRef, useState } from "react";
import type { LottiePlayer } from "lottie-web";

const LottieRef = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        // path to your animation file, place it inside public folder
        path: "/lottie/data.json",
      });
      animation.play();

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div ref={ref} />;
};

export default LottieRef;

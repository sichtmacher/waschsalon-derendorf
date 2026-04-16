import { Warp } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

function getShouldFallback(): boolean {
  if (typeof window === "undefined") return false;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrow = window.matchMedia("(max-width: 640px)").matches;
  return reduced || narrow;
}

export default function WarpBackground() {
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const update = () => setFallback(getShouldFallback());
    update();
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqNarrow = window.matchMedia("(max-width: 640px)");
    mqReduced.addEventListener("change", update);
    mqNarrow.addEventListener("change", update);
    return () => {
      mqReduced.removeEventListener("change", update);
      mqNarrow.removeEventListener("change", update);
    };
  }, []);

  if (fallback) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 30% 40%, hsl(170, 100%, 80%) 0%, hsl(180, 90%, 30%) 40%, hsl(200, 100%, 20%) 100%)",
        }}
      />
    );
  }

  return (
    <Warp
      style={{ height: "100%", width: "100%" }}
      proportion={0.45}
      softness={1}
      distortion={0.25}
      swirl={0.8}
      swirlIterations={10}
      shape="checks"
      shapeScale={0.1}
      scale={1}
      rotation={0}
      speed={1}
      colors={[
        "hsl(200, 100%, 20%)",
        "hsl(160, 100%, 75%)",
        "hsl(180, 90%, 30%)",
        "hsl(170, 100%, 80%)",
      ]}
    />
  );
}

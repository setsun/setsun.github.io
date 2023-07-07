import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useState, useEffect } from "react";
import { Color, Euler } from "three";
import ThreeGlobe from "three-globe";
import json from "./data/globe.json";
import { useAudioAnalyzer } from "../../hooks/useAudioAnalyzer";
import { useTurntable } from "../../hooks/useTurntable";
import RadialBarFrequencyGraph from "../../components/RadialBarFrequencyGraph";

const arcsData = [...new Array(300)].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: ["#ffffff", "#dadada", "#f2f2f2", "#f4f4f4"][
    Math.round(Math.random() * 3)
  ],
}));

const Globe = new ThreeGlobe({
  waitForGlobeReady: true,
  animateIn: false,
})
  .hexPolygonsData(json.features)
  .hexPolygonResolution(4)
  .hexPolygonMargin(0.6)
  .hexPolygonColor(() => "#cddbfe")
  .arcsData(arcsData)
  .arcColor("color")
  .arcDashLength(0.4)
  .arcDashGap(4)
  .arcDashInitialGap(() => Math.random() * 5)
  .arcDashAnimateTime(5000)
  .showAtmosphere(true)
  .atmosphereColor("#3a228a")
  .atmosphereAltitude(0.75);

const globeMaterial = Globe.globeMaterial();

// @ts-ignore
globeMaterial.specular = new Color("#000080");
// @ts-ignore
globeMaterial.shininess = 0;
// @ts-ignore
globeMaterial.color = new Color("#000080");

const MainScene = ({ isPlaying }: { isPlaying: boolean }) => {
  const { audio, analyzer } = useAudioAnalyzer({
    url: "audio/Sun_&_Moon_Remix.mp3",
    loop: true,
    fftSize: 512,
  });

  const globeTurntable = useTurntable({ speed: 0.0005 });
  const radialBarTurnable = useTurntable({ speed: 0.001, axis: "x" });

  useEffect(() => {
    if (isPlaying && !audio.isPlaying) {
      audio.play();
    }
  }, [audio, isPlaying]);

  return (
    <mesh>
      <Stars count={500} />

      <mesh ref={radialBarTurnable}>
        <mesh>
          <RadialBarFrequencyGraph
            radius={150}
            intensity={0.5}
            countOverride={160}
            audioAnalyzer={analyzer}
          />
        </mesh>
      </mesh>

      <mesh ref={globeTurntable}>
        <primitive object={Globe} />
      </mesh>

      <ambientLight color="#cddbfe" />
      <directionalLight color="#cddbfe" position={[40, -60, -175]} />
      <directionalLight
        color="white"
        intensity={0.6}
        position={[40, -60, -175]}
      />
    </mesh>
  );
};

const Visualizer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Canvas
      camera={{
        type: "PerspectiveCamera",
        position: [135, 10, 160],
        rotation: new Euler(-0.075, 0.68, 0.05),
        fov: 75,
        aspect: window.innerWidth / window.innerHeight,
        near: 0.01,
        far: 5000,
      }}
    >
      <MainScene isPlaying />
    </Canvas>
  );
};

export default Visualizer;

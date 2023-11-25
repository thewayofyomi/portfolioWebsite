import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive
      object={earth.scene}
      scale={isMobile ? 1.5 : 2.5}
      position-y={isMobile ? 1.5 : 0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (inView && !loaded) {
    setLoaded(true);
  }

  return (
    <div ref={ref} style={{ width: "100%", height: "500px" }}>
      {loaded && (
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
          shadows
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              autoRotate
              enableZoom={false}
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <Earth isMobile={isMobile} />
            <Preload all />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default EarthCanvas;

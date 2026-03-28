import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

/**
 * Model component
 * Safely loads a GLTF model and handles errors if URL is missing or wrong
 */
function Model({ url }) {
  if (!url) {
    return <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>; // fallback placeholder
  }

  try {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} />;
  } catch (error) {
    console.error("Failed to load 3D model:", error);
    return <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>; // fallback placeholder
  }
}

/**
 * Visualizer component
 */
export default function Visualizer({ modelUrl }) {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="yellow" />
        </mesh>}>
          <Model url={modelUrl} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
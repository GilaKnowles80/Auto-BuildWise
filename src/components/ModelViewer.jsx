import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";

function Model({ url }) {
  // Load the GLTF model safely
  const gltf = useLoader(GLTFLoader, url);

  // Make sure we don't render if gltf is undefined
  if (!gltf || !gltf.scene) return null;

  return <primitive object={gltf.scene} />;
}

export default function ModelViewer({ modelPath }) {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model url={modelPath} />
      </Suspense>
    </Canvas>
  );
}
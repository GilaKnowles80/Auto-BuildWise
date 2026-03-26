// src/components/CadViewer.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Floor({ modelPath, yOffset }) {
  const { scene } = useGLTF(modelPath);
  const clone = scene.clone();
  clone.position.y = yOffset;
  return <primitive object={clone} />;
}

export default function CadViewer({
  modelType = "residential", // e.g., residential, commercial, hotel
  floors = 1,
  heightPerFloor = 3,        // default floor height in meters
}) {
  // Dynamically build array of floors
  const floorModels = [];
  for (let i = 0; i < floors; i++) {
    floorModels.push(
      <Floor
        key={i}
        modelPath={/models/${modelType}/floor1.glb} // base model for stacking
        yOffset={i * heightPerFloor}
      />
    );
  }

  return (
    <div className="w-full h-[600px] bg-gray-100 rounded-lg shadow-md">
      <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1} />
        {floorModels}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
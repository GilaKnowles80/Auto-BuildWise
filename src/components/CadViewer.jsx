import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber"; // assuming you use react-three-fiber
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CadViewer = ({ modelType = "residential", numFloors = 1, heightPerFloor = 3 }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const loader = new GLTFLoader();
    const loadedModels = [];

    for (let i = 0; i < numFloors; i++) {
      const modelPath = "/models/" + modelType + ".glb"; // ✅ concatenation, no $
      const yOffset = i * heightPerFloor;

      loader.load(
        modelPath,
        (gltf) => {
          loadedModels.push({ gltf, yOffset });
          if (loadedModels.length === numFloors) {
            setModels([...loadedModels]);
          }
        },
        undefined,
        (error) => console.error("Error loading model:", modelPath, error)
      );
    }
  }, [modelType, numFloors, heightPerFloor]);

  return (
    <Canvas camera={{ position: [0, 10, 20], fov: 50 }}>
      {models.map((item, index) => (
        <primitive
          key={index}
          object={item.gltf.scene}
          position={[0, item.yOffset, 0]} // stacking
        />
      ))}
    </Canvas>
  );
};

export default CadViewer;
import React, { useState } from "react";
import { generateDesign } from "../services/designSenseService";

export default function Visualizer({ planData }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerate = async () => {
    const result = await generateDesign(planData);
    setImageUrl(result.url);
  };

  return (
    <div className="mt-4">
      <button onClick={handleGenerate} className="px-3 py-1 bg-green-600 text-white rounded">
        Generate Visual
      </button>
      {imageUrl && <img src={imageUrl} alt="AI Design" className="mt-2 border rounded" />}
    </div>
  );
}
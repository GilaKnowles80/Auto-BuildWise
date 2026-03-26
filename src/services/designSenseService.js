export async function generateDesign(planData) {
  // Replace with your real API key from DesignSense
  const API_KEY = "YOUR_DESIGNSENSE_API_KEY";

  const response = await fetch("https://api.designsense.ai/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: Bearer ${API_KEY},
    },
    body: JSON.stringify({ floorPlan: planData }),
  });

  const data = await response.json();
  return { url: data.image_url };
}
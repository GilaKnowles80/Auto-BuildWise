
export async function generateDesign(planData) {
  try {
    // Use environment variable or fallback
    const API_KEY = import.meta.env.VITE_DESIGNSENSE_KEY || "YOUR_DESIGNSENSE_API_KEY";

    const response = await fetch("https://api.designsense.ai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY, // ✅ no $ sign
      },
      body: JSON.stringify({ floorPlan: planData }) // removed trailing comma
    });

    if (!response.ok) {
      throw new Error("DesignSense API error: " + response.status);
    }

    const data = await response.json();
    return { url: data && data.image_url ? data.image_url : null };

  } catch (err) {
    console.error("Design generation failed:", err);
    return { url: null, error: err.message };
  }
}
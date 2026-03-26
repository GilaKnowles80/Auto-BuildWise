// src/AgentAssist/assistantLogic.js
export function assistantLogic(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("floor")) {
    return "You can stack floors by adjusting the 'floors' prop in CadViewer.jsx.";
  }
  if (input.includes("subscription")) {
    return "Use subscriptionService.js and backend /api/subscriptions to handle plans.";
  }
  if (input.includes("3d model") || input.includes("glb")) {
    return "Place your .glb files in public/models/<project_type>/ and CadViewer will load them automatically.";
  }
  if (input.includes("payment")) {
    return "Use stripeService.js, paymongoService.js, or xenditService.js to integrate payments.";
  }

  return "I'm here to assist with BuildWise 3D, floors, subscriptions, and payments!";
}
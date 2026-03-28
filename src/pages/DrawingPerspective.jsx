import CadViewer from "../components/CadViewer";

export default function DrawingsPerspective() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">DrawingPerspective</h2>
      <CadViewer model="Architectural Drawings" />
      <p>3D visualization / perspective placeholder...</p>
    </div>
  );
}
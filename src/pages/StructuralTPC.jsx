import CadViewer from "../components/CadViewer";

export default function StructuralTPC() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Structural & TPC Calculation</h2>
      <CadViewer model="Structural Model" />
      <p>Computation placeholders here...</p>
    </div>
  );
}
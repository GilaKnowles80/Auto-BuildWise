import CadViewer from "../components/CadViewer";

export default function EngineeringBOQ() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Engineering & BOQ Pro</h2>
      <CadViewer model="Engineering Model" />
      <p>Bill of Quantities and Engineering Computation placeholders...</p>
    </div>
  );
}
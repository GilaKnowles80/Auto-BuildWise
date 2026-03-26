import CostBreakdown from "../components/CostBreakdown";
import PertCpmChart from "../components/PertCpmChart";

export default function TotalEstimator() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Total Project Estimator</h2>
      <CostBreakdown />
      <PertCpmChart />
      <p>Estimator computation placeholders...</p>
    </div>
  );
}
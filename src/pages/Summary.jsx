import SummaryCard from "../components/SummaryCard";

export default function Summary() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Cost" value="$0.00" />
        <SummaryCard title="Total Materials" value="0 units" />
        <SummaryCard title="Projects Completed" value="0" />
      </div>
    </div>
  );
}
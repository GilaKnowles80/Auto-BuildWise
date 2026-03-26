export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-bold">{title}</h3>
      <p className="text-xl">{value}</p>
    </div>
  );
}
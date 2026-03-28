export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">BuildWise 🚀</h1>
      <div className="flex space-x-4">
        <a href="/" className="hover:text-gray-300">Summary</a>
        <a href="/structural" className="hover:text-gray-300">StructuralTPC</a>
        <a href="/engineering" className="hover:text-gray-300">EngineeringBOQ</a>
        <a href="/estimator" className="hover:text-gray-300">TotalEstimator</a>
        <a href="/drawings" className="hover:text-gray-300">DrawingPerspective</a>
        <a href="/drawings" className="hover:text-gray-300">AdminDashboard</a>
      </div>
    </div>
  );
}
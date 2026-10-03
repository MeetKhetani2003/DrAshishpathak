"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

export default function AdminInsights() {
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    try {
      const res = await fetch('/api/insights');
      const data = await res.json();
      setInsights(data);
    } catch (error) {
      console.error('Failed to fetch insights', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteInsight = async (id: string) => {
    if (!confirm('Are you sure you want to delete this insight?')) return;
    try {
      await fetch(`/api/insights/${id}`, { method: 'DELETE' });
      fetchInsights();
    } catch (error) {
      console.error('Failed to delete insight', error);
    }
  };

  if (loading) return <div>Loading insights...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Insights (Articles)</h2>
        <Link href="/admin/insights/new" className="bg-navy text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-navy-deep transition-colors">
          <PlusCircle className="w-4 h-4" /> Add Insight
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 text-gray-600 font-medium">Title</th>
              <th className="p-4 text-gray-600 font-medium">Category</th>
              <th className="p-4 text-gray-600 font-medium">Date</th>
              <th className="p-4 text-gray-600 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {insights.map(insight => (
              <tr key={insight._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">{insight.title}</td>
                <td className="p-4 text-gray-600">{insight.category}</td>
                <td className="p-4 text-gray-600">{insight.date}</td>
                <td className="p-4 text-right flex justify-end gap-3">
                  <Link href={`/admin/insights/${insight._id}`} className="text-blue-600 hover:text-blue-800">
                    <Edit className="w-5 h-5" />
                  </Link>
                  <button onClick={() => deleteInsight(insight._id)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {insights.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">
                  No insights found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

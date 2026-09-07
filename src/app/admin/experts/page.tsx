'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

export default function AdminExperts() {
  const [experts, setExperts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperts();
  }, []);

  const fetchExperts = async () => {
    try {
      const res = await fetch('/api/experts');
      const data = await res.json();
      setExperts(data);
    } catch (error) {
      console.error('Failed to fetch experts', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteExpert = async (id: string) => {
    if (!confirm('Are you sure you want to delete this expert?')) return;
    try {
      await fetch(`/api/experts/${id}`, { method: 'DELETE' });
      fetchExperts();
    } catch (error) {
      console.error('Failed to delete expert', error);
    }
  };

  if (loading) return <div>Loading experts...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Expert Board</h2>
        <Link href="/admin/experts/new" className="bg-navy text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-navy-deep transition-colors">
          <PlusCircle className="w-4 h-4" /> Add Expert
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4 text-gray-600 font-medium">Name</th>
              <th className="p-4 text-gray-600 font-medium">Role</th>
              <th className="p-4 text-gray-600 font-medium">Experience</th>
              <th className="p-4 text-gray-600 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {experts.map(expert => (
              <tr key={expert._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">{expert.name}</td>
                <td className="p-4 text-gray-600">{expert.role}</td>
                <td className="p-4 text-gray-600">{expert.experience}</td>
                <td className="p-4 text-right flex justify-end gap-3">
                  <Link href={`/admin/experts/${expert._id}`} className="text-blue-600 hover:text-blue-800">
                    <Edit className="w-5 h-5" />
                  </Link>
                  <button onClick={() => deleteExpert(expert._id)} className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {experts.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-gray-500">
                  No experts found. <button onClick={() => fetch('/api/seed').then(() => fetchExperts())} className="text-blue-600 underline">Seed from existing data?</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import AdminInsightForm from '@/components/AdminInsightForm';

export default function EditInsightPage() {
  const params = useParams();
  const [insight, setInsight] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.id) {
      fetch(`/api/insights/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setInsight(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [params?.id]);

  if (loading) return <div>Loading insight data...</div>;
  if (!insight) return <div>Insight not found.</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Insight</h2>
      <AdminInsightForm initialData={insight} />
    </div>
  );
}

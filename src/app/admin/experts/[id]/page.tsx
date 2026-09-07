'use client';
import { useEffect, useState } from 'react';
import AdminExpertForm from '@/components/AdminExpertForm';
import { useParams } from 'next/navigation';

export default function EditExpertPage() {
  const { id } = useParams();
  const [expert, setExpert] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/experts')
      .then(res => res.json())
      .then(data => {
        const found = data.find((e: any) => e._id === id);
        setExpert(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!expert) return <div>Expert not found</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Expert</h2>
      <AdminExpertForm initialData={expert} />
    </div>
  );
}

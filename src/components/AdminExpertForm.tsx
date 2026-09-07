'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminExpertForm({ initialData = null }: { initialData?: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    expertId: initialData?.expertId || '',
    name: initialData?.name || '',
    role: initialData?.role || '',
    experience: initialData?.experience || '',
    initials: initialData?.initials || '',
    jurisdiction: initialData?.jurisdiction || '',
    qualifications: initialData?.qualifications?.join(', ') || '',
    practiceAreas: initialData?.practiceAreas?.join(', ') || '',
    bio: initialData?.bio?.join('\n\n') || '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const submitData = new FormData();
    submitData.append('expertId', formData.expertId);
    submitData.append('name', formData.name);
    submitData.append('role', formData.role);
    submitData.append('experience', formData.experience);
    submitData.append('initials', formData.initials);
    submitData.append('jurisdiction', formData.jurisdiction);
    
    // Parse comma separated lists and newlines
    submitData.append('qualifications', JSON.stringify(formData.qualifications.split(',').map((s: string) => s.trim()).filter(Boolean)));
    submitData.append('practiceAreas', JSON.stringify(formData.practiceAreas.split(',').map((s: string) => s.trim()).filter(Boolean)));
    submitData.append('bio', JSON.stringify(formData.bio.split('\n\n').map((s: string) => s.trim()).filter(Boolean)));
    
    if (imageFile) {
      submitData.append('image', imageFile);
    }

    try {
      const url = initialData ? `/api/experts/${initialData._id}` : '/api/experts';
      const method = initialData ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        body: submitData,
      });

      if (res.ok) {
        router.push('/admin/experts');
        router.refresh();
      } else {
        alert('Failed to save expert');
      }
    } catch (error) {
      console.error(error);
      alert('Error occurred while saving');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 max-w-3xl">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID (slug)</label>
          <input required type="text" name="expertId" value={formData.expertId} onChange={handleChange} className="w-full border rounded p-2" placeholder="e.g. dr-john-doe" disabled={!!initialData} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
          <input required type="text" name="role" value={formData.role} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
          <input required type="text" name="experience" value={formData.experience} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initials</label>
          <input required type="text" name="initials" value={formData.initials} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Jurisdiction</label>
          <input required type="text" name="jurisdiction" value={formData.jurisdiction} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Qualifications (comma separated)</label>
          <input type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Practice Areas (comma separated)</label>
          <input type="text" name="practiceAreas" value={formData.practiceAreas} onChange={handleChange} className="w-full border rounded p-2" />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Bio Paragraphs (separated by double newline)</label>
          <textarea rows={5} name="bio" value={formData.bio} onChange={handleChange} className="w-full border rounded p-2"></textarea>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
          {initialData?.image && <img src={initialData.image} alt="Current" className="w-24 h-24 object-cover mb-2 rounded" />}
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} className="w-full border rounded p-2" />
        </div>
      </div>
      
      <div className="flex justify-end gap-3">
        <Link href="/admin/experts" className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-50">Cancel</Link>
        <button type="submit" disabled={loading} className="px-4 py-2 bg-navy text-white rounded hover:bg-navy-deep disabled:opacity-50">
          {loading ? 'Saving...' : 'Save Expert'}
        </button>
      </div>
    </form>
  );
}

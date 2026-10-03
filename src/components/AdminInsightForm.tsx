"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { insightCategories } from '@/data/insights';

type InsightProps = {
  initialData?: any;
};

export default function AdminInsightForm({ initialData }: InsightProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: insightCategories[1] || 'Medico-Legal',
    kind: 'Concept Note',
    excerpt: '',
    date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
    readingTime: '5 min read',
    image: '/images/insights/default.jpg',
    body: '',
    takeaways: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        body: initialData.body?.join('\n\n') || '',
        takeaways: initialData.takeaways?.join('\n') || ''
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        body: formData.body.split('\n\n').map(p => p.trim()).filter(Boolean),
        takeaways: formData.takeaways.split('\n').map(t => t.trim()).filter(Boolean),
      };

      const url = initialData ? `/api/insights/${initialData._id}` : '/api/insights';
      const method = initialData ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Failed to save insight');
      }

      router.push('/admin/insights');
      router.refresh();
    } catch (error) {
      console.error(error);
      alert('Error saving insight');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            placeholder="Insight Title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            placeholder="Leave blank to auto-generate"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
          >
            {insightCategories.filter(c => c !== 'All').map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kind *</label>
          <select
            name="kind"
            required
            value={formData.kind}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
          >
            <option value="Concept Note">Concept Note</option>
            <option value="Practice Brief">Practice Brief</option>
            <option value="Documentation Guide">Documentation Guide</option>
            <option value="Insight">Insight</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
          <input
            type="text"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            placeholder="e.g. 14 January 2026"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Reading Time *</label>
          <input
            type="text"
            name="readingTime"
            required
            value={formData.readingTime}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            placeholder="e.g. 6 min read"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
          <input
            type="text"
            name="image"
            required
            value={formData.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            placeholder="/images/insights/default.jpg"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt *</label>
          <textarea
            name="excerpt"
            required
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            rows={3}
            placeholder="Short summary of the insight..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Body Paragraphs (Separate by blank line) *</label>
          <textarea
            name="body"
            required
            value={formData.body}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            rows={8}
            placeholder="Paragraph 1&#10;&#10;Paragraph 2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Takeaways (Separate by new line) *</label>
          <textarea
            name="takeaways"
            required
            value={formData.takeaways}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2 focus:border-navy focus:outline-none"
            rows={4}
            placeholder="Takeaway 1&#10;Takeaway 2"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-navy text-white rounded hover:bg-navy-deep disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Insight'}
        </button>
      </div>
    </form>
  );
}

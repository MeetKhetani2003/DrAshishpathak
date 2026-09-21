'use client';

import { useState, useEffect } from 'react';

export default function ContactInfoPage() {
  const [formData, setFormData] = useState({
    address: '',
    phone: '',
    email: '',
    workingHours: '',
    facebook: '',
    twitter: '',
    linkedin: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const fetchContactInfo = async () => {
    try {
      const res = await fetch('/api/contact');
      if (res.ok) {
        const data = await res.json();
        if (data && Object.keys(data).length > 0) {
          setFormData({
            address: data.address || '',
            phone: data.phone || '',
            email: data.email || '',
            workingHours: data.workingHours || '',
            facebook: data.facebook || '',
            twitter: data.twitter || '',
            linkedin: data.linkedin || ''
          });
        }
      }
    } catch (error) {
      console.error('Failed to fetch contact info', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    
    try {
      const res = await fetch('/api/contact', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setMessage('Contact info saved successfully!');
      } else {
        setMessage('Failed to save contact info.');
      }
    } catch (error) {
      console.error('Failed to save contact info', error);
      setMessage('An error occurred while saving.');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-navy">Manage Contact Information</h2>
      
      {message && (
        <div className={`p-4 mb-6 rounded-md ${message.includes('success') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input 
              type="email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input 
              type="text" 
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
          <textarea 
            name="address" 
            required 
            rows={3}
            value={formData.address} 
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Working Hours *</label>
          <input 
            type="text" 
            name="workingHours" 
            required 
            value={formData.workingHours} 
            onChange={handleChange}
            placeholder="e.g., Mon - Fri: 9:00 AM - 6:00 PM"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Social Links (Optional)</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
              <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</label>
              <input type="url" name="twitter" value={formData.twitter} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
              <input type="url" name="facebook" value={formData.facebook} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            disabled={saving}
            className="bg-navy hover:bg-navy/90 text-white font-bold py-2 px-6 rounded-md transition-colors"
          >
            {saving ? 'Saving...' : 'Save Contact Info'}
          </button>
        </div>
      </form>
    </div>
  );
}

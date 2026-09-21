'use client';

import { useState, useEffect } from 'react';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: string;
  createdAt: string;
}

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/inquiries');
      if (res.ok) {
        const data = await res.json();
        setInquiries(data);
      }
    } catch (error) {
      console.error('Failed to fetch inquiries', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      const res = await fetch(`/api/inquiries/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setInquiries(inquiries.filter(i => i._id !== id));
        if (selectedInquiry?._id === id) setSelectedInquiry(null);
      }
    } catch (error) {
      console.error('Failed to delete inquiry', error);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        const updated = await res.json();
        setInquiries(inquiries.map(i => i._id === id ? updated : i));
        if (selectedInquiry?._id === id) setSelectedInquiry(updated);
      }
    } catch (error) {
      console.error('Failed to update status', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex gap-6 h-[80vh]">
      <div className="w-1/3 bg-white p-4 rounded-lg shadow-sm border border-gray-200 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-navy">Inquiries</h2>
        {inquiries.length === 0 ? (
          <p className="text-gray-500">No inquiries yet.</p>
        ) : (
          <ul className="space-y-3">
            {inquiries.map((inq) => (
              <li 
                key={inq._id}
                onClick={() => {
                  setSelectedInquiry(inq);
                  if (inq.status === 'new') updateStatus(inq._id, 'read');
                }}
                className={`p-3 border rounded-md cursor-pointer transition-colors ${selectedInquiry?._id === inq._id ? 'border-gold bg-gold/5' : 'border-gray-200 hover:border-navy'}`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-semibold">{inq.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${inq.status === 'new' ? 'bg-blue-100 text-blue-800' : inq.status === 'read' ? 'bg-gray-100 text-gray-800' : 'bg-green-100 text-green-800'}`}>
                    {inq.status}
                  </span>
                </div>
                <div className="text-sm text-gray-600 truncate">{inq.subject || 'No subject'}</div>
                <div className="text-xs text-gray-400 mt-2">{new Date(inq.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="w-2/3 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {selectedInquiry ? (
          <div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-navy">{selectedInquiry.subject || 'New Inquiry'}</h2>
                <div className="text-sm text-gray-500 mt-1">From: {selectedInquiry.name} &lt;{selectedInquiry.email}&gt;</div>
                {selectedInquiry.phone && <div className="text-sm text-gray-500">Phone: {selectedInquiry.phone}</div>}
                <div className="text-sm text-gray-500">Received: {new Date(selectedInquiry.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex gap-2">
                <select 
                  className="border rounded p-2 text-sm"
                  value={selectedInquiry.status}
                  onChange={(e) => updateStatus(selectedInquiry._id, e.target.value)}
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
                <button 
                  onClick={() => deleteInquiry(selectedInquiry._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-6 border-t pt-6 whitespace-pre-wrap text-gray-800">
              {selectedInquiry.message}
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-400">
            Select an inquiry to view details
          </div>
        )}
      </div>
    </div>
  );
}

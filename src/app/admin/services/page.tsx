'use client';

import { useState, useEffect } from 'react';

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'FileText',
    features: ''
  });

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      if (res.ok) {
        const data = await res.json();
        setServices(data);
      }
    } catch (error) {
      console.error('Failed to fetch services', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const payload = {
      ...formData,
      features: formData.features.split('\n').filter(f => f.trim() !== '')
    };
    
    try {
      if (isEditing && currentId) {
        const res = await fetch(`/api/services/${currentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          fetchServices();
          resetForm();
        }
      } else {
        const res = await fetch('/api/services', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          fetchServices();
          resetForm();
        }
      }
    } catch (error) {
      console.error('Failed to save service', error);
    }
  };

  const editService = (service: Service) => {
    setIsEditing(true);
    setCurrentId(service._id);
    setFormData({
      title: service.title,
      description: service.description,
      icon: service.icon || 'FileText',
      features: service.features.join('\n')
    });
  };

  const deleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    try {
      const res = await fetch(`/api/services/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setServices(services.filter(s => s._id !== id));
      }
    } catch (error) {
      console.error('Failed to delete service', error);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentId(null);
    setFormData({ title: '', description: '', icon: 'FileText', features: '' });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* List */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-6 text-navy">Manage Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(service => (
            <div key={service._id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{service.title}</h3>
                <div className="flex gap-2">
                  <button onClick={() => editService(service)} className="text-blue-500 hover:text-blue-700 text-sm">Edit</button>
                  <button onClick={() => deleteService(service._id)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
              <div className="text-xs text-gray-500">
                {service.features.length} features listed
              </div>
            </div>
          ))}
          {services.length === 0 && (
            <div className="col-span-full p-8 text-center text-gray-500 border border-dashed rounded-lg">
              No services found. Add one using the form.
            </div>
          )}
        </div>
      </div>
      
      {/* Form */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-fit">
        <h3 className="text-lg font-bold mb-4 text-navy">
          {isEditing ? 'Edit Service' : 'Add New Service'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
            <input 
              type="text" 
              name="title" 
              required 
              value={formData.title} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea 
              name="description" 
              required 
              rows={3}
              value={formData.description} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Lucide Icon Name</label>
            <input 
              type="text" 
              name="icon" 
              value={formData.icon} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="e.g. Shield, Scale, Stethoscope"
            />
            <p className="text-xs text-gray-500 mt-1">Must be a valid Lucide icon name.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Features (One per line)</label>
            <textarea 
              name="features" 
              rows={4}
              value={formData.features} 
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-sm"
              placeholder="Feature 1&#10;Feature 2"
            ></textarea>
          </div>
          
          <div className="flex gap-2 pt-2">
            <button 
              type="submit" 
              className="flex-1 bg-navy hover:bg-navy/90 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              {isEditing ? 'Update' : 'Create'}
            </button>
            {isEditing && (
              <button 
                type="button" 
                onClick={resetForm}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

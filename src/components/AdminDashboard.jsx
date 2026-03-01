import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('portfolio');
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({ title: '', image: '', category: '', number: '', description: '' });
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        fetchItems();
    }, [activeTab]);

    const fetchItems = async () => {
        try {
            const endpoint = activeTab === 'portfolio' ? 'portfolio' : 'services';
            const response = await axios.get(`/api/${endpoint}`);
            setItems(response.data);
        } catch (error) {
            console.error(`Error fetching ${activeTab}:`, error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const endpoint = activeTab === 'portfolio' ? 'portfolio' : 'services';
            if (editingId) {
                await axios.put(`/api/${endpoint}/${editingId}`, formData);
            } else {
                await axios.post(`/api/${endpoint}`, formData);
            }
            setFormData({ title: '', image: '', category: '', number: '', description: '' });
            setEditingId(null);
            fetchItems();
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };

    const handleEdit = (item) => {
        setFormData(item);
        setEditingId(item.id);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            try {
                const endpoint = activeTab === 'portfolio' ? 'portfolio' : 'services';
                await axios.delete(`/api/${endpoint}/${id}`);
                fetchItems();
            } catch (error) {
                console.error('Error deleting item:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#1B1C1A] text-white p-8 md:p-12 lg:p-24 ">
            <div className="max-w-7xl mx-auto pt-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-syne uppercase tracking-tighter">Admin Dashboard</h1>
                    <div className="flex bg-[#212121] p-1 rounded-sm border border-white/5">
                        <button
                            onClick={() => { setActiveTab('portfolio'); setEditingId(null); setFormData({ title: '', image: '', category: '', number: '', description: '' }); }}
                            className={`px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'portfolio' ? 'bg-[#EB5A28] text-white' : 'text-gray-500 hover:text-white'}`}
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => { setActiveTab('services'); setEditingId(null); setFormData({ title: '', image: '', category: '', number: '', description: '' }); }}
                            className={`px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all ${activeTab === 'services' ? 'bg-[#EB5A28] text-white' : 'text-gray-500 hover:text-white'}`}
                        >
                            Services
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form Section */}
                    <div className="bg-[#212121] p-8 rounded-sm shadow-xl h-fit border border-white/5">
                        <h2 className="text-2xl font-bold mb-8 text-[#EB5A28]">{editingId ? 'Edit Item' : 'Add New Item'}</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="bg-[#2D2D2D] border border-white/10 p-3 rounded-sm focus:outline-none focus:border-[#EB5A28] transition-colors"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Image URL or Local Path</label>
                                <input
                                    type="text"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    className="bg-[#2D2D2D] border border-white/10 p-3 rounded-sm focus:outline-none focus:border-[#EB5A28] transition-colors"
                                    required
                                />
                                <p className="text-[10px] text-gray-600 italic">Example: /assets/PRINTING.png or https://...</p>
                            </div>

                            {activeTab === 'portfolio' ? (
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Category</label>
                                    <input
                                        type="text"
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="bg-[#2D2D2D] border border-white/10 p-3 rounded-sm focus:outline-none focus:border-[#EB5A28] transition-colors"
                                        placeholder="REACH YOUR TARGET AUDIENCE"
                                    />
                                </div>
                            ) : (
                                <>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Service Number</label>
                                        <input
                                            type="text"
                                            value={formData.number}
                                            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                                            className="bg-[#2D2D2D] border border-white/10 p-3 rounded-sm focus:outline-none focus:border-[#EB5A28] transition-colors"
                                            placeholder="001"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Description</label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="bg-[#2D2D2D] border border-white/10 p-3 rounded-sm focus:outline-none focus:border-[#EB5A28] transition-colors min-h-[100px]"
                                            required
                                        />
                                    </div>
                                </>
                            )}

                            <button
                                type="submit"
                                className="bg-[#EB5A28] text-white font-bold py-3 px-6 rounded-sm hover:bg-white hover:text-[#EB5A28] transition-all active:scale-[0.98] mt-4 uppercase tracking-[0.2em] text-xs"
                            >
                                {editingId ? 'Update Item' : 'Save Item'}
                            </button>
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={() => { setEditingId(null); setFormData({ title: '', image: '', category: '', number: '', description: '' }); }}
                                    className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                                >
                                    Cancel Edit
                                </button>
                            )}
                        </form>
                    </div>

                    {/* List Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-2xl font-bold uppercase font-syne tracking-tight">{activeTab} Items</h2>
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{items.length} Total</span>
                        </div>
                        <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                            {items.map((item) => (
                                <div key={item.id} className="bg-[#212121] p-6 rounded-sm border border-white/5 flex items-center justify-between hover:border-[#EB5A28]/30 transition-colors group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-sm overflow-hidden bg-black/50 border border-white/5">
                                            <img
                                                src={item.image.startsWith('http') ? item.image : `/api${item.image}`}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Error'; }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight uppercase font-syne">{item.title}</h3>
                                            <p className="text-[10px] text-[#EB5A28] font-bold uppercase tracking-widest opacity-60 mt-1">
                                                {activeTab === 'portfolio' ? item.category : `(${item.number})`}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="text-white hover:text-[#EB5A28] transition-colors text-xs font-bold uppercase tracking-widest"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="text-red-500 hover:text-red-400 transition-colors text-xs font-bold uppercase tracking-widest"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

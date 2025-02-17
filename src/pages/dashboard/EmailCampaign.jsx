import React, { useState } from 'react';
import { Mail, Send, Users, AlertCircle, ChevronDown, Search, Filter, BarChart2, FilterIcon, X } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';

const EmailCampaign = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('drafts');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        status: 'all',
        dateRange: '',
    });
    const [newCampaign, setNewCampaign] = useState({
        name: '',
        status: 'draft',
        sent: 0,
        opened: 0,
        clicked: 0,
    });

    const campaigns = [
        { id: 1, name: 'Welcome Series', status: 'active', sent: 1234, opened: 78, clicked: 45 },
        { id: 2, name: 'Product Launch', status: 'draft', sent: 0, opened: 0, clicked: 0 },
        { id: 3, name: 'Monthly Newsletter', status: 'scheduled', sent: 0, opened: 0, clicked: 0 },
    ];

    // Apply filter logic to the campaigns
    const filteredCampaigns = campaigns.filter((campaign) => {
        if (filters.status !== 'all' && campaign.status !== filters.status) return false;
        if (filters.dateRange && !campaign.createdAt.includes(filters.dateRange)) return false;
        return true;
    });

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    const applyFilters = () => {
        console.log('Filters applied:', filters);
        setModalOpen(false);  // Close modal after applying filters
    };

    const resetFilters = () => {
        setFilters({ status: '', startDate: '', endDate: '' });
    };
    const handleNewCampaignChange = (e) => {
        const { name, value } = e.target;
        setNewCampaign((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCreateNewCampaign = () => {
        console.log('New Campaign Created:', newCampaign);
        campaigns.push({ ...newCampaign, id: campaigns.length + 1 }); // Add new campaign to the list
        setModalOpen(false); // Close modal after campaign creation
        setNewCampaign({
            name: '',
            status: 'draft',
            sent: 0,
            opened: 0,
            clicked: 0,
        }); // Reset form
    };
    return (
        <DashboardLayout>
            <div className="min-h-screen bg-gray-50">
                {/* Top Navigation Bar */}
                <div className="bg-white border-b">
                    <div className="px-6 py-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-gray-900">Email Campaigns</h1>
                            <div className="flex items-center space-x-4">
                            <button
                                    onClick={() => setModalOpen(true)}
                                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    New Campaign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

{/* New Campaign Modal */}
{isModalOpen && (
                <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h3 className="text-xl font-semibold mb-4">Create New Campaign</h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Campaign Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={newCampaign.name}
                                    onChange={handleNewCampaignChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="status"
                                    name="status"
                                    value={newCampaign.status}
                                    onChange={handleNewCampaignChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="draft">Draft</option>
                                    <option value="active">Active</option>
                                    <option value="scheduled">Scheduled</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                            >
                                Cancel
                            </button>
                            <div>
                                <button
                                    onClick={handleCreateNewCampaign}
                                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                >
                                    Create Campaign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {[
                            { title: 'Total Sent', value: '45.2K', change: '+12.3%', icon: Send },
                            { title: 'Open Rate', value: '68.7%', change: '+4.1%', icon: Mail },
                            { title: 'Click Rate', value: '42.3%', change: '+8.9%', icon: Users },
                            { title: 'Conversion', value: '12.5%', change: '+3.2%', icon: BarChart2 }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                    </div>
                                    <div className="bg-indigo-50 p-3 rounded-lg">
                                        <stat.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                                    <span className="text-gray-500 text-sm ml-2">vs last month</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Campaign Section */}
                    <div className="bg-white rounded-xl shadow-sm">
                        {/* Tabs and Search */}
                        <div className="p-4 border-b flex items-center justify-between">
                            <div className="flex space-x-4">
                                {['All', 'Drafts', 'Scheduled', 'Sent'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setSelectedTab(tab.toLowerCase())}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${selectedTab === tab.toLowerCase()
                                            ? 'bg-indigo-50 text-indigo-600'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        className="pl-10 pr-4 py-2 w-64 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        placeholder="Search campaigns..."
                                    />
                                </div>
                                {/* Filter Button */}
                                <button
                                    onClick={() => setModalOpen(true)}
                                    className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-md"
                                >
                                    <FilterIcon className="w-5 h-5 mr-2" />
                                    Filters
                                </button>

                                {/* Filter Modal */}
                                {isModalOpen && (
                                    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                                        <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
                                            <button
                                                onClick={() => setModalOpen(false)}
                                                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                                            >
                                                <X className="w-6 h-6" />
                                            </button>
                                            <h3 className="text-xl font-semibold mb-4">Filter Campaigns</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                                        Status
                                                    </label>
                                                    <select
                                                        id="status"
                                                        name="status"
                                                        value={filters.status}
                                                        onChange={handleFilterChange}
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                    >
                                                        <option value="">All</option>
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                        <option value="pending">Pending</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
                                                        Start Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="startDate"
                                                        name="startDate"
                                                        value={filters.startDate}
                                                        onChange={handleFilterChange}
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                                        End Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="endDate"
                                                        name="endDate"
                                                        value={filters.endDate}
                                                        onChange={handleFilterChange}
                                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-6 flex justify-between">
                                                <button
                                                    onClick={resetFilters}
                                                    className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-800"
                                                >
                                                    Reset
                                                </button>
                                                <div>
                                                    <button
                                                        onClick={applyFilters}
                                                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                                                    >
                                                        Apply Filters
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Filter Modal */}
                        {isFilterOpen && (
                            <div className="absolute z-10 top-16 left-0 w-full bg-white shadow-lg rounded-lg p-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Status</label>
                                        <select
                                            name="status"
                                            value={filters.status}
                                            onChange={handleFilterChange}
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        >
                                            <option value="all">All</option>
                                            <option value="active">Active</option>
                                            <option value="draft">Draft</option>
                                            <option value="scheduled">Scheduled</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Date Range</label>
                                        <input
                                            type="text"
                                            name="dateRange"
                                            value={filters.dateRange}
                                            onChange={handleFilterChange}
                                            placeholder="Select Date Range"
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            onClick={() => setIsFilterOpen(false)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={() => setIsFilterOpen(false)}
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Campaigns Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Campaign Name
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Recipients
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Open Rate
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {filteredCampaigns.map((campaign) => (
                                        <tr key={campaign.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-indigo-100 flex items-center justify-center">
                                                        <Mail className="w-5 h-5 text-indigo-600" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                                                        <div className="text-sm text-gray-500">Created 2 days ago</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                                                        campaign.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                                            'bg-yellow-100 text-yellow-800'}`}>
                                                    {campaign.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {campaign.sent.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {campaign.opened}%
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                                <button className="text-red-600 hover:text-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    Previous
                                </button>
                                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of <span className="font-medium">97</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-l-md text-gray-700 bg-white hover:bg-gray-50">
                                            Previous
                                        </button>
                                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-white hover:bg-gray-50">
                                            Next
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default EmailCampaign;

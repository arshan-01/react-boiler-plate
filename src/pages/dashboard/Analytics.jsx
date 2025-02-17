import React from 'react';
import { Mail, Users, Zap, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';

const Analytics = () => {
    const data = [
        { name: 'Jan', sent: 4000, opened: 2400, clicked: 1200 },
        { name: 'Feb', sent: 3000, opened: 1398, clicked: 800 },
        { name: 'Mar', sent: 2000, opened: 9800, clicked: 2900 },
        { name: 'Apr', sent: 2780, opened: 3908, clicked: 1800 },
        { name: 'May', sent: 1890, opened: 4800, clicked: 2400 },
        { name: 'Jun', sent: 2390, opened: 3800, clicked: 2100 },
    ];

    return (
        <DashboardLayout>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b">
                    <div className="px-6 py-4">
                        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {[
                            {
                                title: 'Total Emails',
                                value: '234,578',
                                change: '+12.3%',
                                icon: Mail,
                                trend: 'up'
                            },
                            {
                                title: 'Open Rate',
                                value: '68.7%',
                                change: '+4.1%',
                                icon: Zap,
                                trend: 'up'
                            },
                            {
                                title: 'Click Rate',
                                value: '42.3%',
                                change: '-2.3%',
                                icon: Users,
                                trend: 'down'
                            },
                            {
                                title: 'Avg Response Time',
                                value: '2.4h',
                                change: '-12.5%',
                                icon: Clock,
                                trend: 'down'
                            }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                    </div>
                                    <div className="bg-indigo-50 p-3 rounded-lg">
                                        <stat.icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center">
                                    {stat.trend === 'up' ? (
                                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                                    ) : (
                                        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                                    )}
                                    <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                                        }`}>
                                        {stat.change}
                                    </span>
                                    <span className="text-gray-500 text-sm ml-2">vs last month</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Email Campaign Analytics Table */}
                    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Email Campaign Analytics</h2>

                        {/* Table Display */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Month</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sent</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Opened</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Clicked</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="px-4 py-2 text-sm text-gray-700">{item.name}</td>
                                            <td className="px-4 py-2 text-sm text-gray-700">{item.sent}</td>
                                            <td className="px-4 py-2 text-sm text-gray-700">{item.opened}</td>
                                            <td className="px-4 py-2 text-sm text-gray-700">{item.clicked}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Analytics;

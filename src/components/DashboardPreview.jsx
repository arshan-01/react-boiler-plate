import React from 'react'

const DashboardPreview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-gray-500 text-sm font-medium">Total Campaigns</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">24</span>
          <span className="ml-2 text-green-600 text-sm">+12%</span>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-gray-500 text-sm font-medium">Active Subscribers</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">3,427</span>
          <span className="ml-2 text-green-600 text-sm">+8%</span>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-gray-500 text-sm font-medium">Average Open Rate</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">42%</span>
          <span className="ml-2 text-red-600 text-sm">-3%</span>
        </div>
      </div>
    </div>
  );

export default DashboardPreview
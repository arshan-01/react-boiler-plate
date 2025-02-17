import React, { useState } from 'react';
import { Mail, Edit2, Trash2, Eye, Send, Check, Upload, X, Search } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';

const Contacts = () => {
  const [showSendModal, setShowSendModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data
  const [emails, setEmails] = useState([
    {
      id: 1,
      name: "John Doe",
      category: "Customer",
      email: "john@example.com",
      status: "delivered",
      lastSent: "2025-02-17",
      sentCount: 3,
      subject: "Welcome Onboard",
      message: "Thank you for joining us!"
    },
    {
      id: 2,
      name: "Jane Smith",
      category: "Lead",
      email: "jane@example.com",
      status: "opened",
      lastSent: "2025-02-16",
      sentCount: 2,
      subject: "Product Demo",
      message: "Would you like to schedule a demo?"
    },
    {
      id: 3,
      name: "Bob Wilson",
      category: "Partner",
      email: "bob@example.com",
      status: "sent",
      lastSent: "2025-02-15",
      sentCount: 1,
      subject: "Partnership Update",
      message: "Let's discuss our next steps"
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered':
        return <div className="flex"><Check className="w-4 h-4 text-gray-500" /><Check className="w-4 h-4 -ml-2 text-gray-500" /></div>;
      case 'opened':
        return <div className="flex"><Check className="w-4 h-4 text-blue-500" /><Check className="w-4 h-4 -ml-2 text-blue-500" /></div>;
      case 'sent':
        return <Check className="w-4 h-4 text-gray-500" />;
      default:
        return null;
    }
  };

  const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <DashboardLayout>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Email Delivery System</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Upload className="w-4 h-4" />
                Import CSV/Excel
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sent</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Sent Count</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white text-left divide-y divide-gray-200">
                {emails
                  .filter(email => 
                    email.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    email.email.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((email) => (
                    <tr key={email.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">{email.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{email.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{email.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {getStatusIcon(email.status)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{email.lastSent}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{email.sentCount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedEmail(email);
                              setShowSendModal(true);
                            }}
                            className="p-1 text-blue-600 hover:text-blue-800"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedEmail(email);
                              setShowViewModal(true);
                            }}
                            className="p-1 text-gray-600 hover:text-gray-800"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedEmail(email);
                              setShowEditModal(true);
                            }}
                            className="p-1 text-green-600 hover:text-green-800"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedEmail(email);
                              setShowDeleteModal(true);
                            }}
                            className="p-1 text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showSendModal && (
        <Modal
          show={showSendModal}
          onClose={() => setShowSendModal(false)}
          title="Send Email"
        >
          <div className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
              <input
                type="email"
                value={selectedEmail?.email}
                disabled
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowSendModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowSendModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showViewModal && (
        <Modal
          show={showViewModal}
          onClose={() => setShowViewModal(false)}
          title="View Email Details"
        >
          <div className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-500">Name:</label>
              <p className="mt-1">{selectedEmail?.name}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Category:</label>
              <p className="mt-1">{selectedEmail?.category}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Email:</label>
              <p className="mt-1">{selectedEmail?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Last Subject:</label>
              <p className="mt-1">{selectedEmail?.subject}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Last Message:</label>
              <p className="mt-1">{selectedEmail?.message}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Status:</label>
              <p className="mt-1 flex items-center">{getStatusIcon(selectedEmail?.status)}</p>
            </div>
          </div>
        </Modal>
      )}

      {showEditModal && (
        <Modal
          show={showEditModal}
          onClose={() => setShowEditModal(false)}
          title="Edit Contact"
        >
          <div className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
              <input
                type="text"
                defaultValue={selectedEmail?.name}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
              <select
                defaultValue={selectedEmail?.category}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="Customer">Customer</option>
                <option value="Lead">Lead</option>
                <option value="Partner">Partner</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                defaultValue={selectedEmail?.email}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showDeleteModal && (
        <Modal
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          title="Confirm Delete"
        >
          <div className="space-y-4">
            <p className="text-gray-700">Are you sure you want to delete the contact for {selectedEmail?.name}?</p>
            <p className="text-sm text-gray-500">This action cannot be undone.</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setEmails(emails.filter(email => email.id !== selectedEmail?.id));
                  setShowDeleteModal(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
    </DashboardLayout>
  );
};

export default Contacts;
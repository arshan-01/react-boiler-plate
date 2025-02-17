import React from 'react';
import { Book, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import DashboardLayout from '../../layouts/DashboardLayout';

const HelpSupport = () => {
    return (
        <DashboardLayout>
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-bold">Help & Support</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Contact Support Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <MessageCircle className="w-5 h-5 text-gray-600" />
                            Contact Support
                        </div>
                        <div className="space-y-4 mt-4">
                            <div>
                                <label className="text-sm font-medium">Subject</label>
                                <input
                                    className="mt-1 p-2 border rounded-md w-full"
                                    placeholder="What do you need help with?"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    className="mt-1 p-2 border rounded-md w-full min-h-[100px]"
                                    placeholder="Describe your issue..."
                                />
                            </div>
                            <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Submit Ticket
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* Quick Support Card */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <Phone className="w-5 h-5 text-gray-600" />
                                Quick Support
                            </div>
                            <div className="space-y-2 mt-4">
                                <p className="text-sm">Email us at:</p>
                                <p className="font-medium">support@emaildelivery.com</p>
                                <p className="text-sm mt-4">Call us at:</p>
                                <p className="font-medium">+1 (555) 123-4567</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Available Monday - Friday, 9AM - 5PM EST
                                </p>
                            </div>
                        </div>

                        {/* Documentation Card */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <Book className="w-5 h-5 text-gray-600" />
                                Documentation
                            </div>
                            <div className="space-y-4 mt-4">
                                <button className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                    API Documentation
                                </button>
                                <button className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                    User Guide
                                </button>
                                <button className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
                                    FAQs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default HelpSupport;

import React, { useState, useEffect } from 'react';
import { Bell, Key, Mail, User } from 'lucide-react';
import DashboardLayout from '../../../layouts/DashboardLayout';

const Settings = () => {
    const [email, setEmail] = useState('admin@acmecorp.com');
    const [smtpServer, setSmtpServer] = useState('smtp.acmecorp.com');
    const [smtpPort, setSmtpPort] = useState(587);
    const [apiKey, setApiKey] = useState('••••••••••••••••');
    const [apiKeyChanged, setApiKeyChanged] = useState(false);
    const [apiKeyMessage, setApiKeyMessage] = useState('');
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [errorAlerts, setErrorAlerts] = useState(true);
    const [emailFrequency, setEmailFrequency] = useState('daily');

    // Handle saving SMTP settings
    const handleSaveConnection = () => {
        console.log("SMTP settings saved!");
        setApiKeyMessage('API key will not be shown again after this change.');
    };

    // Handle testing SMTP connection
    const handleTestConnection = () => {
        console.log("Testing SMTP connection...");
    };

    // Handle notification settings save
    const handleNotificationSave = () => {
        console.log("Notification settings saved!");
    };

    // Handle email settings save
    const handleEmailSave = () => {
        console.log("Email settings saved!");
    };

    // Handle changes to email and SMTP server
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleSmtpServerChange = (e) => setSmtpServer(e.target.value);
    const handleSmtpPortChange = (e) => setSmtpPort(e.target.value);

    // Handle changes to the API Key
    const handleApiKeyChange = (e) => {
        setApiKey(e.target.value);
        setApiKeyChanged(true);
    };

    // Handle email frequency change
    const handleEmailFrequencyChange = (e) => setEmailFrequency(e.target.value);

    useEffect(() => {
        if (apiKeyChanged) {
            setApiKeyMessage('API key will not be shown again after this change.');
        }
    }, [apiKeyChanged]);

    return (
        <DashboardLayout>
            <div className="p-6 space-y-6">
                <h1 className="text-2xl font-bold">Settings</h1>

                <div className="grid gap-6">
                    {/* Account Settings Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <User className="w-5 h-5 text-gray-600" />
                            Account Settings
                        </div>
                        <div className="space-y-4 mt-4">
                            <div>
                                <label className="text-sm font-medium">Company Name</label>
                                <input
                                    className="mt-1 p-2 border rounded-md w-full"
                                    defaultValue="Acme Corp"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Email Address</label>
                                <input
                                    className="mt-1 p-2 border rounded-md w-full"
                                    value={email}
                                    onChange={handleEmailChange}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <p className="text-xs text-gray-500 mt-1">We will send important updates to this email.</p>
                            </div>
                        </div>
                    </div>

                    {/* Email Settings Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <Mail className="w-5 h-5 text-gray-600" />
                            Email Settings
                        </div>
                        <div className="space-y-4 mt-4">
                            <div>
                                <label className="text-sm font-medium">SMTP Server</label>
                                <input
                                    className="mt-1 p-2 border rounded-md w-full"
                                    value={smtpServer}
                                    onChange={handleSmtpServerChange}
                                    placeholder="Enter SMTP Server"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">SMTP Port</label>
                                <input
                                    className="mt-1 p-2 border rounded-md w-full"
                                    value={smtpPort}
                                    onChange={handleSmtpPortChange}
                                    type="number"
                                    placeholder="Enter SMTP Port"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">API Key</label>
                                <input
                                    className="mt-1 p-2 border rounded-md w-full"
                                    type="password"
                                    value={apiKey}
                                    onChange={handleApiKeyChange}
                                    placeholder="••••••••••••••••"
                                />
                                {apiKeyMessage && (
                                    <p className="text-xs text-red-500 mt-1">{apiKeyMessage}</p>
                                )}
                            </div>

                            {/* Buttons for SMTP settings */}
                            <div className="flex space-x-4 mt-4">
                                <button
                                    onClick={handleTestConnection}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Test Connection
                                </button>
                                <button
                                    onClick={handleSaveConnection}
                                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                >
                                    Save Connection
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notifications Card */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                            <Bell className="w-5 h-5 text-gray-600" />
                            Notifications
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Email Notifications</p>
                                    <p className="text-sm text-gray-500">Get notified when campaigns complete</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={emailNotifications}
                                    onChange={() => setEmailNotifications(!emailNotifications)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Error Alerts</p>
                                    <p className="text-sm text-gray-500">Get notified about delivery failures</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={errorAlerts}
                                    onChange={() => setErrorAlerts(!errorAlerts)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium">Email Frequency</p>
                                    <p className="text-sm text-gray-500">Choose how often to receive notifications</p>
                                </div>
                                <select
                                    value={emailFrequency}
                                    onChange={handleEmailFrequencyChange}
                                    className="border rounded-md p-2"
                                >
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="instant">Instant</option>
                                </select>
                            </div>
                        </div>

                        {/* Save Notification Settings */}
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleNotificationSave}
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                            >
                                Save Notification Settings
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Settings;

import { Bell, Search, User, LogOut, Settings } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white border-b h-16 flex items-center justify-between px-6 shadow-sm relative">
            <div className="flex items-center flex-1">
                <div className="w-full max-w-xl relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <button className="p-2 hover:bg-gray-100 rounded-lg relative transition">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button 
                        className="flex items-center space-x-2 focus:outline-none"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center transition hover:bg-gray-300">
                            <User className="w-5 h-5 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 hidden sm:block">John Doe</span>
                    </button>

                    {/* Dropdown with Animation */}
                    <AnimatePresence>
                        {isDropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-12 p-2 mt-2 w-32 bg-white border rounded-lg shadow-xl overflow-hidden"
                            >
                                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                    <Settings className="w-4 h-4 mr-2" />
                                    Settings
                                </button>
                                <button className="w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100 transition">
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Logout
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default Header;

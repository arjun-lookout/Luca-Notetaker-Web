'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
    isCollapsed: boolean;
    onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
    const [expandedSections, setExpandedSections] = useState<string[]>([]);

    const toggleSection = (sectionId: string) => {
        setExpandedSections(prev =>
            prev.includes(sectionId)
                ? prev.filter(id => id !== sectionId)
                : [...prev, sectionId]
        );
    };

    const mainMenuItems = [
        { id: 'home', label: 'Home', icon: '/icons/home.svg', path: '/home' },
        { id: 'calendar', label: 'Calendar', icon: '/icons/calendar.svg', path: '/calendar' },
        { id: 'luca-chat', label: 'Luca Chat', icon: '/icons/luca-face.svg', path: '/chat' },
        { id: 'conversations', label: 'Conversations', icon: '/icons/conversation.svg', path: '/conversations' },
    ];

    const secondaryMenuItems = [
        { id: 'channels', label: 'Channels', icon: '/icons/hash.svg', path: '/channels' },
        { id: 'direct-messages', label: 'Direct Messages', icon: '/icons/direct-message.svg', path: '/messages' },
        { id: 'folders', label: 'Folders', icon: '/icons/folder-open.svg', path: '/folders' },
    ];

    return (
        <aside className={`fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-[100] ${isCollapsed ? 'w-[72px]' : 'w-[280px]'}`} style={{ fontFamily: "'Outfit', sans-serif", fontFeatureSettings: "'ss01' on, 'cv01' on" }}>
            {/* Logo Section */}
            <div className="flex items-center p-4 min-h-[72px]">
                <div className="flex items-center flex-1">
                    {!isCollapsed ? (
                        <div className="flex items-center px-1">
                            <Image src="/icons/main_logo.svg" alt="Luca Notetaker" width={220} height={52} priority className="object-contain" />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center w-full">
                            <Image src="/icons/logo.svg" alt="Luca Logo" width={48} height={48} priority className="object-contain" />
                        </div>
                    )}
                </div>
            </div>

            {/* Centered Divider below Logo */}
            {!isCollapsed && (
                <div className="px-6">
                    <div className="h-px bg-gray-100 w-full" />
                </div>
            )}

            {/* Redesigned Toggle Button - Positioned on the border */}
            <button
                onClick={onToggle}
                className="absolute -right-[18px] top-[52px] w-9 h-9 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-400 hover:text-gray-900 transition-all z-[110]"
                aria-label="Toggle sidebar"
            >
                <span className={`w-4 h-4 flex items-center justify-center transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
                    <Image src="/icons/double-left.svg" alt="Toggle" width={16} height={16} className="w-full h-full" />
                </span>
            </button>

            {/* Main Navigation */}
            <nav className="flex-1 overflow-y-auto overflow-x-hidden pt-6 pb-4">
                <ul className="px-3 space-y-1">
                    {mainMenuItems.map(item => (
                        <li key={item.id}>
                            <Link
                                href={item.path}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl text-[14px] leading-[20px] tracking-normal font-normal transition-all ${item.id === 'home'
                                    ? 'bg-purple-gradient text-white'
                                    : 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'
                                    } ${isCollapsed ? 'justify-center px-3' : ''}`}
                            >
                                <span className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src={item.icon}
                                        alt={item.label}
                                        width={20}
                                        height={20}
                                        className={item.id === 'home' ? 'brightness-0 invert' : ''}
                                    />
                                </span>
                                {!isCollapsed && <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Divider */}
                {!isCollapsed && (
                    <div className="px-6 my-4">
                        <div className="h-px bg-gray-100 w-full" />
                    </div>
                )}

                {/* Secondary Navigation */}
                <ul className="px-3" style={{ listStyleType: 'none', paddingLeft: '12px' }}>
                    {secondaryMenuItems.map(item => (
                        <li key={item.id} className="mb-1">
                            <button
                                onClick={() => toggleSection(item.id)}
                                className={`w-full flex items-center gap-3 px-2 py-2.5 rounded-xl text-[14px] leading-[20px] tracking-normal font-normal text-gray-900 hover:bg-gray-100 hover:text-gray-900 transition-all ${isCollapsed ? 'justify-center px-1' : ''}`}
                            >
                                {!isCollapsed && (
                                    <span className={`w-5 h-5 flex items-center justify-center transition-transform flex-shrink-0 ${expandedSections.includes(item.id) ? 'rotate-90' : ''}`}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                )}
                                <span className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                    <Image src={item.icon} alt={item.label} width={20} height={20} />
                                </span>
                                {!isCollapsed && (
                                    <span className="flex-1 whitespace-nowrap overflow-hidden text-ellipsis text-left">{item.label}</span>
                                )}
                            </button>

                            {/* Sub items */}
                            {!isCollapsed && expandedSections.includes(item.id) && (
                                <ul className="mt-1 ml-10 space-y-2">
                                    {item.id === 'folders' ? (
                                        <>
                                            <li className="text-[14px] leading-[20px] tracking-normal font-normal text-gray-900 cursor-pointer hover-text-purple-gradient transition-colors">Strategic Planning</li>
                                            <li className="text-[14px] leading-[20px] tracking-normal font-normal text-gray-900 cursor-pointer hover-text-purple-gradient transition-colors">Development</li>
                                        </>
                                    ) : (
                                        <li className="text-sm font-medium text-gray-400 italic">No items yet</li>
                                    )}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bottom Section - Upgrade Card */}
            {!isCollapsed && (
                <div className="px-2 pb-4 mt-auto">
                    <div className="relative p-[1.5px] rounded-[24px] bg-gradient-to-br from-[#483FC5] via-[#864CEF] to-[#483FC5]">
                        <div className="bg-white rounded-[22.5px] p-4 flex flex-col gap-3">
                            <h3 className="text-xl font-bold text-gray-900 m-0 leading-none">Basic</h3>

                            {/* Progress Bar */}
                            <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                                <div className="h-full w-[25%] bg-gradient-to-r from-[#483FC5] to-[#864CEF] rounded-full" />
                            </div>

                            <p className="text-sm font-bold text-gray-900 m-0 leading-tight">
                                0 to 300 <span className="font-medium">monthly mins used</span>
                            </p>

                            <button className="relative w-full p-[1.5px] rounded-xl bg-gradient-to-r from-[#483FC5] to-[#864CEF] transition-all hover:shadow-lg hover:-translate-y-0.5 group">
                                <div className="bg-white rounded-[10.5px] py-2 flex items-center justify-center">
                                    <span className="text-sm font-bold bg-gradient-to-r from-[#483FC5] to-[#864CEF] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                                        Upgrade to Pro
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Sidebar;

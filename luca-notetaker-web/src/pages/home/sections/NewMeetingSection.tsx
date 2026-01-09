'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const NewMeetingSection: React.FC = () => {
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
        name: 'English US',
        emoji: '🇺🇸'
    });

    const languages = [
        { name: 'English US', emoji: '🇺🇸' },
        { name: 'Spanish', emoji: '🇪🇸' },
        { name: 'German', emoji: '🇩🇪' },
    ];

    return (
        <div className="bg-white rounded-3xl p-2 relative">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">New Meeting</h2>

            {/* Meeting Type Tabs with Gradient Background */}
            <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-orange-100 rounded-2xl p-1 mb-6">
                <div className="flex gap-1">
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-white rounded-xl text-sm font-medium text-gray-900 transition-all hover:shadow-sm shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M18.5508 1.35234C18.3965 1.27389 18.2236 1.23967 18.0511 1.25346C17.8786 1.26725 17.7133 1.32851 17.5734 1.43047L15.625 2.84609V1.5625C15.625 1.1481 15.4604 0.750671 15.1674 0.457646C14.8743 0.16462 14.4769 0 14.0625 0H1.5625C1.1481 0 0.750671 0.16462 0.457646 0.457646C0.16462 0.750671 0 1.1481 0 1.5625V10.3125C0 10.7269 0.16462 11.1243 0.457646 11.4174C0.750671 11.7104 1.1481 11.875 1.5625 11.875H14.0625C14.4769 11.875 14.8743 11.7104 15.1674 11.4174C15.4604 11.1243 15.625 10.7269 15.625 10.3125V9.02891L17.5734 10.4461C17.7133 10.5479 17.8786 10.609 18.0511 10.6226C18.2236 10.6362 18.3964 10.6019 18.5506 10.5234C18.7047 10.4448 18.8341 10.3252 18.9245 10.1777C19.0148 10.0301 19.0626 9.86049 19.0625 9.6875V2.1875C19.0625 2.01465 19.0147 1.84517 18.9244 1.69778C18.8341 1.5504 18.7048 1.43085 18.5508 1.35234ZM13.75 10H1.875V1.875H13.75V10ZM17.1875 7.84609L15.625 6.71016V5.16484L17.1875 4.02891V7.84609Z" fill="url(#paint0_linear_18919_2288)" />
                            <defs>
                                <linearGradient id="paint0_linear_18919_2288" x1="4.28935" y1="7.74523" x2="11.3304" y2="-0.806582" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#483FC5" />
                                    <stop offset="1" stop-color="#864CEF" />
                                </linearGradient>
                            </defs>
                        </svg>
                        Online Meeting
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-0 rounded-xl text-sm font-medium text-gray-700 transition-all hover:bg-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 14.0625C11.0771 14.0613 12.1097 13.6328 12.8713 12.8713C13.6328 12.1097 14.0613 11.0771 14.0625 10V5C14.0625 3.92256 13.6345 2.88925 12.8726 2.12738C12.1108 1.36551 11.0774 0.9375 10 0.9375C8.92256 0.9375 7.88925 1.36551 7.12738 2.12738C6.36551 2.88925 5.9375 3.92256 5.9375 5V10C5.93874 11.0771 6.36715 12.1097 7.12875 12.8713C7.89035 13.6328 8.92294 14.0613 10 14.0625ZM7.8125 5C7.8125 4.41984 8.04297 3.86344 8.4532 3.4532C8.86344 3.04297 9.41984 2.8125 10 2.8125C10.5802 2.8125 11.1366 3.04297 11.5468 3.4532C11.957 3.86344 12.1875 4.41984 12.1875 5V10C12.1875 10.5802 11.957 11.1366 11.5468 11.5468C11.1366 11.957 10.5802 12.1875 10 12.1875C9.41984 12.1875 8.86344 11.957 8.4532 11.5468C8.04297 11.1366 7.8125 10.5802 7.8125 10V5ZM10.9375 17.1266V18.75C10.9375 18.9986 10.8387 19.2371 10.6629 19.4129C10.4871 19.5887 10.2486 19.6875 10 19.6875C9.75136 19.6875 9.5129 19.5887 9.33709 19.4129C9.16127 19.2371 9.0625 18.9986 9.0625 18.75V17.1266C7.3344 16.8969 5.74838 16.0479 4.59892 14.7372C3.44947 13.4266 2.81471 11.7433 2.8125 10C2.8125 9.75136 2.91127 9.5129 3.08709 9.33709C3.2629 9.16127 3.50136 9.0625 3.75 9.0625C3.99864 9.0625 4.2371 9.16127 4.41291 9.33709C4.58873 9.5129 4.6875 9.75136 4.6875 10C4.6875 11.409 5.24721 12.7602 6.2435 13.7565C7.23978 14.7528 8.59104 15.3125 10 15.3125C11.409 15.3125 12.7602 14.7528 13.7565 13.7565C14.7528 12.7602 15.3125 11.409 15.3125 10C15.3125 9.75136 15.4113 9.5129 15.5871 9.33709C15.7629 9.16127 16.0014 9.0625 16.25 9.0625C16.4986 9.0625 16.7371 9.16127 16.9129 9.33709C17.0887 9.5129 17.1875 9.75136 17.1875 10C17.1853 11.7433 16.5505 13.4266 15.4011 14.7372C14.2516 16.0479 12.6656 16.8969 10.9375 17.1266Z" fill="#171717" />
                        </svg>
                        In-Person Meeting
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-0 rounded-xl text-sm font-medium text-gray-700 transition-all hover:bg-white/50">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.8125 11.2498V16.2498C17.8125 16.4984 17.7137 16.7369 17.5379 16.9127C17.3621 17.0885 17.1236 17.1873 16.875 17.1873H3.125C2.87636 17.1873 2.6379 17.0885 2.46209 16.9127C2.28627 16.7369 2.1875 16.4984 2.1875 16.2498V11.2498C2.1875 11.0011 2.28627 10.7627 2.46209 10.5869C2.6379 10.411 2.87636 10.3123 3.125 10.3123C3.37364 10.3123 3.6121 10.411 3.78791 10.5869C3.96373 10.7627 4.0625 11.0011 4.0625 11.2498V15.3123H15.9375V11.2498C15.9375 11.0011 16.0363 10.7627 16.2121 10.5869C16.3879 10.411 16.6264 10.3123 16.875 10.3123C17.1236 10.3123 17.3621 10.411 17.5379 10.5869C17.7137 10.7627 17.8125 11.0011 17.8125 11.2498ZM7.53828 6.28804L9.0625 4.76539V11.2498C9.0625 11.4984 9.16127 11.7369 9.33709 11.9127C9.5129 12.0885 9.75136 12.1873 10 12.1873C10.2486 12.1873 10.4871 12.0885 10.6629 11.9127C10.8387 11.7369 10.9375 11.4984 10.9375 11.2498V4.76539L12.4617 6.29039C12.5489 6.37759 12.6525 6.44677 12.7664 6.49396C12.8803 6.54116 13.0025 6.56545 13.1258 6.56545C13.2491 6.56545 13.3712 6.54116 13.4852 6.49396C13.5991 6.44677 13.7026 6.37759 13.7898 6.29039C13.877 6.20318 13.9462 6.09965 13.9934 5.98571C14.0406 5.87177 14.0649 5.74965 14.0649 5.62632C14.0649 5.503 14.0406 5.38088 13.9934 5.26694C13.9462 5.153 13.877 5.04947 13.7898 4.96226L10.6648 1.83726C10.5777 1.74986 10.4743 1.68052 10.3603 1.6332C10.2463 1.58588 10.1242 1.56152 10.0008 1.56152C9.87739 1.56152 9.75522 1.58588 9.64126 1.6332C9.52731 1.68052 9.42382 1.74986 9.33672 1.83726L6.21172 4.96226C6.12451 5.04947 6.05534 5.153 6.00814 5.26694C5.96095 5.38088 5.93665 5.503 5.93665 5.62632C5.93665 5.8754 6.0356 6.11427 6.21172 6.29039C6.38784 6.46651 6.62671 6.56545 6.87578 6.56545C7.12485 6.56545 7.36372 6.46651 7.53984 6.29039L7.53828 6.28804Z" fill="#171717" />
                        </svg>
                        Upload Meeting
                    </button>
                </div>
            </div>

            {/* Purple Background Container */}
            <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-orange-50 rounded-3xl p-6">
                {/* URL Input Row */}
                <div className="flex gap-4 mb-6">
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Paste your meeting URL here"
                            className="w-full px-6 py-4 border border-gray-200 rounded-2xl text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#483FC5]/20"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                            <Image src="/icons/gmeet.svg" alt="Google Meet" width={20} height={20} />
                            <Image src="/icons/zoom.svg" alt="Zoom" width={20} height={20} />
                            <Image src="/icons/teams.svg" alt="Microsoft Teams" width={20} height={20} />
                        </div>
                    </div>
                    <button className="bg-purple-gradient text-white text-sm font-semibold px-8 py-4 rounded-2xl transition-all hover:shadow-purple hover:-translate-y-0.5 whitespace-nowrap">
                        Start Capturing
                    </button>
                </div>

                {/* Form Fields Row */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-900">
                            Name your meeting <span className="text-gray-500 font-normal">(optional)</span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="E.g. Team Sync"
                                className="w-full px-4 py-3.5 pr-12 border border-gray-200 rounded-2xl text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
                            />

                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-900">Meeting Language</label>
                        <div className="relative">
                            <button
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                className="w-full flex items-center justify-between px-4 py-3.5 border border-gray-200 rounded-2xl text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-600/20 text-left"
                            >
                                <span className="font-semibold">{selectedLanguage.name}</span>
                                <svg className={`w-6 h-6 text-gray-900 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isLanguageDropdownOpen && (
                                <div className="absolute left-0 right-0 mt-2 bg-white rounded-3xl shadow-2xl z-50 py-3 animate-in fade-in zoom-in duration-200">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.name}
                                            onClick={() => {
                                                setSelectedLanguage(lang);
                                                setIsLanguageDropdownOpen(false);
                                            }}
                                            className={`w-full flex items-center gap-3 px-4 py-4 transition-colors text-left first:rounded-t-3xl last:rounded-b-3xl underline-none ${selectedLanguage.name === lang.name ? 'bg-purple-50 text-purple-600' : 'hover:bg-gray-50 text-gray-900'}`}
                                        >
                                            <span className="text-2xl w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 overflow-hidden shadow-inner">
                                                {lang.emoji}
                                            </span>
                                            <span className={`text-[17px] font-semibold ${selectedLanguage.name === lang.name ? 'text-purple-gradient' : 'text-gray-900'}`}>{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-gray-900">Bot Name</label>
                        <input
                            type="text"
                            placeholder="Luca Bot"
                            defaultValue="Luca Bot"
                            className="px-4 py-3.5 border border-gray-200 rounded-2xl text-sm bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600/20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewMeetingSection;

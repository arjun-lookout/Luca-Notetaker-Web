'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderProps {
    user: {
        name: string;
        email: string;
        avatar?: string;
    };
}

const Header: React.FC<HeaderProps> = ({ user }) => {
    return (
        <header className="flex items-center justify-between px-8 py-4 bg-transparent min-h-[72px]">
            <div className="flex-1 max-w-[500px]">
                <div className="relative w-full">
                    <svg
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Find my meeting moment..."
                        className="w-full pl-11 pr-4 h-11 border border-gray-200 rounded-xl text-sm text-gray-900 bg-gray-50 transition-all focus:border-[#483FC5] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#483FC5]/10 placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between gap-3 w-[385px]">
                <button className="relative w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-xl text-gray-600 hover:border-gray-300 transition-all" aria-label="Notifications">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28" fill="none">
                        <path d="M10.5004 23.6719H17.5004C17.7197 23.672 17.9302 23.759 18.0854 23.9141C18.2407 24.0694 18.3285 24.2804 18.3285 24.5C18.3285 24.7196 18.2407 24.9306 18.0854 25.0859C17.9302 25.241 17.7197 25.328 17.5004 25.3281H10.5004C10.2809 25.3281 10.0697 25.2411 9.91446 25.0859C9.75916 24.9306 9.67227 24.7196 9.67227 24.5C9.67227 24.2804 9.75916 24.0694 9.91446 23.9141C10.0697 23.7589 10.2809 23.6719 10.5004 23.6719ZM14.0004 2.67188C16.3083 2.67198 18.5217 3.58882 20.1537 5.2207C21.7859 6.85286 22.7035 9.06679 22.7035 11.375C22.7035 15.2442 23.6076 18.2114 24.2201 19.2666V19.2676C24.3723 19.5264 24.4529 19.8209 24.4535 20.1211C24.4541 20.4215 24.3744 20.7171 24.2231 20.9766L24.2152 20.9893C24.0679 21.2435 23.8576 21.4554 23.6029 21.6025C23.3439 21.7522 23.0495 21.8302 22.7504 21.8281H5.2504C4.95113 21.8277 4.65675 21.7488 4.39786 21.5986C4.13894 21.4484 3.92377 21.2323 3.77481 20.9727C3.62589 20.713 3.54819 20.4184 3.54922 20.1191C3.5503 19.8198 3.62985 19.5252 3.78067 19.2666C4.39316 18.2115 5.29727 15.2454 5.29727 11.375C5.29727 9.06679 6.21395 6.85286 7.8461 5.2207C9.47823 3.58868 11.6923 2.67188 14.0004 2.67188ZM14.0004 4.32812C12.1314 4.32813 10.3385 5.07103 9.017 6.39258C7.69563 7.7141 6.95352 9.50619 6.95352 11.375C6.95352 15.3141 6.04817 18.6608 5.20938 20.1016L5.16837 20.1719H22.8315L22.7904 20.1016C21.9506 18.6598 21.0473 15.3131 21.0473 11.375C21.0473 9.50615 20.3042 7.7141 18.9828 6.39258C17.6614 5.07113 15.8692 4.32823 14.0004 4.32812Z" fill="url(#paint0_linear_header)" />
                        <defs>
                            <linearGradient id="paint0_linear_header" x1="8.22722" y1="17.4632" x2="21.1313" y2="8.45169" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#483FC5" />
                                <stop offset="1" stop-color="#864CEF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </button>

                <button className="flex-1 flex items-center justify-between gap-3 px-4 h-12 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-all">
                    <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0">
                            <div className="w-9 h-9 rounded-xl overflow-hidden">
                                {user.avatar ? (
                                    <Image src={user.avatar} alt={user.name} width={36} height={36} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-purple-gradient text-white font-semibold text-sm">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        </div>
                        <div className="flex flex-col items-start text-left">
                            <span className="text-sm font-bold text-gray-900 leading-tight">{user.name}</span>
                            <span className="text-[11px] text-gray-500 leading-tight">{user.email}</span>
                        </div>
                    </div>
                    <svg className="text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;

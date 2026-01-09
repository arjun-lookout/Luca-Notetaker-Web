'use client';

import React, { useState } from 'react';
import { Sidebar, Header } from '@/components/layout';
import { NewMeetingSection, RecentConversationsSection, TodaySection } from './home/sections';

const HomePage: React.FC = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const user = {
        name: 'Sara lee',
        email: 'supportingflex@gmail.com',
        avatar: undefined,
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <Sidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />

            <div className={`flex-1 flex flex-col h-screen transition-all duration-300 ${isSidebarCollapsed ? 'ml-[72px]' : 'ml-[280px]'}`}>
                <Header user={user} />

                <div className="flex-1 grid grid-cols-1 xl:grid-cols-[1fr_385px] gap-8 p-8 w-full overflow-hidden">
                    {/* Left Section */}
                    <section className="flex flex-col gap-12 h-full min-h-0">
                        <NewMeetingSection />
                        <div className="flex-1 min-h-0">
                            <RecentConversationsSection />
                        </div>
                    </section>

                    {/* Right Section */}
                    <aside className="flex flex-col gap-4 h-full min-h-0">
                        <TodaySection />
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

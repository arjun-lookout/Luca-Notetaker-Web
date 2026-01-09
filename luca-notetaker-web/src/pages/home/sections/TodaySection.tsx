'use client';

import React from 'react';
import MeetingCard from '@/components/MeetingCard';
import TodoCard from '@/components/TodoCard';
import Image from 'next/image';

const TodaySection: React.FC = () => {
    const meetings = [
        {
            id: '1',
            title: 'Design Discussion Meeting',
            startTime: '12:30PM',
            endTime: '1:30 PM',
            attendee: 'Donal Scott',
            isActive: true,
        },
        {
            id: '2',
            title: 'User Testing Review',
            startTime: '2:00 PM',
            endTime: '3:00 PM',
            attendee: 'Sarah Lee',
            isActive: true,
        },
        {
            id: '3',
            title: 'Feature Brainstorming Session',
            startTime: '9:00 AM',
            endTime: '10:00 AM',
            attendee: 'Michael Chen',
            isActive: true,
        },
        {
            id: '4',
            title: 'Sprint Planning',
            startTime: '11:00 AM',
            endTime: '12:00 PM',
            attendee: 'Emily Davis',
            isActive: true,
        },
    ];

    const todos = [
        {
            id: '1',
            description: 'Finalize a manual control layer for Smart Notes (edit, override, disable AI outputs)',
        },
        {
            id: '2',
            description: 'Finalize a manual control layer for Smart Notes (edit, override, disable AI outputs)',
        },
    ];

    return (
        <div className="bg-purple-gradient rounded-2xl p-6 shadow-purple h-full flex flex-col min-h-0 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-white m-0">Today</h2>
                <button className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-2xl text-white transition-all hover:bg-white/30" aria-label="Calendar">
                    <Image src="/icons/calendar-main.svg" alt="Calendar" width={24} height={24} />
                </button>
            </div>

            {/* Horizontal Line */}
            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {/* Meetings Section */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white m-0">Meetings</h3>
                    <button className="flex items-center gap-2 bg-white text-purple-600 text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:bg-white/90">
                        Capture all
                        <Image src="/icons/down.svg" alt="Arrow Right" width={14} height={24} />
                    </button>
                </div>

                <div className="flex flex-col gap-4 mb-8">
                    {meetings.map(meeting => (
                        <MeetingCard key={meeting.id} {...meeting} />
                    ))}
                </div>

                {/* To do Section */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white m-0">To do</h3>
                    <button className="flex items-center gap-1.5 bg-transparent text-white text-sm font-medium px-4 py-2 rounded-lg transition-all hover:bg-white/10">
                        Go to Action Items
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {todos.map(todo => (
                        <TodoCard key={todo.id} {...todo} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodaySection;

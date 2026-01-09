'use client';

import React from 'react';
import Image from 'next/image';
import ConversationCard from '@/components/ConversationCard';

const RecentConversationsSection: React.FC = () => {
    const conversations = [
        {
            id: '1',
            title: 'Feature Launch',
            date: 'Monday, August 25, 2025',
            time: '44m',
            preview: 'This meeting conveys an attempt to align multiple teams around launching an AI-driven feature while quietly negotiating fear—fear of losing user trust, fear of overpromising, and fear of shipping something no one can clearly...',
            type: 'online' as const,
            platform: 'gmeet' as const,
            participants: [
                { id: '1', name: 'John Doe' },
                { id: '2', name: 'Jane Smith' },
                { id: '3', name: 'Bob Johnson' },
                { id: '4', name: 'Alice Williams' },
            ],
            tag: 'Strategic planning',
        },
        {
            id: '2',
            title: 'Feature Launch',
            date: 'Monday, August 25, 2025',
            time: '44m',
            preview: 'This meeting conveys an attempt to align multiple teams around launching an AI-driven feature while quietly negotiating fear—fear of losing user trust, fear of overpromising, and fear of shipping something no one can clearly...',
            type: 'online' as const,
            platform: 'teams' as const,
            participants: [
                { id: '1', name: 'John Doe' },
                { id: '2', name: 'Jane Smith' },
                { id: '3', name: 'Bob Johnson' },
                { id: '4', name: 'Alice Williams' },
            ],
            tag: 'Strategic planning',
        },
        {
            id: '3',
            title: 'Design Sync',
            date: 'Tuesday, August 26, 2025',
            time: '30m',
            preview: 'Reviewing the latest mockups for the dashboard and discussing the new design tokens. The team needs to ensure consistency across all components and platforms.',
            type: 'online' as const,
            platform: 'zoom' as const,
            participants: [
                { id: '5', name: 'Charlie Brown' },
                { id: '6', name: 'Lucy Van Pelt' },
            ],
            tag: 'Design',
        },
        {
            id: '4',
            title: 'Product Roadmap',
            date: 'Wednesday, August 27, 2025',
            time: '1h',
            preview: 'Q3 planning and roadmap alignment with stakeholders. We will be prioritizing the new integration with Slack and improving the overall onboarding flow for new users.',
            type: 'online' as const,
            platform: 'gmeet' as const,
            participants: [
                { id: '7', name: 'Linus Torvalds' },
                { id: '8', name: 'Bill Gates' },
                { id: '9', name: 'Steve Jobs' },
            ],
            tag: 'Product',
        },
    ];

    return (
        <div className="p-2 h-full flex flex-col min-h-0">
            <div className="flex items-center justify-between mb-6 flex-shrink-0">
                <h2 className="text-2xl font-semibold text-gray-900 m-0">Recent Conversations</h2>
                <button className="flex items-center gap-1.5 bg-transparent text-purple-gradient text-sm font-semibold px-2 py-2 rounded-xl transition-all hover:bg-purple-50 group">
                    Go to Conversation
                    <Image src="/icons/down.svg" alt="Arrow Right" width={16} height={16} className="-rotate-90 transition-transform group-hover:translate-x-0.5" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
                {conversations.slice(0, 2).map(conv => (
                    <ConversationCard key={conv.id} {...conv} />
                ))}
            </div>
        </div>
    );
};

export default RecentConversationsSection;

'use client';

import React from 'react';
import TodoCard from '@/components/TodoCard';

const TodoSection: React.FC = () => {
    const todos = [
        {
            id: '1',
            title: 'Smart Notes Task',
            description: 'Finalize a manual control layer for Smart Notes (edit, override, disable AI outputs)',
        },
        {
            id: '2',
            title: 'Smart Notes Task',
            description: 'Finalize a manual control layer for Smart Notes (edit, override, disable AI outputs)',
        },
    ];

    return (
        <div className="bg-purple-gradient rounded-3xl p-8 shadow-purple">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-white m-0">To do</h3>
                <button className="flex items-center gap-1.5 bg-transparent text-white text-xs font-medium px-4 py-2 rounded-lg transition-all hover:bg-white/20">
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
    );
};

export default TodoSection;

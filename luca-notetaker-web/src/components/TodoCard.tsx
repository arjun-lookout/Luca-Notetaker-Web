'use client';

import React from 'react';

interface TodoCardProps {
    description: string;
}

const TodoCard: React.FC<TodoCardProps> = ({ description }) => {
    return (
        <div className="bg-white rounded-2xl p-4 flex items-start gap-3 transition-all hover:shadow-sm">
            <input
                type="checkbox"
                className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-600/20 cursor-pointer flex-shrink-0"
            />
            <p className="text-sm text-gray-900 m-0 leading-relaxed flex-1">{description}</p>
        </div>
    );
};

export default TodoCard;

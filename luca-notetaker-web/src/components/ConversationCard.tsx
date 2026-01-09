'use client';

import React from 'react';
import Image from 'next/image';

interface ConversationCardProps {
    title: string;
    date: string;
    time: string;
    preview: string;
    type: 'online' | 'in-person';
    platform?: 'gmeet' | 'teams' | 'zoom';
    participants: Array<{
        id: string;
        name: string;
        avatar?: string;
    }>;
    tag?: string;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
    title,
    date,
    time,
    preview,
    type,
    platform,
    participants,
    tag,
}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-3xl p-7 min-h-[320px] h-full flex flex-col transition-all cursor-pointer hover:border-gray-300">
            <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-semibold text-gray-900 m-0 leading-snug">{title}</h4>
                {platform && (
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                        <Image src={`/icons/${platform}.svg`} alt={platform} width={24} height={24} />
                    </div>
                )}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M11.375 1.75H10.0625V1.3125C10.0625 1.19647 10.0164 1.08519 9.93436 1.00314C9.85231 0.921094 9.74103 0.875 9.625 0.875C9.50897 0.875 9.39769 0.921094 9.31564 1.00314C9.23359 1.08519 9.1875 1.19647 9.1875 1.3125V1.75H4.8125V1.3125C4.8125 1.19647 4.76641 1.08519 4.68436 1.00314C4.60231 0.921094 4.49103 0.875 4.375 0.875C4.25897 0.875 4.14769 0.921094 4.06564 1.00314C3.98359 1.08519 3.9375 1.19647 3.9375 1.3125V1.75H2.625C2.39294 1.75 2.17038 1.84219 2.00628 2.00628C1.84219 2.17038 1.75 2.39294 1.75 2.625V11.375C1.75 11.6071 1.84219 11.8296 2.00628 11.9937C2.17038 12.1578 2.39294 12.25 2.625 12.25H11.375C11.6071 12.25 11.8296 12.1578 11.9937 11.9937C12.1578 11.8296 12.25 11.6071 12.25 11.375V2.625C12.25 2.39294 12.1578 2.17038 11.9937 2.00628C11.8296 1.84219 11.6071 1.75 11.375 1.75ZM3.9375 2.625V3.0625C3.9375 3.17853 3.98359 3.28981 4.06564 3.37186C4.14769 3.45391 4.25897 3.5 4.375 3.5C4.49103 3.5 4.60231 3.45391 4.68436 3.37186C4.76641 3.28981 4.8125 3.17853 4.8125 3.0625V2.625H9.1875V3.0625C9.1875 3.17853 9.23359 3.28981 9.31564 3.37186C9.39769 3.45391 9.50897 3.5 9.625 3.5C9.74103 3.5 9.85231 3.45391 9.93436 3.37186C10.0164 3.28981 10.0625 3.17853 10.0625 3.0625V2.625H11.375V4.375H2.625V2.625H3.9375ZM11.375 11.375H2.625V5.25H11.375V11.375ZM9.27828 6.69047C9.31896 6.7311 9.35123 6.77935 9.37325 6.83246C9.39526 6.88558 9.40659 6.94251 9.40659 7C9.40659 7.05749 9.39526 7.11443 9.37325 7.16754C9.35123 7.22065 9.31896 7.2689 9.27828 7.30953L6.65328 9.93453C6.61265 9.97521 6.5644 10.0075 6.51129 10.0295C6.45818 10.0515 6.40124 10.0628 6.34375 10.0628C6.28626 10.0628 6.22933 10.0515 6.17621 10.0295C6.1231 10.0075 6.07485 9.97521 6.03422 9.93453L4.72172 8.62203C4.63963 8.53994 4.59351 8.4286 4.59351 8.3125C4.59351 8.1964 4.63963 8.08506 4.72172 8.00297C4.80381 7.92088 4.91515 7.87476 5.03125 7.87476C5.14735 7.87476 5.25869 7.92088 5.34078 8.00297L6.34375 9.00649L8.65922 6.69047C8.69985 6.64979 8.7481 6.61752 8.80121 6.59551C8.85433 6.57349 8.91126 6.56216 8.96875 6.56216C9.02624 6.56216 9.08318 6.57349 9.13629 6.59551C9.1894 6.61752 9.23765 6.64979 9.27828 6.69047Z" fill="#706F6E" />
                </svg>
                <span className="font-medium">{date}</span>
                <span className="text-gray-300 mx-1">|</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span className="font-medium">{time}</span>
            </div>

            <p className="text-base text-gray-700 leading-relaxed m-0 mb-auto line-clamp-6">{preview}</p>

            <div className="flex items-center justify-between">
                {tag && (
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 rounded-lg text-xs font-medium text-purple-700">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M15.3125 6.915C15.2197 6.78634 15.0976 6.6816 14.9563 6.60944C14.8151 6.53728 14.6586 6.49977 14.5 6.5H13.5V5.5C13.5 5.23478 13.3946 4.98043 13.2071 4.79289C13.0196 4.60536 12.7652 4.5 12.5 4.5H8.16687L6.43375 3.2C6.26036 3.07074 6.05002 3.00063 5.83375 3H2.5C2.23478 3 1.98043 3.10536 1.79289 3.29289C1.60536 3.48043 1.5 3.73478 1.5 4V13C1.5 13.1326 1.55268 13.2598 1.64645 13.3536C1.74021 13.4473 1.86739 13.5 2 13.5H13.1938C13.2987 13.5 13.401 13.467 13.4861 13.4056C13.5713 13.3443 13.6349 13.2577 13.6681 13.1581L15.4487 7.81625C15.4988 7.66594 15.5126 7.50591 15.4889 7.34926C15.4652 7.1926 15.4048 7.04379 15.3125 6.915ZM5.83375 4L7.7 5.4C7.78655 5.46491 7.89181 5.5 8 5.5H12.5V6.5H4.36062C4.15073 6.49998 3.94616 6.56601 3.77588 6.68873C3.6056 6.81145 3.47825 6.98463 3.41188 7.18375L2.5 9.91875V4H5.83375ZM12.8337 12.5H2.69375L4.36062 7.5H14.5L12.8337 12.5Z" fill="#7C3AED" />
                        </svg>
                        <span>{tag}</span>
                    </div>
                )}

                <div className="flex items-center gap-1">
                    {participants.slice(0, 3).map((participant, index) => (
                        <div
                            key={participant.id}
                            className="w-6 h-6 rounded-full overflow-hidden border-2 border-white -ml-2 first:ml-0 transition-all hover:-translate-y-0.5 hover:z-50"
                            style={{ zIndex: participants.length - index }}
                        >
                            {participant.avatar ? (
                                <Image src={participant.avatar} alt={participant.name} width={24} height={24} />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-purple-gradient text-white text-[10px] font-semibold">
                                    {participant.name.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                    ))}
                    {participants.length > 3 && (
                        <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-[10px] font-semibold flex items-center justify-center -ml-2 border-2 border-white">
                            +{participants.length - 3}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConversationCard;

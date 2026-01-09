'use client';

import React from 'react';
import Image from 'next/image';

interface MeetingCardProps {
    title: string;
    startTime: string;
    endTime: string;
    attendee: string;
    attendeeAvatar?: string;
    isActive?: boolean;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
    title,
    startTime,
    endTime,
    attendee,
    attendeeAvatar,
    isActive = false,
}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-4 transition-all hover:shadow-md hover:border-purple-300">
            <div className="flex items-center justify-between mb-3">
                <h4 className="text-base font-semibold text-gray-900 m-0">{title}</h4>
                <label className="relative inline-block w-11 h-6 cursor-pointer">
                    <input type="checkbox" defaultChecked={isActive} className="opacity-0 w-0 h-0 peer" />
                    <span className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition-all peer-checked:bg-[linear-gradient(53deg,#483FC5_27.79%,#864CEF_79.83%)] before:content-[''] before:absolute before:h-[18px] before:w-[18px] before:left-[3px] before:bottom-[3px] before:bg-white before:rounded-full before:transition-all peer-checked:before:translate-x-5"></span>
                </label>
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M5.68783 2.62235V4.99961L7.66314 6.18469C7.76264 6.24445 7.83432 6.34128 7.86242 6.45389C7.89052 6.5665 7.87274 6.68566 7.81298 6.78516C7.75323 6.88466 7.65639 6.95634 7.54378 6.98444C7.43117 7.01255 7.31201 6.99476 7.21252 6.935L5.02501 5.6225C4.96027 5.58361 4.9067 5.52861 4.86952 5.46287C4.83233 5.39713 4.8128 5.32288 4.81283 5.24735V2.62235C4.81283 2.50632 4.85892 2.39504 4.94097 2.31299C5.02302 2.23094 5.1343 2.18485 5.25033 2.18485C5.36636 2.18485 5.47764 2.23094 5.55969 2.31299C5.64173 2.39504 5.68783 2.50632 5.68783 2.62235ZM10.5003 1.30985C10.3843 1.30985 10.273 1.35594 10.191 1.43799C10.1089 1.52004 10.0628 1.63132 10.0628 1.74735V2.73172C9.71556 2.32922 9.36119 1.94149 8.96252 1.5379C8.2329 0.808203 7.30444 0.3097 6.29313 0.104675C5.28181 -0.10035 4.23251 -0.0028061 3.27632 0.385119C2.32013 0.773045 1.49946 1.43415 0.916854 2.28582C0.334247 3.1375 0.0155397 4.14198 0.000553888 5.17376C-0.0144319 6.20553 0.274969 7.21885 0.832595 8.08708C1.39022 8.95532 2.19134 9.63998 3.13586 10.0555C4.08038 10.471 5.12641 10.599 6.14325 10.4235C7.16009 10.2479 8.10264 9.77656 8.85314 9.06836C8.89494 9.02886 8.92855 8.98152 8.95205 8.92903C8.97555 8.87654 8.98848 8.81994 8.9901 8.76246C8.99173 8.70497 8.98201 8.64773 8.96152 8.594C8.94102 8.54027 8.91014 8.4911 8.87064 8.4493C8.83114 8.4075 8.7838 8.3739 8.73131 8.3504C8.67882 8.3269 8.62222 8.31396 8.56473 8.31234C8.50725 8.31071 8.45001 8.32043 8.39627 8.34093C8.34254 8.36142 8.29338 8.3923 8.25158 8.4318C7.62598 9.02137 6.84055 9.41358 5.99338 9.55944C5.14621 9.70531 4.27484 9.59836 3.48808 9.25197C2.70133 8.90557 2.03406 8.33507 1.56959 7.61171C1.10513 6.88835 0.864057 6.04419 0.876483 5.18465C0.888909 4.3251 1.15428 3.48826 1.63946 2.77863C2.12464 2.069 2.80812 1.51803 3.60456 1.19452C4.401 0.871009 5.2751 0.789297 6.1177 0.959588C6.9603 1.12988 7.73406 1.54463 8.34236 2.15204C8.78751 2.60266 9.17744 3.03688 9.57064 3.49735H8.31283C8.1968 3.49735 8.08552 3.54344 8.00347 3.62549C7.92142 3.70754 7.87533 3.81882 7.87533 3.93485C7.87533 4.05088 7.92142 4.16216 8.00347 4.24421C8.08552 4.32625 8.1968 4.37235 8.31283 4.37235H10.5003C10.6164 4.37235 10.7276 4.32625 10.8097 4.24421C10.8917 4.16216 10.9378 4.05088 10.9378 3.93485V1.74735C10.9378 1.63132 10.8917 1.52004 10.8097 1.43799C10.7276 1.35594 10.6164 1.30985 10.5003 1.30985Z" fill="#706F6E" />
                    </svg>
                    <span className="font-medium">{startTime} - {endTime}</span>
                    <span className="text-gray-400">|</span>
                    <Image src="/icons/gmeet.svg" alt="Google Meet" width={18} height={18} className="flex-shrink-0" />
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-700">
                    {attendeeAvatar ? (
                        <Image src={attendeeAvatar} alt={attendee} width={24} height={24} className="rounded-full flex-shrink-0" />
                    ) : (
                        <div className="w-6 h-6 rounded-full bg-purple-gradient text-white flex items-center justify-center text-[10px] font-semibold flex-shrink-0">
                            {attendee.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <span className="font-medium">{attendee}</span>
                </div>
            </div>
        </div>
    );
};

export default MeetingCard;

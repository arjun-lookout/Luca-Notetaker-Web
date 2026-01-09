// Common Types for Luca Notetaker

export interface Meeting {
    id: string;
    title: string;
    type: 'online' | 'in-person' | 'upload';
    startTime: string;
    endTime: string;
    attendee: string;
    attendeeAvatar?: string;
    isActive?: boolean;
}

export interface TodoItem {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface Conversation {
    id: string;
    title: string;
    date: string;
    time: string;
    preview: string;
    type: 'online' | 'in-person';
    participants: Participant[];
    tags?: string[];
}

export interface Participant {
    id: string;
    name: string;
    avatar?: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

export interface SidebarItem {
    id: string;
    label: string;
    icon: string;
    path: string;
    badge?: number;
}

export interface SidebarSection {
    id: string;
    items: SidebarItem[];
    collapsible?: boolean;
    defaultExpanded?: boolean;
}

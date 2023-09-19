export interface ChatShortInfo {
    id: string;
    unreadNumber: number;
    companionName: string;
    lastMessage: MessageInfo;
    isSelected: boolean;
    onClick: () => void;
}
export interface ChatFullInfo {
    id: string;
    companionName: string;
    isOnline: boolean;
    unreadNumber: number;
    lastSeen: Date;
    messages: MessageInfo[];
}

export interface MessageInfo {
    isSendByUser: boolean;
    sent: Date;
    text: string;
    isRead: boolean;
}

export const defaultChat = {
    userName: 'Bob Johnson',
    isOnline: true,
    lastSeen: new Date(),
};

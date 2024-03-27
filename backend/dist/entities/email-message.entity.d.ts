import { PanelMember } from './panel-member.entity';
export declare class EmailMessage {
    id: string;
    date: Date;
    description: string;
    full_name: string;
    interview_id: string;
    position: string;
    recipient: string;
    panelMembers: PanelMember[];
}

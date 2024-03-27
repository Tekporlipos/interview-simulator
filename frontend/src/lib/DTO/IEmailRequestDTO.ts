export interface EmailRequestDTO {
  full_name: string;
  recipient: string;
  interview_id: string;
  description: string;
  position: string;
  date: Date;
  panel_members: PanelMemberDTO[];
}

export interface PanelMemberDTO {
  description: string | null;
  email: string | null;
  expertise: string | null;
  name: string;
  profile: string | null;
}
export interface FeedBackDTO {
  message: string;
  userId: string;
  submissionDate: number;
}

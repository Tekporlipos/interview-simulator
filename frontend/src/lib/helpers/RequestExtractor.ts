import { EmailRequest, PanelMember } from "@/utlities/interfaces";

export function requestExtractor(req: Request) {
  let strings = req.url.split("/");
  return strings.length > 0 ? strings[strings.length - 1] : null;
}

export function mapToEmailRequest(data: any): EmailRequest {
  return {
    fullName: data.full_name,
    recipient: data.recipient,
    interviewId: data.interview_id,
    description: data.description,
    position: data.position,
    date: data.date,
    panelMembers: data.panelMembers,
  };
}

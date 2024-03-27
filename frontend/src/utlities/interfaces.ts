export interface IBioData {
  profile_picture: string | null;
  name: string | null;
  title: string | null;
  phone_number: string | null;
  email_address: string | null;
  location: string | null;
  description: string | null;
}

export interface IExperience {
  job_title: string;
  company_name: string | null;
  date_start: string[];
  date_end: string[] | string | null;
  location: string | null;
  descriptions: string[] | null;
}

export interface IEducation {
  program_name: string;
  institution_name: string;
  date_start: string[] | null;
  date_end: string[] | string | null;
  location: string | null;
  description: string | null;
}

export interface ICertifications {
  certification_name: string;
  date_start: string[] | null;
  date_end: string[] | string | null;
  description: string | null;
}

export interface IPractical {
  experiences: [IExperience];
  certifications: [ICertifications];
  projects: [IProjects];
}
export interface IAbilities {
  skills: [ISkill];
  languages: [ILanguage];
  volunteer: [IVolunteer];
  hobbies: [IHobby];
}

export interface ITheoretical {
  educations: IEducation[];
  publications: IPublication[];
}

export interface IPublication {
  publication_name: string;
  date_start: string[] | null;
  date_end: string[] | string | null;
  description: string | null;
}

export interface IProjects {
  project_name: string;
  date_start: string[] | null;
  date_end: string[] | string | null;
  project_description: string | null;
  description: string | null;
}

export interface ISkill {
  skill_name: string;
  level: string;
}

export interface IAwards {
  awards_honors: string;
  description: string;
}
export interface IHobby {
  hobbies_name: string;
  description: string;
}
export interface IConnect {
  link: string;
}
export interface ILanguage {
  language_name: string;
  level: string;
}

export interface IVolunteer {
  voluntary_name: string;
  company_name: string | null;
  date_start: string[] | null;
  date_end: string[] | string | null;
  description: string | null;
}

export interface ICv {
  bio: IBioData;
  practical: IPractical;
  abilities: IAbilities;
  theoretical: ITheoretical;
  recognition: [IAwards];
  personality: [IConnect];
}

export interface CvQuestion {
  question: string;
  type: string;
  name: string;
  number: number;
}

export interface IQuestionAnswer {
  question: string | null;
  answer: string | null;
  type: string;
  name: string;
}

export enum EState {
  DRAFT = "draft",
  SAVE = "save",
}

export interface IInterviewQuestion {
  question: string;
  type: string;
  name: string;
  number: number;
}

export interface IPanel {
  name: string;
  expertise: string;
  description: string;
  voice: string;
  email: string;
  selected: boolean;
  profile: string;
}

export interface PanelMember {
  name: string;
  expertise: string;
  description: string;
  email: string;
  profile: string;
}

export interface EmailRequest {
  fullName: string;
  recipient: string;
  interviewId: string;
  description: string;
  position: string;
  date: string; // You can use a more specific date type if needed
  panelMembers: PanelMember[];
}

export interface InterViewDTO {
  question: string;
  linkId: string;
  answer: string;
  audioFile: string;
  videoFile: string;
}

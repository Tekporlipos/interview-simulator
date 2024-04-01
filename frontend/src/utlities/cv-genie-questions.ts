import { CvQuestion, IInterviewQuestion, IPanel } from "@/utlities/interfaces";
import { getTimeOfDay } from "@/utlities/functions";

export default function cvGenieQuestions(index: number): CvQuestion {
  const question: CvQuestion[] = [
    {
      question:
        "Hi there, I'm Genie! 🧞‍Can you tell me a bit about yourself? I'll use this info to create a personalized CV for you. Please share your name, email, phone number, and location.",
      type: "cv",
      name: "bio",
      number: 0,
    },
    {
      question:
        "Could you give me a brief summary or objective statement for your CV?",
      type: "cv",
      name: "bio_summary",
      number: 1,
    },
    {
      question:
        "Want to add a personal touch? 📷 You can upload a profile picture if you'd like. It can help your CV stand out!",
      type: "cv",
      name: "bio_profile",
      number: 2,
    },
    {
      question:
        "Let's talk about your work journey! Tell me about your job titles, employers, and when you started and finished each role.",
      type: "cv",
      name: "experience",
      number: 3,
    },
    {
      question:
        "Do you have any certifications or training you'd like to showcase on your CV? Tell me about them.",
      type: "cv",
      name: "certifications",
      number: 4,
    },
    {
      question:
        "Share some noteworthy projects you've worked on. I'll make sure they shine on your CV!",
      type: "cv",
      name: "projects",
      number: 5,
    },
    {
      question:
        "What are your special skills and talents? Let me know, and I'll highlight them on your CV!",
      type: "cv",
      name: "skills",
      number: 6,
    },
    {
      question:
        "Do you speak any languages other than your native one? I'll make sure your CV showcases your linguistic talents!",
      type: "cv",
      name: "languages",
      number: 7,
    },
    {
      question:
        "Have you been involved in any volunteer work? Share the details. It can add a special touch to your CV!",
      type: "cv",
      name: "volunteer",
      number: 8,
    },
    {
      question:
        "Life isn't just about work, right? 😄 Tell me about your hobbies or interests, and I'll add a bit of your personality to your CV!",
      type: "cv",
      name: "hobbies",
      number: 9,
    },
    {
      question:
        "Let's talk about your educational background. Share your academic journey, including the schools you attended and the degrees you earned.",
      type: "cv",
      name: "education",
      number: 10,
    },
    {
      question:
        "Have you published articles, papers, or made presentations? I'd love to hear about them. It'll add a scholarly touch to your CV!",
      type: "cv",
      name: "published",
      number: 11,
    },
    {
      question:
        "Any awards or honors you've received? Please share the details, and I'll make sure they shine on your CV!",
      type: "cv",
      name: "recognition",
      number: 12,
    },
    {
      question:
        "Do you have any professional connections or an online portfolio you'd like to showcase on your CV? Share the details!",
      type: "cv",
      name: "Portfolio",
      number: 13,
    },
    {
      question:
        "Is there anything else you'd like to add? More information will help us create a comprehensive and personalized CV for you.",
      type: "cv",
      name: "more",
      number: 14,
    },
  ];
  return (
    question[index] ?? {
      question:
        "I have all the details I need to create your CV. When you're ready, just say 'Generate,' and I'll work my magic. In the meantime, feel free to provide any additional information or preferences to make your CV even better!",
      type: "cv",
      name: "default",
    }
  );
}

export function interviewAppointmentQuestions(
  index: number,
): IInterviewQuestion {
  const questions: IInterviewQuestion[] = [
    {
      question:
        "Hi there, I'm Genie! 🧞‍ I'd like to help you schedule a mock interview appointment. What is your full name?",
      type: "interview",
      name: "full_name",
      number: 0,
    },
    {
      question:
        "Great, What is your email address so I can contact you for the interview?",
      type: "interview",
      name: "email",
      number: 1,
    },
    {
      question: "What is the position you are applying for?",
      type: "interview",
      name: "position",
      number: 2,
    },
    {
      question:
        "Could you please provide a brief requirement of the job position you are applying for? If you could copy the exact requirement of the job here I will be very graceful.",
      type: "interview",
      name: "job_description",
      number: 3,
    },
    {
      question:
        "Do you have a preferred date for the mock interview? If yes, please specify.",
      type: "interview",
      name: "preferred_date",
      number: 4,
    },
    {
      question:
        "These are the panel members I have available. Please select one or more members you would like to have at your interview:",
      type: "interview",
      name: "panel_members",
      number: 5,
    },
    {
      question:
        "Thank you for providing the necessary information! I have sent you an email with instructions to your mock interview!",
      type: "interview",
      name: "confirmation",
      number: 6,
    },
  ];

  return (
    questions[index] ?? {
      question:
        "Thank you for providing the necessary information! I will contact you soon to confirm the interview details. Is there anything else you'd like to add?",
      type: "interview",
      name: "default",
    }
  );
}

export function getPanelMembers(): IPanel[] {
  return [
    {
      name: "Genie AI",
      expertise: "Chairperson",
      description:
        "Experienced Chairperson with a versatile skill set, capable of leading and overseeing all aspects of the interview process, ensuring a smooth and organized experience for candidates and the interview panel.",
      email: "",
      selected: true,
      voice: "en-US-Studio-Q",
      profile: "/p6.png",
    },
    {
      name: "Mavis Brown",
      expertise: "HR Representative",
      description:
        "HR Representative specializing in talent acquisition and employee relations, ensuring that HR-related aspects of the interview process are handled effectively and in compliance with organizational policies.",
      email: "",
      voice: "en-US-Studio-O",
      selected: false,
      profile: "/p1.jpg",
    },
    {
      name: "David Wilson",
      expertise: "Subject Matter Expert (SME)",
      description:
        "Subject Matter Expert (SME) in marketing, with extensive experience in digital marketing strategies and brand management. Responsible for assessing marketing-related qualifications.",
      email: "",
      voice: "en-US-Wavenet-D",
      selected: false,
      profile: "/p2.jpg",
    },
    {
      name: "Vivian Davis",
      expertise: "Behavioral Assessor",
      description:
        "Behavioral Assessor with a background in finance, specializing in financial planning and investment management. Responsible for evaluating behavioral and soft skills.",
      email: "",
      voice: "en-US-Wavenet-G",
      selected: false,
      profile: "/p4.png",
    },
    {
      name: "John Smith",
      expertise: "Practical Assessor",
      description:
        "Practical Assessor with a background as a Senior, possessing expertise in practical development and system architecture. Responsible for evaluating technical skills and proficiency.",
      email: "",
      voice: "en-US-Wavenet-J",
      selected: false,
      profile: "/p3.png",
    },
    {
      name: "Daniel Clark",
      expertise: "Diversity and Inclusion Representative",
      description:
        "Diversity and Inclusion Representative committed to promoting fairness, equity, and inclusivity throughout the interview process, ensuring that all candidates have an equal opportunity.",
      email: "",
      voice: "en-US-Wavenet-B",
      selected: false,
      profile: "/p5.jpg",
    },
  ];
}

export function getInterviewSteps() {
  return [
    {
      name: "Settings",
      expertise: "",
      description:
        "To enhance your overall experience, it is imperative that we ensure your compliance with all stipulated requirements.",
    },
    {
      name: "Introduction",
      expertise: "",
      description: "Welcome and initial introductions.",
    },
    {
      name: "Self-Introduction",
      expertise: "",
      description:
        "The candidate introduces themselves and their qualifications.",
    },
    {
      name: "Follow Up Assessment",
      expertise: "",
      description:
        "Evaluation of the candidate's technical skills and expertise base on self introduction.",
    },
    {
      name: "Technical Assessment",
      expertise: "",
      description:
        "Evaluation of the candidate's technical skills and expertise.",
    },
  ];
}

export function getInterviewClosingStage() {
  return [
    {
      name: "Candidate Questions",
      expertise: "",
      description:
        "Candidate's opportunity to ask questions about the company and role.",
    },
    {
      name: "Closing",
      expertise: "",
      description: "Conclusion of the interview with feedback and next steps.",
    },
  ];
}

export function getInterviewTechStage() {
  return [
    {
      name: "Behavioral Assessment",
      expertise: "Behavioral Assessor",
      description: "Evaluation of the candidate's soft skills and behaviors.",
    },
    {
      name: "HR-Related Questions",
      expertise: "HR Representative",
      description:
        "Questions about the candidate's work history and experiences.",
    },
    {
      name: "Subject Matter Expertise",
      expertise: "Subject Matter Expert (SME)",
      description:
        "Questions related to specific domain knowledge or expertise.",
    },
    {
      name: "Diversity and Inclusion",
      expertise: "Diversity and Inclusion Representative",
      description:
        "Questions related to diversity, equity, and inclusion principles.",
    },
  ];
}

function convertNounToAdverb(noun: string): string {
  const nounToAdverbSuffixes: { [key: string]: string } = {
    er: "ing",
    eer: "eering",
    or: "tion",
    ist: "ly",
    ion: "ly",
    ance: "ly",
    ence: "ly",
    ity: "ly",
    ment: "ly",
    hood: "ly",
    dom: "ly",
    ship: "ly",
    age: "ly",
    ness: "ly",
    th: "ly",
    sion: "ly",
    sity: "ly",
    ability: "ly",
    ibility: "ly",
    ary: "ly",
    ery: "ly",
    ory: "ly",
    cy: "ly",
    ily: "ly",
    lessly: "ly",
    ward: "ly",
    wards: "ly",
    wise: "ly",
  };
  for (const nounSuffix in nounToAdverbSuffixes) {
    if (noun.endsWith(nounSuffix)) {
      return (
        noun.slice(0, -nounSuffix.length) + nounToAdverbSuffixes[nounSuffix]
      );
    }
  }
  return noun;
}

function introductionPrompts(number: number, data: any): any {
  switch (number) {
    case 1:
      return `Let's simulate a mock interview. You play the role of the interviewer, and I'll be the interviewee. 
      We have a panel of experts with different areas of expertise. Each panel member will introduce themselves, 
      and then the Chairperson will ask me to introduce myself. Please provide the introductions for each panel member, 
      assign questions to them based on their expertise, and then have the Chairperson ask me to introduce myself. 
      Ensure that the introductions and questions are structured to mimic a real interview process.
      panel of experts:
      ${data?.panelMembers}
      `;
  }
}

export function getIntroduction(role: string): Array<any> {
  return [
    {
      panel_name: "Genie AI",
      expertise: "Chairperson",
      question:
        "Ladies and gentlemen, welcome to our mock interview. I'm your Chairperson, Genie AI, and I'll be overseeing today's proceedings. But enough about me, let's hear from our esteemed panel members. Each of them will introduce themselves briefly, sharing their name, background, and qualifications relevant to their role on this panel.",
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "Mavis Brown",
      expertise: "HR Representative",
      question:
        "Greetings! I'm Mavis Brown, your HR Representative. My expertise lies in talent acquisition and employee relations, ensuring that HR-related aspects of this interview process run smoothly and in line with our organization's policies.",
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "David Wilson",
      expertise: "Subject Matter Expert (SME)",
      question: `Hi there, I'm David Wilson, your Subject Matter Expert in ${convertNounToAdverb(
        role.toLowerCase().replace(/\bjunior\b|\bsenior\b/g, ""),
      )}. My journey has revolved around digital ${convertNounToAdverb(
        role.toLowerCase().replace(/\bjunior\b|\bsenior\b/g, ""),
      )} strategies and brand management. Today, I'm here to assess your ${convertNounToAdverb(
        role.toLowerCase().replace(/\bjunior\b|\bsenior\b/g, ""),
      )}-related qualifications.`,
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "John Smith",
      expertise: "Practical Assessor",
      question: `Hello, I'm John Smith, your Practical Assessor. With a background as a Senior ${role
        .toLowerCase()
        .replace(
          /\bjunior\b|\bsenior\b/g,
          "",
        )}, I've spent years delving into the intricacies of ${convertNounToAdverb(
        role.toLowerCase().replace(/\bjunior\b|\bsenior\b/g, ""),
      )}. Today, I'll be evaluating your practical skills and proficiency.`,
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "Vivian Davis",
      expertise: "Behavioral Assessor",
      question: `Pleasure to meet you! I'm Vivian Davis, your Behavioral Assessor. My background in ${convertNounToAdverb(
        role.toLowerCase().replace(/\bjunior\b|\bsenior\b/g, ""),
      )} equips me to evaluate behavioral and soft skills.`,
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "Daniel Clark",
      expertise: "Diversity and Inclusion Representative",
      question:
        "Hello, I'm Daniel Clark, and my mission is promoting diversity and inclusion. I'm committed to ensuring fairness, equity, and inclusivity throughout this interview process, offering everyone an equal opportunity.",
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "Genie AI",
      expertise: "Chairperson",
      question:
        "Thank you, panel members, for your introductions. Now, it's our candidate's turn to shine. Please introduce yourself, including your name, background, and any qualifications or experiences that make you an ideal fit for this position.",
      type: "question",
      answer: null,
    },
  ];
}

export function getClosingQuestion() {
  return {
    panel_name: "Genie AI",
    expertise: "Chairperson",
    question:
      "Do you have any questions or concerns about the role or the company based on our discussion today, and is there anything specific you'd like to know more about regarding the responsibilities of this position?",
    type: "closing question",
    answer: null,
  };
}

export function getClosingRemarkQuestion() {
  return {
    panel_name: "Genie AI",
    expertise: "Chairperson",
    question: `Thank you for your time today. It was a pleasure getting to know you and discussing your qualifications. We appreciate your interest in joining our team. We will be in touch soon regarding the next steps in the hiring process. Have a wonderful ${getTimeOfDay()}, and goodbye!`,
    type: "closing question",
    answer: null,
  };
}

export function interviewPrompt(
  index: number,
  data: any,
  type: string = "technical",
): string {
  const json = JSON.parse(data.requirement);
  const requirement = json.description;
  const resume = json.resume;
  const question = json.questions;
  switch (index) {
    case 0:
      return `Generate a user-friendly follow-up question to assess the candidate's suitability for the position of 
      ${data?.position} in a mock interview. The question should be relevant to the candidate's introduction and, 
      if available, their resume (CV), and should be assigned to the panel members based on their respective fields 
      and the job requirements. Start with a nice gesture and tailor the question to assess the candidate's fit for 
      the role. If provided, consider the job requirements when formulating the question. 
      Remember to ensure that the response is in this JSON format, [{"panel_name": "","expertise": "","question": "","type": "question"}]. 
      ${
        requirement ? "  Job requirements: " + requirement : ""
      }, candidate’s introduction: ${data?.introduction} ${
        resume?.length > 20 ? ", resume (CV): " + resume : ""
      } and , panel members: ${data?.panels}.`;
    case 1:
      return `Simulate a ${type} interview for a ${
        data.position
      } role, with the Panel member details: ${data.panels}. 
      Your task is to ask one question at a time ${
        question?.length > 20
          ? " Based on these questions" + question + " and."
          : ""
      }, related to the ${
        requirement
          ? "specified requirements (" +
            requirement +
            ") " +
            "for the role, and include the"
          : ""
      } interviewee's previous answer in your response. Keep the interview conversational, 
          user-friendly, and ensure that the interviewee has a clear understanding of the required ${
            type.split(" ")[0]
          } 
          skills and experience for the role. Please ensure that each response is in the following 
          JSON format: {'panel_name': '', 'expertise': '', 'question': '', 'type': 'Question'}. 
          If the interviewee answers incorrectly, provide brief feedback before moving on to the next question. 
          The questions should cover a range of ${
            type.split(" ")[0]
          } skills and experience relevant to the 
          ${
            data.position
          } role, and the interview should maintain a conversational and user-friendly tone throughout.`;
    case 2:
      return `Let's simulate a closing interview. Imagine you are ${data.panels} as the panel members. Please provide real-world interview closing answers based on the role of ${data.position} and its requirements: ${requirement}. One answer at a time, but assign the answer to one of the panel members based on their experiences. Make the answers more user-friendly and real-world-like. Before you answer the question, you can briefly discuss my question, especially when it is an open-ended question. I want the response to fill the JSON object. I am using it for a project, so any text not in the JSON cannot be read: {"panel_name": "${data.panel_name}", "answer": "Your answer goes here"}. Remember to assign one answer to a panel member at a time, as only one panel member can speak at a time. The interviewee's question: ${data.question}`;
  }
  return "";
}

export function getErrorMessage() {
  return "Oops! It seems like we've encountered a hiccup on our end. Our team is already hard at work to fix the issue and get things back to normal as quickly as possible. We apologize for any inconvenience this may have caused you. In the meantime, could you please refresh the page and try again? If the problem persists, don't hesitate to reach out to our support team for further assistance. Thank you for your patience and understanding.";
}

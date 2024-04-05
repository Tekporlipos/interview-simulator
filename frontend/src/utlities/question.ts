export default function getQuestionAndAnswers(): Array<any> {
  return [
    {
      question: "How does GenieAIBuilder enhance website creation?",
      answer:
        "GenieAIBuilder uses AI to streamline design, content, and customization, aligning with your style and goals.",
    },
    {
      question: "Can GenieAIBuilder understand my career aspirations?",
      answer:
        "Yes, GenieAIBuilder's AI-driven tools adapt to your responses, guiding you for interviews and applications.",
    },
    {
      question: "Will GenieAIBuilder-generated resumes represent my journey?",
      answer:
        "Yes, GenieAIBuilder's AI-based CV builder showcases your experiences and skills accurately.",
    },
    {
      question:
        "How reliable is GenieAIBuilder for cover letters and statements?",
      answer:
        "Highly reliable GenieAIBuilder helps craft compelling cover letters and personal statements.",
    },
    {
      question: "Can GenieAIBuilder tailor guidance for individuals?",
      answer: "Absolutely, GenieAIBuilder's AI provides personalized guidance.",
    },
    {
      question: "Will GenieAIBuilder replace human interaction?",
      answer: "No, GenieAIBuilder balances AI efficiency with human insights.",
    },
    {
      question: "How secure is my data with GenieAIBuilder tools?",
      answer:
        "GenieAIBuilder prioritizes data security for an empowering and safe experience.",
    },
    {
      question:
        "Can non-tech-savvy individuals benefit from GenieAIBuilder tools?",
      answer:
        "Yes, GenieAIBuilder's user-friendly AI simplifies processes for everyone.",
    },
  ];
}
export function getFeaturesList(): Array<any> {
  return [
    {
      number: "1",
      title: "Innovative Website Building",
      description:
        "Create stunning websites without coding. Our chat-based interface brings your vision to life effortlessly.",
    },
    {
      number: "2",
      title: "Mock Interview Preparation",
      description:
        "Sharpen interview skills with simulated scenarios. Practice answering questions and build confidence.",
    },
    {
      number: "3",
      title: "CV (Resume) Builder",
      description:
        "Craft tailored resumes. Input details and skills, watch as GenieBuilder transforms them into CVs.",
    },
    {
      number: "4",
      title: "Application Crafting",
      description:
        "Elevate applications with custom cover letters and personal statements",
    },
    {
      number: "5",
      title: "Seamless Hosting Options",
      description:
        "Host websites on our platform or download files for customization and deployment.",
    },
    {
      number: "6",
      title: "Cross-Device Compatibility",
      description:
        "Enjoy responsive websites optimized for various devices, ensuring impeccable online presence.",
    },
  ];
}

export function siteBuilderQuestions(): Array<any> {
  return [
    {
      question: "How does GenieAIBuilder generate personalized content?",
      answer:
        "GenieAIBuilder uses machine learning to analyze user inputs and create tailored content.",
    },
    {
      question: "How does GenieAIBuilder's chat-based interface work?",
      answer:
        "GenieAIBuilder's chat interface simplifies website creation by letting users communicate requirements naturally.",
    },
    {
      question: "What are GenieAIBuilder's customization options?",
      answer:
        "GenieAIBuilder allows customization of design, layout, and color to match brand or style.",
    },
    {
      question: "What are the deployment options for GenieAIBuilder?",
      answer:
        "Users can download site files or host on the platform for flexible deployment.",
    },
    {
      question: "Explain the Memories feature of GenieAIBuilder.",
      answer:
        "GenieAIBuilder remembers user instructions to streamline conversations and processes.",
    },
    {
      question: "Example of requesting a feature with GenieAIBuilder.",
      answer:
        "Users can request features like calculators, and GenieAIBuilder generates the necessary components.",
    },
    {
      question: "How does GenieAIBuilder create a tic-tac-toe game?",
      answer:
        "GenieAIBuilder uses UIKits to design and style games based on user requests.",
    },
    {
      question: "How does GenieAIBuilder ensure matching branding?",
      answer:
        "Customization options in GenieAIBuilder ensure websites match users' brand or style.",
    },
    {
      question: "Creating a register page with UIKit styling.",
      answer:
        "Request a UIKit-styled register page, and GenieAIBuilder designs and styles it according to preferences.",
    },
  ];
}

export function siteBuilderExamples(): Array<any> {
  return [
    {
      title: "Generate a Simple Calculator:",
      example:
        "HTML project with JavaScript code to create a basic calculator that can add, subtract, multiply, and divide numbers on my website.",
    },
    {
      title: "Develop a Tic Tac Toe Game:",
      example:
        "HTML project with JavaScript code to create a tic-tac-toe game that allows two players to take turns and displays the game board with a win/lose condition.",
    },
    {
      title: "Build a Contact Form:",
      example:
        "HTML project with JavaScript code to build a contact form with validation and functionality to send user data.",
    },
    {
      title: "Develop a Quiz:",
      example:
        "using bootstrap styling, create HTML project with JavaScript code to create an interactive quiz with questions, options, and a scoring system.",
    },
    {
      title: "Create a Blog Post Page:",
      example:
        "HTML project with JavaScript code to create a blog post page with text formatting options, image uploading, and categorization for each post.",
    },
    {
      title: "Create a Customer Testimonial Section:",
      example:
        "HTML project with JavaScript code to design a customer testimonial section for a website. It allows you to add, manage, and showcase reviews from satisfied customers.",
    },
    {
      title: "Develop a User Registration System:",
      example:
        "HTML project with JavaScript code to create a user registration system with email verification for an online community forum.",
    },
    {
      title: "Build an Event Calendar:",
      example:
        "HTML project with JavaScript code to create an event calendar for a website. It allows you to add, manage, and display upcoming events.",
    },
    {
      title: "Design a Login Page:",
      example:
        "HTML project with JavaScript code to design a user register page with fields for username and password.",
    },
  ];
}

export const template: any[] = [
  {
    name: "Professional Single Page CV (Resume)",
    id: "789012",
    description:
      "A sleek and professional one-page CV (resume) template designed to captivate. Highlight your skills, experiences, and qualifications with clarity and modern elegance.",
    avatar: "/template-1.png",
    type: "Professional",
    content: ``,
    url: "./options",
    tag: ["pdf"],
    question: [0, 1, 2, 3, 6, 7, 8, 10],
    premium: false,
    payment: {
      premium: false,
      account: "john.doe@example.com",
      id: "122342424",
    },
  },
  {
    name: "Simple and stunning CV (Resume)",
    id: "789014",
    description:
      'A "Simple and Stunning CV (Resume)" template is a clean and visually appealing document designed to highlight an individual\'s qualifications, skills, and professional experience in a straightforward yet captivating manner. ',
    avatar: "/template-3.png",
    type: "General",
    content: ``,
    url: "./options",
    tag: ["pdf"],
    question: [0, 1, 2, 3, 6, 7, 8, 10],
    premium: false,
    payment: {
      premium: false,
      account: "john.doe@example.com",
      id: "122342424",
    },
  },
  {
    name: "Standard Single Page CV (Resume)",
    id: "789013",
    description:
      'A "Single Page CV (Resume)" is a concise, one-page document summarizing an individual\'s qualifications, skills, education, and work experience, typically used for job applications.',
    avatar: "/template-2.png",
    type: "Modern",
    content: ``,
    url: "./options",
    tag: ["pdf"],
    question: [0, 1, 2, 3, 5, 6, 7, 8, 10],
    premium: false,
    payment: {
      premium: false,
      account: "john.doe@example.com",
      id: "122342424",
    },
  },
];

export function timeSince(DateString: string): string {
  const date: number = new Date(DateString).getTime();
  const now: number = new Date().getTime();
  const seconds: number = Math.abs(Math.floor((now - date) / 1000));
  if (date > now) {
    // Handle future date
    let interval: number = seconds / 31536000;
    if (interval > 1) {
      return "In " + Math.floor(interval) + " year(s)";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return "In " + Math.floor(interval) + " month(s)";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return "In " + Math.floor(interval) + " day(s)";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return "In " + Math.floor(interval) + " hour(s)";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return "In " + Math.floor(interval) + " minute(s)";
    }
    return "In " + Math.floor(seconds) + " second(s)";
  } else {
    // Handle past date
    let interval: number = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + " year(s) ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " month(s) ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " day(s) ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hour(s) ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minute(s) ago";
    }
  }
  return (seconds ? Math.floor(seconds) : Infinity) + " second(s) ago";
}

export function isWithin30MinutesFromNow(
  DateString: string,
  left: number = 30,
): boolean {
  const date: number = new Date(DateString).getTime();
  const now: number = new Date().getTime();
  const timeDifference = now - date;
  return (
    timeDifference >= -10 * 60 * 1000 && timeDifference <= left * 60 * 1000
  );
}

export function isWithin15FromNow(DateString: string, left: number): boolean {
  const date: number = new Date(DateString).getTime() + 20 * 60 * 1000;
  const now: number = new Date().getTime();
  return now + left * 60 * 1000 < date;
}

export function getInitialsFromUsername(username: string): string {
  if (!username) return "N?A";
  const parts = username?.split(" "); // Split the username into parts using space
  if (parts.length === 2) {
    const firstNameInitial = parts[0].charAt(0).toUpperCase();
    const lastNameInitial = parts[1].charAt(0).toUpperCase();
    return firstNameInitial + lastNameInitial;
  } else {
    return username.substring(0, 2);
  }
}

export const OBJECT_DATA = `{bio = {profile_picture: ,name: ,phone_number: ,email_address: ,location: ,title:,description:},
theoretical = {educations: [{program_name: ,institution_name: ,date_start: ["mm","yyyy"],date_end: ["mm",yyyy”],location: ,description:}],
publications: [{publication_name: ,date_start: ["mm","yyyy"],date_end: ["mm","yyyy”],description: }]},
practical = {experiences: [{job_title: ,company_name: ,date_start: ["mm","yyyy”],date_end: ["mm","yyyy"],location: ,descriptions:[]}],
certifications: [{certification_name: ,date_start: [“mm”,”yyyy"],date_end: ["mm","yyyy"],description:}],
projects: [{project_name: ,date_start: ["mm","yyyy"],date_end: ["mm","yyyy"],project_description: ,description:}]},
recognition= [{awards_honors: ,description:}]abilities = {skills: [{skill_name: ,level:}"],languages: [{language_name: ,level: }],
volunteer: [{company_name: ,date_start: ["mm","yyyy"],date_end: ["mm","yyyy"],work_description: ,description:}],
hobbies:[{hobbies_name:,description:}]},
personality = [{link:}}`;

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

export function getEnablers() {
  return [
    {
      name: "John Dzikunu",
      expertise: "Feedback And Site Manager",
      description:
        "Experienced in overseeing feedback processes and optimizing site performance. With a focus on detail and strategic thinking, this role ensures effective collection, analysis, and action on user feedback to enhance user experience and drive site improvement initiatives. The Feedback And Site Manager collaborates with cross-functional teams to identify areas for enhancement and implement solutions aligned with organizational goals. This expertise streamlines feedback processes and boosts site performance.",
      email: "",
      voice: "en-US-News-N",
      selected: false,
      profile: "/p12.png",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FJohn%20Dzikunu.wav?alt=media&token=d0c49079-b49c-40a2-ba10-9abcd5bf5b8a",
      bio: "Hi there! I'm John Dzikunu, and I'm here to revolutionize the way we perceive user feedback. As a Feedback And Site Manager, I'm passionate about translating data insights into actionable improvements for our online platforms. With a keen eye for detail and a commitment to user satisfaction, I specialize in optimizing site performance and enhancing the overall user experience. Let's embark on a journey of continuous improvement together, ensuring that our digital presence exceeds expectations at every turn.",
    },
    {
      name: "Mavis Yeboah",
      expertise: "Social Media and Marketing Manager",
      description:
        "Experienced in leveraging social platforms to drive brand awareness, engagement, and conversion. This role focuses on developing and executing social media strategies that align with marketing objectives. Responsibilities include managing social media accounts, creating compelling content, implementing advertising campaigns, monitoring social trends, and analyzing performance metrics. The ideal candidate possesses a blend of creativity, analytical skills, and a deep understanding of various social media platforms and their audiences.",
      email: "",
      voice: "en-US-News-L",
      selected: false,
      profile: "/p13.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FMavis%20Yeboah.wav?alt=media&token=a18ffce1-2a34-4cf6-869d-e73265fc039f",
      bio: "Hello, I'm Mavis Yeboah, and I'm passionate about shaping brand narratives through social media. As a Social Media and Social Marketing Manager, I specialize in driving brand awareness, engagement, and conversion through strategic social media initiatives. With a keen understanding of various social platforms and their audiences, I excel in creating compelling content, implementing advertising campaigns, and analyzing performance metrics to optimize our online presence. Let's work together to elevate our brand's social media presence and make meaningful connections with our audience.",
    },
    {
      name: "Alexandre Silva",
      expertise: "Full Stack Developer",
      description:
        "Experienced in developing both front-end and back-end components of web applications, a Full Stack Developer is proficient in languages and frameworks such as HTML, CSS, JavaScript, React, Node.js, and Express.js. Responsibilities include designing user interactions, developing servers and databases, and ensuring responsiveness and performance optimization. The role requires strong problem-solving skills and attention to detail.",
      email: "",
      voice: "en-US-Journey-D",
      selected: false,
      profile: "/p14.png",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FAlexandre%20Silva.wav?alt=media&token=4aa80d6d-ff63-4462-b425-b6476a94baf0",
      bio: "Greetings! I'm Alexandre Silva, a dedicated Full Stack Developer passionate about crafting seamless web experiences. With expertise in both front-end and back-end technologies, I specialize in building robust and scalable web applications from concept to deployment. From designing user interfaces to implementing server-side logic, I thrive on solving complex problems and delivering high-quality solutions. Let's collaborate to bring your digital vision to life and create innovative web experiences that captivate and delight users.",
    },
    {
      name: "Morris Arthur",
      expertise: "Prompt Engineer and AI Expert",
      description:
        "A Prompt Engineer and AI Expert specializes in designing and optimizing prompts for AI systems. This role involves creating effective prompts that guide AI interactions and improve user engagement. Additionally, the expert fine-tunes AI models to enhance performance and accuracy. Strong knowledge of natural language processing (NLP) techniques and machine learning algorithms is essential for success in this role.",
      email: "",
      voice: "en-US-Neural2-D",
      selected: false,
      profile: "/p15.png",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FMorris%20Author.wav?alt=media&token=f5cbb799-d301-4a8f-ba85-288c2649bf92",
      bio: "Hello, I'm Morris Author, your dedicated Prompt Engineer and AI Expert. With a passion for designing and optimizing prompts for AI systems, I specialize in creating engaging interactions that enhance user experiences. My expertise extends to fine-tuning AI models to ensure optimal performance and accuracy. Leveraging advanced techniques in natural language processing and machine learning, I'm committed to driving innovation in AI technology. Let's collaborate to unlock the full potential of AI and create seamless user interactions that redefine the digital landscape.",
    },
  ];
}

export function getInterviewCoach() {
  return [
    {
      name: "Natalie Rivera",
      expertise: "Career Coach",
      description:
        "Experienced Career Coach specializing in guiding individuals through career transitions, job search strategies, and interview preparation. Equipped to provide personalized advice and support.",
      email: "",
      voice: "en-US-News-K",
      selected: false,
      profile: "/p10.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FNatalie%20Rivera.wav?alt=media&token=f16eed2d-a2a0-4c8d-b122-78fe611027e7",
      bio: "Hello, I'm Natalie Rivera, your dedicated career coach. With years of experience specializing in guiding individuals through career transitions, job search strategies, and interview preparation, I'm equipped to provide personalized advice and support tailored to your needs. Whether you're navigating a career change or preparing for an interview, I'm here to offer guidance and strategies to help you achieve your professional goals. Let's work together to unlock your full potential and embark on a successful career journey.",
    },
    {
      name: "Michael Chang",
      expertise: "Interview Mentor",
      description:
        "Interview Mentor with a proven track record of helping candidates excel in interviews. Provides insights, techniques, and feedback to boost confidence and performance.",
      email: "",
      voice: "en-US-Wavenet-Q",
      selected: false,
      profile: "/p11.png",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FMichael%20Chang.wav?alt=media&token=a5bd2854-38e2-442c-b97b-9532c5bae266",
      bio: "Hello, I'm Michael Chang, your dedicated interview mentor. With a proven track record of helping candidates excel in interviews, I bring invaluable insights, techniques, and feedback to boost your confidence and performance. Whether you're preparing for your first interview or seeking to improve your interview skills, I'm here to provide tailored guidance and support. Together, let's work towards mastering the art of interviewing and achieving your career goals.",
    },
    {
      name: "Mavis Brown",
      expertise: "HR Representative",
      description:
        "HR Representative with a wealth of experience in talent acquisition, employee relations, and organizational development. Offers personalized coaching on career growth, interview strategies, and professional advancement.",
      email: "",
      voice: "en-US-Studio-O",
      selected: false,
      profile: "/p1.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FMavis%20Brown.wav?alt=media&token=4c48dab2-6a96-4e9f-b315-85cbd00b931d",
      bio: "Welcome, I'm Mavis Brown, your HR Representative and trusted career coach. With a focus on talent acquisition and employee relations, I bring a wealth of experience to the interview process. Beyond traditional HR responsibilities, I'm passionate about supporting individuals in their career journey. As your career coach, I provide personalized guidance on navigating job opportunities, honing interview skills, and achieving professional growth. Together, let's unlock your potential and pave the way for your career success.",
    },
    {
      name: "David Wilson",
      expertise: "Subject Matter Expert (SME)",
      description:
        "Subject Matter Expert (SME) in marketing, with extensive experience in digital marketing strategies and brand management. Provides comprehensive career coaching tailored to individual needs, focusing on skill development, job search strategies, and interview preparation.",
      email: "",
      voice: "en-US-Wavenet-D",
      selected: false,
      profile: "/p2.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FDavid%20Wilson.wav?alt=media&token=e08ec75a-e8fc-4d2a-8f40-192e9e334ea7",
      bio: "Hello, I'm David Wilson, an SME in marketing and your trusted career coach. With a deep understanding of digital marketing strategies and brand management, I bring invaluable insights to the interview process. Beyond my expertise in marketing, I'm committed to helping individuals navigate their career paths. As your career coach, I offer tailored guidance on honing your skills, refining your resume, and mastering interview techniques. Let's work together to unlock your full potential and achieve your career aspirations.",
    },
  ];
}

export function getPanelMembers(): IPanel[] {
  return [
    {
      name: "Genie AI",
      expertise: "Chairperson",
      description:
        "Chairperson with extensive expertise and a broad skill set, able to manage and direct all facets of the process and guarantee a seamless and well-organized experience for applicants.",
      email: "",
      selected: true,
      voice: "en-US-Studio-Q",
      profile: "/p6.png",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FGenie%20AI.wav?alt=media&token=f0886812-eeb6-4ac3-a6fd-18424831914c",
      bio: "Hello, I'm Genie AI. With years of experience as both a chairperson and a seasoned career coach, I bring a unique blend of expertise to the interview process. As a chairperson, I ensure smooth coordination and direction, ensuring every applicant's experience is seamless. As a career coach, I'm dedicated to empowering individuals, offering personalized guidance and strategies to navigate career transitions, refine interview techniques, and achieve professional success. Let's embark on this journey together towards your career goals.",
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
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FMavis%20Brown.wav?alt=media&token=4c48dab2-6a96-4e9f-b315-85cbd00b931d",
      bio: "Welcome, I'm Mavis Brown, your HR Representative and trusted career coach. With a focus on talent acquisition and employee relations, I bring a wealth of experience to the interview process. Beyond traditional HR responsibilities, I'm passionate about supporting individuals in their career journey. As your career coach, I provide personalized guidance on navigating job opportunities, honing interview skills, and achieving professional growth. Together, let's unlock your potential and pave the way for your career success.",
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
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FDavid%20Wilson.wav?alt=media&token=e08ec75a-e8fc-4d2a-8f40-192e9e334ea7",
      bio: "Hello, I'm David Wilson, an SME in marketing and your trusted career coach. With a deep understanding of digital marketing strategies and brand management, I bring invaluable insights to the interview process. Beyond my expertise in marketing, I'm committed to helping individuals navigate their career paths. As your career coach, I offer tailored guidance on honing your skills, refining your resume, and mastering interview techniques. Let's work together to unlock your full potential and achieve your career aspirations.",
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
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FVivian%20Davis.wav?alt=media&token=9d6134ef-5459-489b-8a39-2066403bfd1d",
      bio: "Hello, I'm Vivian Davis, your dedicated interviewer. With a background in finance, I bring a unique perspective to evaluating behavioral and soft skills. Specializing in financial planning and investment management, I'm well-equipped to assess your abilities and potential. As your interviewer, my goal is to provide a thorough evaluation, offering valuable feedback to help you succeed. Let's embark on this interview journey together and uncover your strengths.",
    },
    {
      name: "John Smith",
      expertise: "Practical Assessor",
      description:
        "Practical Assessor with a background as a Senior, possessing expertise in practical development and system architecture. Responsible for evaluating technical skills and proficiency.",
      email:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FJohn%20Smith.wav?alt=media&token=5ec49771-7180-4627-adb7-d356e8485587",
      voice: "en-US-Wavenet-J",
      selected: false,
      profile: "/p3.png",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FJohn%20Smith.wav?alt=media&token=5ec49771-7180-4627-adb7-d356e8485587",
      bio: "Hello, I'm John Smith, your dedicated interviewer and practical assessor. With a background as a Senior, I bring extensive expertise in practical development and system architecture to the interview process. Responsible for evaluating technical skills and proficiency, I'll assess your abilities with precision and accuracy. My goal as your interviewer is to provide a comprehensive evaluation, offering constructive feedback to support your professional growth. Let's embark on this interview journey together and explore your technical capabilities.",
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
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FDaniel%20Clark.wav?alt=media&token=236caa64-b4b2-492a-ab52-33b422d02423",
      bio: "Hello, I'm Daniel Clark, your Diversity and Inclusion Representative and dedicated interviewer. Committed to promoting fairness, equity, and inclusivity throughout the interview process, I ensure that all candidates have an equal opportunity to showcase their skills and talents. With a focus on creating an inclusive environment, I strive to make every interview experience respectful and welcoming. As your interviewer, I'm here to facilitate a constructive dialogue and provide valuable feedback. Let's embark on this journey together towards a more inclusive future.",
    },
    {
      name: "Ryan Johnson",
      expertise: "Consultant",
      description:
        "Consultant with experience across different domains, providing strategic advice and guidance to organizations. Offers a well-rounded perspective during interviews.",
      email: "",
      voice: "en-US-Wavenet-I",
      selected: false,
      profile: "/p7.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FRyan%20Johnson.wav?alt=media&token=f278c679-a782-4ca6-a53f-808b57c61ac2",
      bio: "Hello, I'm Ryan Johnson, your interviewer and seasoned consultant. With a diverse background across different domains, I bring a wealth of experience to the interview process. As a consultant, I've provided strategic advice and guidance to organizations, offering a well-rounded perspective during interviews. My goal as your interviewer is to ensure a comprehensive assessment, drawing on my expertise to evaluate your skills and potential. Together, let's navigate this interview journey and uncover opportunities for growth and success.",
    },
    {
      name: "Sophie Roberts",
      expertise: "Project Manager",
      description:
        "Project Manager with experience leading cross-functional teams and managing complex projects. Assesses candidates' project management skills and ability to deliver results.",
      email: "",
      voice: "en-US-Standard-C",
      selected: false,
      profile: "/p8.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FSophie%20Roberts.wav?alt=media&token=1c20b539-d829-4642-b746-751c3d85ebfd",
      bio: "Hello, I'm Sophie Roberts, your interviewer and experienced project manager. With a background in leading cross-functional teams and managing complex projects, I bring a unique perspective to the interview process. As a project manager, I've honed my ability to assess candidates' project management skills and their ability to deliver results. My aim as your interviewer is to provide a thorough evaluation, drawing on my expertise to identify your strengths and areas for growth. Let's embark on this interview journey together and explore the opportunities ahead.",
    },
    {
      name: "Ethan Cooper",
      expertise: "Entrepreneur",
      description:
        "Entrepreneur with experience in starting and growing successful ventures. Evaluates candidates' entrepreneurial mindset, innovation, and business acumen.",
      email: "",
      voice: "en-US-Standard-J",
      selected: false,
      profile: "/p9.jpg",
      audio:
        "https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/audio%2FEthan%20Cooper.wav?alt=media&token=529b21c1-347b-40a1-b2d9-78eb32196cb7",
      bio: "Hello, I'm Ethan Cooper, your interviewer and seasoned entrepreneur. With experience in starting and growing successful ventures, I bring a wealth of insights to the interview process. As an entrepreneur, I've evaluated countless individuals' entrepreneurial mindset, innovation, and business acumen. My goal as your interviewer is to assess your potential, drawing on my experience to identify your strengths and areas for development. Together, let's embark on this interview journey and uncover opportunities for your entrepreneurial success.",
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
      panel_name: "Ryan Johnson",
      expertise: "Consultant",
      question: `Hello, I'm Ryan Johnson, your consultant for this interview. With my extensive experience across different domains, I specialize in providing strategic advice and guidance to organizations.`,
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "Sophie Roberts",
      expertise: "Project Manager",
      question: `Greetings, I'm Sophie Roberts, your project manager for this interview. With a background in leading cross-functional teams and managing complex projects, I assess candidates' project management skills and ability to deliver results.`,
      type: "introduction",
      answer: null,
    },
    {
      panel_name: "Ethan Cooper",
      expertise: "Entrepreneur",
      question: `Nice to meet you! I'm Ethan Cooper, an entrepreneur here to evaluate your entrepreneurial mindset, innovation, and business acumen. I have experience in starting and growing successful ventures.`,
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


export const subscription = [
  {
    "name": "Lifelike interview simulations",
    "description": function (length?:string) {
      return `Experience realistic interview scenarios facilitated by AI panel members (${length?.split("@")[0]} per day and ${length?.split("@")[1]}).`
    },
    "domains": ["Starter", "Pro", "Advance", "Business"]
  },
  {
    "name": "Interview history",
    "description":function (state?:string) {
      return  `Access a record of past interviews for review and reflection. (On ${state} storage)`
    },
    "domains": ["Starter", "Pro", "Advance", "Business"]
  },
  {
    "name": "Comprehensive interview and career coaching sessions",
    "description": function (state:string = "") {
      return `Access comprehensive coaching sessions covering interview preparation and career guidance (${state?.split("@")[0]} per day and ${state?.split("@")[1]}).`
    },
    "domains": ["Starter","Pro", "Advance", "Business"]
  },
  {
    "name": "Personalized feedback reports",
    "description": function (state:string = "") {
      return `Receive tailored performance reports highlighting strengths and areas for improvement ${state}.`
    },
    "domains": ["Pro", "Advance", "Business"]
  },
  {
    "name": "Customizable interview simulations",
    "description": function () {
      return "Tailor interview simulations to specific job roles and industries.";
    },
    "domains": ["Business"]
  },
  {
    "name": "In-depth performance analytics",
    "description": function () {
      return "Analyze performance metrics to gain insights into interview performance."
    },
    "domains": ["Business"]
  },
  {
    "name": "Priority support",
    "description": function () {
      return "Receive priority assistance and support for any inquiries or issues.";
    },
    "domains": ["Business"]
  }
];


export const plan  = [
{
  "name":"Starter Plan",
  "description":"Begin your journey to interview success with our Starter Plan. Designed for those ready to excel in interviews, this plan offers essential features at an unbeatable value. With lifelike simulations, personalized feedback, and comprehensive resources, it's the perfect foundation to boost your confidence and skills. Whether you're a recent graduate or seasoned executive, the Starter Plan equips you for success. Start your journey today!",
  "price":8.00,
  "note":"Free Forever",
  "currency":"USD",
  "color":"red-500",
  "id":"0ed326ca-c1fc-440b-b1ba-bdfb01c43185"
},
  {
    "name":"Pro Plan",
    "description":"Upgrade to our Pro Plan for advanced interview preparation. Get realistic simulations, detailed feedback, premium resources, and personalized career coaching. Whether you're aiming for a career change or advancement, the Pro Plan equips you with the tools to excel. Take charge of your interview success today!",
    "price":10.0,
    "note":"Per Month",
    "color":"green-500",
    "currency":"USD",
    "id":"1ab56599-ff3e-4666-9686-edda6c81c82a"
  },
  {
    "name":"Advance Plan",
    "description":"Unlock elite interview preparation with our Advanced Plan. Get lifelike simulations, detailed feedback, premium resources, personalized career coaching, and more. Elevate your interview skills and achieve your career goals with confidence. Upgrade to the Advanced Plan today!",
    "price":15.0,
    "note":"Per Month",
    "color":"yellow-500",
    "currency":"USD",
    "id":"7b7130a6-68aa-49cb-9f13-818720c60fe8"
  },
  {
    "name":"Business Plan",
    "description":"Optimize your hiring process with our Business Plan. Access customizable simulations, performance analytics, team collaboration tools, coaching sessions, and priority support. Elevate your recruitment strategies and build a winning team today!",
    "price":70.0,
    "note":"Contact Support",
    "currency":"USD",
    "color":"blue-500",
    "id":"b60b5334-9b9c-4ef5-9c99-716abafd58d2"
  }
]
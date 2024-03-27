import { EmailRequestDTO } from "@/lib/DTO/IEmailRequestDTO";
import { transporter } from "@/lib/helpers/mailler";
import prisma from "@/lib/prisma/prisma";
import { generateUUID } from "@/utlities/functions";

export async function sendEmail(emailRequestDTO: EmailRequestDTO) {
  try {
    const messageClient = await prisma.email_message.create({
      data: {
        ...emailRequestDTO,
        id: generateUUID(),
        panel_members: {
          createMany: {
            data: emailRequestDTO.panel_members.map((panelMember) => ({
              ...panelMember,
              id: generateUUID(),
            })),
          },
        },
      },
      include: {
        panel_members: true,
      },
    });
    messageClient.recipient ? await processEmail(messageClient) : null;
    return messageClient;
  } catch (error) {
    throw new Error("Error sending email");
  }
}

export async function getInterview(id: string) {
  try {
    return await prisma.email_message.findFirstOrThrow({
      where: {
        id: id,
      },
      include: {
        panel_members: true,
      },
    });
  } catch (error) {
    throw new Error("Error fetching interview");
  }
}

async function processEmail(messageClient: any) {
  const url = process.env["APP_URL"] ?? "http://localhost:3000";
  const info = await transporter.sendMail({
    from: `"Genie Ai Builder" <${process.env["MAIL_USERNAME"]}>`,
    to: messageClient.recipient,
    subject:
      "Mock Interview Scheduling with GenieAIBuilder for the role of " +
      messageClient.position,
    html: getMessage(
      messageClient.full_name,
      messageClient.position,
      "GenieAiBuilder",
      `${url}/interview/${messageClient.interview_id}`,
      messageClient.date,
      generateGoogleCalendarLink(messageClient, url),
    ),
  });
}

function generateGoogleCalendarLink(emailRequest: any, url: string): string {
  const formattedDate = (date: Date) => {
    const pad = (n: number) => (n < 10 ? "0" + n : n);
    return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(
      date.getDate(),
    )}T${pad(date.getHours())}${pad(date.getMinutes())}`;
  };

  return `https://www.google.com/calendar/event?action=TEMPLATE&dates=${formattedDate(
    emailRequest.date,
  )}/${formattedDate(
    calculateNewDate(emailRequest.date),
  )}&text=${encodeURIComponent(
    `${emailRequest.position} Mock Interview`,
  )}&location=${url}/interview/${
    emailRequest.interview_id
  }&details=${encodeURIComponent(
    emailRequest.description != null
      ? emailRequest.description.substring(
          0,
          Math.min(500, emailRequest.description.length),
        )
      : "",
  )}`;
}
function calculateNewDate(originalDate: Date): Date {
  const newDate = new Date(originalDate.getTime());
  newDate.setMinutes(newDate.getMinutes() + 30);
  return newDate;
}

function getMessage(
  candidateName: string,
  jobTitle: string,
  companyName: string,
  meetingLink: string,
  date: string,
  calender: string,
): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Online Interview Invitation</title>
        <style>
            /* CSS styles for the email template */
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #dc3545;
                color: #fff;
                padding: 10px;
                text-align: center;
            }
            .event-info {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: center;
                background-color: #f7f7f7;
                padding: 2em;
                border: solid 2px #808080FF;
            }
            .event-info-left{
                flex: 1;
                border-right: solid 2px #808080FF;
            }
            .event-info-center {
                flex: 4;
                border-right: solid 2px #808080FF;
            }
            .event-info-right {
                flex: 2;
            }
            .event-info p {
                margin: 0;
            }
            .content {
                padding: 20px;
            }
            .button {
                display: inline-block;
                background-color: #007BFF;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 3px;
            }
            .button:hover {
                background-color: #0056b3;
            }
            .meeting-link {
                color: #007BFF;
            }
            btn-primary {
                        background-color: #007BFF;
                        color: #fff;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 3px;
             }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>Online Mock Interview Invitation</h2>
            </div>
    
            <div class="content">
                <p>Hello ${candidateName},</p>
                <p>When <b>${date}</b></p>
                <p>We are pleased to invite you to an online Mock interview for the position of ${jobTitle} at ${companyName}.</p>
                <p>Here are some interview tips to help you prepare:</p>
                <ul>
                    <li>Research our company and the role you're applying for.</li>
                    <li>Review your resume and be ready to discuss your experiences.</li>
                    <li>Prepare answers to common interview questions.</li>
                    <li>Dress professionally, even for a virtual interview.</li>
                    <li>Test your audio and video settings in advance.</li>
                </ul>
                <p>Please join the online meeting using the following link:</p>
                <p><a href="${meetingLink}" class="meeting-link btn-primary" target="_blank">Join Online Meeting</a></p>
                <p><a href="${calender}" class="meeting-link btn-primary" target="_blank">Add calendar</a></p>
                <p>We have added an invitation link to this email. Please use it to add the interview to your calendar to ensure you don't miss the interview:</p>
                <p>We look forward to meeting you virtually! If you have any questions or need any assistance, please feel free to contact us.</p>
                <p>Best regards,
                    <br>John Dzikunu
                    <br>GenieAIBuilder</p>
            </div>
        </div>
    </body>
    </html>
  `;
}

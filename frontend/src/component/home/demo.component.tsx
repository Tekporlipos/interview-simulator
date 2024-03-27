import "./css/home-style.css";
import VideoPlayerComponent from "@/component/home/VideoPlayerComponent";

export default function DemoComponent() {
  return (
    <div className="container px-5 md:mt-12 mb-10">
      <div className="flex flex-row text-black justify-center pt-10">
        <div className="flex flex-col justify-center w-96">
          <div className="text-black text-2xl md:text-4xl mb-3 font-weight-700 text-center">
            How it works:
          </div>
          <div className="text-center font-extralight font-weight-200">
            Unravel the wonders of our platform through our straightforward
            explanation.
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 px-5 lx:px-32 py-5 mt-10 rounded-xl justify-stretch transition hover:shadow-lg cursor-pointer">
        <div className="flex flex-col flex-1">
          <div className="text-sm">
            <span className="bg-red-500/10 px-2 py-1 rounded uppercase">
              Interview
            </span>
          </div>
          <div className="mt-5 font-weight-500 text-3xl">
            Instance mock interview
          </div>
          <div className="mt-5 font-weight-300">
            Engage in a single, immediate mock interview session tailored to
            your needs and preferences.
          </div>
          <ol className="list-decimal mx-3 font-weight-200 mt-2">
            <li>
              Click on <em>Start Practicing</em> to begin.
            </li>
            <li>
              Select the <em>Instance Interview</em> option.
            </li>
            <li>
              Fill in the required information, including your name and
              position.
            </li>
            <li>Choose your desired panel members.</li>
            <li>Start the interview session.</li>
          </ol>
          <div className="mt-2 font-weight-300">
            <span className="font-weight-500">Tip:</span> Take a moment to
            review common interview questions and practice your responses before
            starting the session for optimal preparation.
          </div>
        </div>
        <div className="flex-1">
          <VideoPlayerComponent url="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/instant.webm?alt=media&token=a16ea2d3-aadd-449b-b9a4-34f063f1c39b" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 px-5 lx:px-32 py-5 mt-10 rounded-xl justify-stretch transition hover:shadow-lg cursor-pointer">
        <div className="flex-1">
          <VideoPlayerComponent url="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/schedule.webm?alt=media&token=3037852c-aad3-4290-9fdd-3d8c835857df" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-sm">
            <span className="bg-red-500/10 px-2 py-1 rounded uppercase">
              Interview
            </span>
          </div>
          <div className="mt-5 font-weight-500 text-3xl">
            Schedule mock interview
          </div>
          <div className="mt-5 font-weight-300">
            Empower your interview preparation by leveraging our intuitive
            scheduling feature. Take control of your time and tailor your
            interview session to align perfectly with your schedule.
          </div>
          <ol className="list-decimal mx-3 font-weight-200 mt-2">
            <li>
              Click on <em>Start Practicing</em> to begin.
            </li>
            <li>
              Select the <em>Schedule Interview</em> option.
            </li>
            <li>
              Fill in the required information, including your name and
              position.
            </li>
            <li>Select panel members according to your preferences.</li>
            <li>Confirm your selections to schedule the interview.</li>
          </ol>
          <div className="mt-2 font-weight-300">
            <span className="font-weight-500">Tip:</span> Ensure you select a
            time slot that aligns with your availability and provides ample time
            for preparation before the scheduled interview.
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5 md:gap-20 px-5 lx:px-32 py-5 mt-10 rounded-xl justify-stretch transition hover:shadow-lg cursor-pointer">
        <div className="flex flex-col flex-1">
          <div className="text-sm">
            <span className="bg-red-500/10 px-2 py-1 rounded uppercase">
              Interview
            </span>
          </div>
          <div className="mt-5 font-weight-500 text-3xl">Grant Permissions</div>
          <div className="mt-5 font-weight-300">
            Grant access to camera, audio, microphone, browser transcribe, and
            GenieAI text-to-speech to commence your interview.
          </div>
          <ol className="list-decimal mx-3 font-weight-200 mt-2">
            <li>Click to grant access for audio.</li>
            <li>Click to grant access for camera.</li>
            <li>Click to grant access for microphone.</li>
            <li>Click to grant access for browser transcribe.</li>
            <li>Click to grant access for GenieAI text-to-speech.</li>
            <li> Proceed to start your interview.</li>
          </ol>
          <div className="mt-2 font-weight-300">
            <span className="font-weight-500">Tip:</span> Ensure your device is
            connected properly and permissions are granted smoothly to avoid any
            interruptions during your interview session.
          </div>
        </div>
        <div className="flex-1">
          <VideoPlayerComponent url="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/permissions.webm?alt=media&token=0a6c56e6-0518-4a12-9b0e-05115497e699" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-20 px-5 lx:px-32 py-5 mt-10 rounded-xl justify-stretch transition hover:shadow-lg cursor-pointer">
        <div className="flex-1">
          <VideoPlayerComponent url="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/interview.webm?alt=media&token=406beee3-0b91-450f-a914-43f60d8312e5" />
        </div>
        <div className="flex flex-col flex-1">
          <div className="text-sm">
            <span className="bg-red-500/10 px-2 py-1 rounded uppercase">
              Interview
            </span>
          </div>
          <div className="mt-5 font-weight-500 text-3xl">
            Commence Your Interview
          </div>
          <div className="mt-5 font-weight-300">
            Step into your interview ready to showcase your skills, enthusiasm,
            and unique value proposition.
          </div>
          <ol className="list-decimal mx-3 font-weight-200 mt-2">
            <li>Panel Introduction</li>
            <li>Self Introduction</li>
            <li>Follow-up Questions</li>
            <li>Subject Matter Questions</li>
            <li>HR Questions.</li>
            <li>Candidate Questions.</li>
          </ol>
          <div className="mt-2 font-weight-300">
            <span className="font-weight-500">Tip:</span> Prepare thoroughly for
            each section to present yourself in the best possible light during
            the interview.
          </div>
        </div>
      </div>
    </div>
  );
}

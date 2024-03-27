export default function SummaryComponent() {
  return (
    <section className="px-5 container">
      <div className="relative mt-2">
        <div className="absolute w-5 h-5 bg-yellow-500 mt-20 ms-20" />
        <div className="absolute w-8 h-8 bg-red-500 right-2 mt-48" />
        <div className="absolute w-20 h-20 bg-indigo-800/70 mt-44" />
      </div>
      <div className="flex flex-row text-black justify-center pt-10">
        <div className="flex flex-col justify-center w-96">
          <div className="text-black text-2xl md:text-4xl mb-3 font-weight-700 text-center">
            See the Latest Features
          </div>
          <div className="text-center font-extralight font-weight-200">
            Explore the Latest Features and Transform Your Experience with
            InterviewSimulator!
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        <div className="flex flex-col">
          <div className="w-full bg-black/5 px-3 py-5 rounded cursor-pointer hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-400 transition">
            <div className="font-weight-700">
              AI-Driven Application Crafting
            </div>
            <div className="font-extralight text-justify font-weight-200 mt-2">
              Simplify the job application process with GenieBuilder&apos;s
              AI-driven application crafting feature. Utilize our intuitive
              interface, enhanced by artificial intelligence, to tailor and
              optimize your applications for various opportunities. Submit
              polished and tailored applications, saving time and increasing
              your chances of success.
            </div>
            <div className="flex flex-row justify-between mt-4 font-extralight">
              <small>Accuracy</small>
              <small>65%</small>
            </div>
          </div>
          <div className="w-full bg-black/5 px-3 py-5 mt-5 rounded cursor-pointer hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-400 transition">
            <div></div>
            <div className="font-weight-700">
              Effortless AI-Powered CV Building
            </div>
            <div className="font-extralight text-justify font-weight-200 mt-3">
              Craft professional resumes effortlessly using GenieBuilder&apos;s
              seamless CV building feature, enhanced by artificial intelligence.
              Our user-friendly platform guides you through the process,
              ensuring your resume reflects your unique skills and experiences.
              Make a lasting impression on potential employers with an
              AI-optimized CV.
            </div>
            <div className="flex flex-row justify-between mt-4 font-extralight">
              <small>Accuracy</small>
              <small>55%</small>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full bg-red-600 px-3 py-5 md:mt-12 text-white cursor-pointer hover:bg-black/5 hover:text-black hover:shadow-lg transition">
            <div></div>
            <div className="font-weight-700">AI-Enhanced Mock Interviews</div>
            <div className="font-extralight text-justify font-weight-200 mt-3">
              Elevate your interview skills with GenieBuilder&apos;s standout
              feature – AI-driven mock interviews. Engage with a diverse panel
              of virtual interviewers powered by advanced artificial
              intelligence. Refine your responses, gain valuable insights, and
              boost your confidence for real-world job interviews.
            </div>
            <div className="flex flex-row justify-between mt-4 font-extralight">
              <small>Accuracy</small>
              <small>73%</small>
            </div>
          </div>
          <div className="w-full bg-black/5 px-3 py-5 mt-5 rounded  cursor-pointer hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-400 transition">
            <div></div>
            <div className="font-weight-700">Innovative AI-Empowerment Hub</div>
            <div className="font-extralight text-justify font-weight-200 mt-3">
              GenieBuilder is more than a platform; it&apos;s an innovative
              AI-empowerment hub. Tailor your career path with cutting-edge AI
              tools for mock interviews, CV building, and application crafting.
              Join us on a transformative journey where your career aspirations
              find the perfect launchpad.
            </div>
            <div className="flex flex-row justify-between mt-4 font-extralight">
              <small>Accuracy</small>
              <small>68%</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

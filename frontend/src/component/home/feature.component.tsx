import "../overwrite.css";
import Image from "next/image";

export default function FeatureComponent() {
  return (
    <div className="container px-5 md:mt-12">
      <div className="flex flex-row text-black justify-center pt-10">
        <div className="flex flex-col justify-center w-96">
          <div className="text-black text-2xl md:text-4xl mb-3 font-weight-700 text-center">
            Explore more features
          </div>
          <div className="text-center font-extralight font-weight-200">
            Unlock a world of possibilities as you delve deeper into our array
            of features.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        <div className="flex flex-col cursor-pointer rounded-lg bg-red-500/5 p-5 transition hover:animate-pulse hover:shadow-2xl hover:scale-105">
          <div className="font-weight-300 text-xl line-1">
            Master the Art of Answering Questions.
          </div>
          <div className="font-weight-200  my-2 min-h-16 line-3">
            Ease into your interview preparations with confidence. Whether
            you&apos;re ready to face questions from industry experts or prefer
            to tailor your practice with personalized queries.
          </div>
          <Image
            className="mt-7 max-h-56 object-center rounded-xl"
            width="500"
            height="400"
            src="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/lady%201.png?alt=media&token=85c4ff17-f4c3-41a9-a3e7-ab544b5dd707"
            alt="one"
          />
        </div>

        <div className="flex flex-col cursor-pointer rounded-lg bg-red-500/5 p-5 transition hover:animate-pulse hover:shadow-2xl hover:scale-105">
          <div className="font-weight-300 text-xl line-1">
            Make it feel real by scheduling your interview.
          </div>
          <div className="font-weight-200  my-2 min-h-16 line-3">
            Experience the authenticity of a real interview with our scheduling
            feature. Book a mock interview session at your convenience and
            immerse yourself in a realistic interview environment.
          </div>
          <Image
            className="mt-7 max-h-56 object-center rounded-xl"
            width="500"
            height="400"
            src="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/book-interview.png?alt=media&token=9a153628-f0fb-40bc-8554-ee067383a407"
            alt="one"
          />
        </div>

        <div className="flex flex-col cursor-pointer rounded-lg bg-red-500/5 p-5 transition hover:animate-pulse hover:shadow-2xl hover:scale-105">
          <div className="font-weight-300 text-xl line-1">
            Get insights about your answers.
          </div>
          <div className="font-weight-200  my-2 min-h-16 line-3">
            Gain valuable insights into your responses. Understand strengths,
            areas for improvement, and tailored guidance to enhance your
            interview performance.
          </div>
          <Image
            className="mt-7 max-h-56 object-center rounded-xl"
            width="500"
            height="800"
            src="https://firebasestorage.googleapis.com/v0/b/geneieaibuilder.appspot.com/o/insights.png?alt=media&token=d392a48f-f27d-47b3-8d15-7866f2b65cfb"
            alt="one"
          />
        </div>
      </div>
    </div>
  );
}

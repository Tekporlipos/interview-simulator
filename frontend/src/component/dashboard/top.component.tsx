import "../overwrite.css";
export default function TopComponent() {
  return (
    <section>
      <div className="text-danger pt-5 pb-3 text-center ">
        <div className="font-weight-500 fs-6 text-capitalize">
          Welcome to your GenieAIBuilder workspace
        </div>
      </div>
      <div className="pb-4 text-white  flex-row justify-content-center align-content-center">
        <div className="w-50 text-center font-wight-700 fs-1 text-bold">
          It’s time to start doing magic. What do you want to{" "}
          <span className="text-red">create</span>?
        </div>
      </div>
    </section>
  );
}

export default function FrequentAskCardComponent(prop: any) {
  const style = prop.at === prop.index ? "animate__bounce" : "d-none";
  const element =
    prop.at !== prop.index ? (
      <svg className="a" width="24" height="24" viewBox="0 0 24 24">
        <title>Next</title>
        <path
          fill="black"
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        />
      </svg>
    ) : (
      <svg
        className="a"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.5 15L12.5 9L6.5 15"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  return (
    <div
      className="flex flex-col a"
      onClick={() => prop.click(prop.at != prop.index ? prop.index : -1)}
    >
      <div className="hover:underline text-sm flex flex-row justify-between py-2 items-center bg-black/10 my-2 px-3 rounded-lg">
        <div className="font-weight-400">{prop.q}</div>
        {element}
      </div>
      {prop.at == prop.index ? (
        <div className="text-sm">
          <div className={"p-3 font-weight-200 " + style}>{prop.a}</div>
          <hr />
        </div>
      ) : null}
    </div>
  );
}

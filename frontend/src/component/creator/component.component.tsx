import "./style.css";
export default function ComponentComponent(props: any) {
  return (
    <div className="col-md-4 col-sm-12 a">
      <div className=" bg-dark rounded-4 shadow-lg p-2 m-2">
        <div
          onClick={() => props.setAt(props.current == props.at ? 0 : props.at)}
          className="component-card "
        >
          <div className="component-card">
            <div className="ms-3">{props.children}</div>
            <div className="font-weight-300 text-white h5 pt-2">
              {props.name}
            </div>
          </div>
          <div>
            {!props.isActive ? (
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
              >
                <path
                  fill="transparent"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            ) : (
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path
                  fill="white"
                  fillRule="evenodd"
                  d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        </div>

        {props.content}
      </div>
    </div>
  );
}

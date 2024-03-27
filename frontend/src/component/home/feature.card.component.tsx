import Link from "next/link";
import "./css/home-style.css";

export default function FeatureCardComponent(prop: any) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="align-content-start border-white card-height p-3 mb-4">
        <div>
          <svg
            width="50"
            className="ms-3 hide-mobile"
            height="50"
            viewBox="0 0 24 24"
          >
            <title>web-box</title>
            <path
              fill="white"
              d="M8.95 13.4H6.58A5.5 5.5 0 0 1 6.58 10.6H8.95A11.56 11.56 0 0 0 8.85 12A11.56 11.56 0 0 0 8.95 13.4M7.16 9.2H9.2A12.06 12.06 0 0 1 10.18 6.71A5.55 5.55 0 0 0 7.16 9.2M16.84 9.2A5.59 5.59 0 0 0 13.81 6.71A10.95 10.95 0 0 1 14.78 9.2M12 17.57A9.5 9.5 0 0 0 13.34 14.8H10.66A9.5 9.5 0 0 0 12 17.57M12 6.42A9.53 9.53 0 0 0 10.66 9.2H13.34A9.53 9.53 0 0 0 12 6.42M7.16 14.8A5.61 5.61 0 0 0 10.18 17.29A12.06 12.06 0 0 1 9.2 14.8M21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19A2 2 0 0 1 21 5M19 12A7 7 0 1 0 12 19A7 7 0 0 0 19 12M15.15 12A11.56 11.56 0 0 1 15.05 13.4H17.42A5.5 5.5 0 0 0 17.42 10.6H15.05A11.56 11.56 0 0 1 15.15 12M13.81 17.29A5.62 5.62 0 0 0 16.84 14.8H14.78A10.95 10.95 0 0 1 13.81 17.29M10.36 10.6A8.81 8.81 0 0 0 10.36 13.4H13.64A10.3 10.3 0 0 0 13.75 12A10.21 10.21 0 0 0 13.64 10.6Z"
            />
          </svg>
        </div>
        <div className="flex-column">
          <div className="text-boldfont-wight-500 fs-5 pb-2 line-1">
            {prop.data.title}
          </div>
          <div className="font-weight-100 fs-6 mb-2 line-3">
            {prop.data.description}
          </div>
          <Link
            className="text-danger text-decoration-none fs-6 font-weight-400 line-1"
            href={"./dashboard?feature=" + prop.data.title.toLowerCase()}
          >
            Try {prop.data.title.toLowerCase()}
            <i>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Next</title>
                <path
                  fill="#DC3545"
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
}

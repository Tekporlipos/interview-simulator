"use client";
import Link from "next/link";
import Image from "next/image";
export default function TemplateContent(props: any) {
  return (
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-0">
        <Image
          src={props?.data?.avatar}
          alt="tmp"
          className="h-100"
          width="5000"
          style={{ minWidth: "100%" }}
        />
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 text-white px-2">
        <h4 className="pb-3 font-weight-900">{props?.data?.name}</h4>

        <div className="pb-3 font-weight-300">{props?.data?.description}</div>

        <div
          className="py-1"
          dangerouslySetInnerHTML={{ __html: props?.data?.detail }}
        />
        <Link
          onClick={props.closeModal}
          href={props?.data?.url}
          className="btn btn-danger btn-round"
        >
          Use template
        </Link>
      </div>
    </div>
  );
}

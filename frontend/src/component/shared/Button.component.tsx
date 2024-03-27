import Link from "next/link";

export default function ButtonComponent(prop: any) {
  return (
    <button className={prop.style + " btn btn-sm"}>
      <Link className="text-decoration-none text-white" href={prop.link}>
        {prop.name}
      </Link>
    </button>
  );
}

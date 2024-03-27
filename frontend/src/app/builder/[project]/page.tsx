import Home from "@/app/builder/page";
export default function Page(props: any) {
  return <Home param={props.params.project} />;
}

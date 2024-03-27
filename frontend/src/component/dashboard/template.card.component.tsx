"use client";
import "./style.css";
import "../overwrite.css";
import TemplateComponent from "./template.component";
import { template } from "@/utlities/question";
import { useRouter } from "next/navigation";
export default function TemplateCardComponent() {
  const router = useRouter();
  const openModal = (url: string) => {
    if (url) router.push(url);
  };
  return (
    <div className="template-card row">
      {template.map((value: any, i: number) => (
        <TemplateComponent
          key={value.id}
          timeout={i}
          data={value}
          onClick={openModal}
        />
      ))}
    </div>
  );
}

import React from "react"; // Make sure to import React
import "./style.css";
import Template1Component from "@/component/template/template1.component";
import Template2Component from "@/component/template/template2.component";
import Template3Component from "@/component/template/template3.component";

// You can define component IDs as constants for better readability
const COMPONENT_IDS: {
  TEMPLATE_1: string;
  TEMPLATE_2: string;
  TEMPLATE_3: string;
} = {
  TEMPLATE_1: "789012",
  TEMPLATE_2: "789013",
  TEMPLATE_3: "789014",
};

export default function TemplateComponent(props: any) {
  let info = JSON.parse(
    localStorage.getItem("preview" + props.content.id) ?? "{}",
  );
  const components: { [key: string]: JSX.Element } = {
    [COMPONENT_IDS.TEMPLATE_1]: <Template1Component data={info} />,
    [COMPONENT_IDS.TEMPLATE_2]: <Template2Component data={info} />,
    [COMPONENT_IDS.TEMPLATE_3]: <Template3Component data={info} />,
  };

  return components[props.content.type] || <div>Unknown Content</div>;
}

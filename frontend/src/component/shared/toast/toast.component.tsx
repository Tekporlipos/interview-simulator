"use client";
import "../../overwrite.css";
export default function ToastComponent(prop: any) {
  return (
    <div
      style={{ backgroundColor: prop.background }}
      className="absolute bottom-2 transition-3 w-full md:w-2/6 rounded shadow-xl p-3 text-white font-w"
    >
      {prop.message}
    </div>
  );
}

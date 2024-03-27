export default function InputWithSVGComponent(props: any) {
  const data = { ...props?.data };
  return (
    <div
      className={
        "h-20px mb-4 logo p-1 justify-content-start align-middle " +
        (props.underline ? "" : "border-bottom")
      }
    >
      {props.children}
      <input
        type="text"
        onChange={(event) => {
          data[props?.type] = event.currentTarget.value;
          props.setData(data);
        }}
        value={props?.data[props?.type]}
        placeholder={props?.placeholder}
        className={
          "placeholder-white w-100 input-focus-outline-none bg-dark text-white " +
          props?.className
        }
      />
    </div>
  );
}

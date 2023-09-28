const colorMapping = {
  orange: "border-[#F8A76F]",
  red: "border-[#DC4444]",
  // Add more color mappings as needed
};

export const PersonalityReportCard = (props) => {
  const borderColorClass = colorMapping[props.borderColor] || "border-gray-500";
  return (
    <div
      className={`border ${borderColorClass} border-solid border-[0.757px] rounded-[0.99363rem] px-[1.4rem] py-[1.7rem] w-[22rem] mb-[1.62rem] xl:mb-0`}
    >
      <h1
        className={`text-white text-[1.23rem] font-[700] text-center ${borderColorClass} border-solid border-b-[0.757px] pb-[1.42rem] uppercase`}
      >
        {props.title}
      </h1>
      <p className="text-[0.97rem] font-[400] text-center  pt-[1.23rem] text-[#CCC] ">
        {props.content}
      </p>
    </div>
  );
}



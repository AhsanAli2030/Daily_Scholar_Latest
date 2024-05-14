export default function Navbar() {
  const sameStyling = {
    buttons:
      "border-4 border-[#12B8D5] w-[30%] h-[45%] flex items-center justify-center rounded-lg hover:bg-[#12B8D5] duration-500 hover:text-xl cursor-pointer md:h-[50%]  md:text-xl md:hover:text-2xl lg:w-[20%] ",
  };
  return (
    <>
      <div className=" w-full h-[11%]  flex border-b-8 border-[#8B318E] rounded-full ">
        <div className="w-[40%] h-full   text-4xl flex items-center justify-center cursor-pointer pl-[5%] md:text-[250%] 2xl:text-[350%]">
          Daily Scholar
        </div>
        <div className="w-[60%] h-full flex justify-end items-center pr-[5%] gap-[10%]">
          <div className={`${sameStyling.buttons} `}>Log In</div>
          <div className={`${sameStyling.buttons} `}>Sign Up</div>
        </div>
      </div>
    </>
  );
}

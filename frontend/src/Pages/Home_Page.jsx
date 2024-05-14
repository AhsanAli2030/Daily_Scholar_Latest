import Navbar from "../Components/Navbar";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Avatar from "../3d_Components/Front_Page_Avatar";
const Home_Page = () => {
  return (
    <>
      <div className="w-screen h-screen m-0 p-0 bg-[#1B1A1D]  poetsen text-[#ffffff] xl:bg-white  2xl:bg-[#1B1A1D]">
        <Navbar></Navbar>

        <div className="w-full h-[89%]  p-[5%] flex flex-col xl:flex-row-reverse  gap-5 ">
          <div className="w-full h-[40%]  xl:w-[50%] xl:h-[80%] ">
            <Canvas camera={{ position: [0, 0, 150], fov: 40 }}>
              <Stage environment="city" intensity={0.6}>
                <Avatar position={[0, -0.9, 0]} scale={[1, 1, 1]} />
              </Stage>
              <BakeShadows />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
          <div className="w-full h-[60%]  flex flex-col  xl:w-[50%] xl:h-full xl:mt-[5%]">
            <div className="w-full h-[20%] text-3xl font-bold item text-center md:text-4xl   xl:text-5xl  ">
              Your Gateway to
              <span className="text-[#12B8D5] pl-2 pr-2 font-extrabold">
                Daily Learning
              </span>
              & Productivity
            </div>
            <div className=" w-full h-[60%] text-xl text-center flex flex-col items-center justify-center  xl:mt-[-9%]">
              Our platform is your go-to destination for daily notes, writing
              prompts, and tasks with built-in reminders, designed to enhance
              your educational journey and boost your productivity. Whether
              you're a student, educator, or lifelong learner, Daily Scholar
              empowers you to stay organized, motivated, and engaged with your
              daily learning endeavors. Join us in making every day a step
              towards academic excellence and personal development.
              <div className=" text-3xl font-bold  flex justify-center w-full h-[25%] mt-8 md:h-[27%] lg:w-[65%] lg:h[30%] items-center xl:h-[20%]">
                <div className="h-full w-[30%]  flex items-center justify-center border-4 border-[#12B8D5] rounded-lg  hover:bg-[#12B8D5] duration-500 hover:text-[110%] cursor-pointer xl:w-[50%] xl:rounded-[10%]">
                  <span className="signup-quickly mr-3 md:mr-6">✌🏽</span>Join us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Page;

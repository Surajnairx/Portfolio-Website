import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import image from "../assets/images/profile-pic.png";
function Hero() {
  return (
    <>
      <div className=" text-center p-8 max-sm:p-6">
        <h2 className="text-6xl p-4 text-teal-600 font-medium  lg:text-7xl max-sm:text-[40px]">
          Suraj Nair
        </h2>
        <h3 className=" text-3xl py-4 my-8 lg:text-4xl  max-sm:text-2xl max-sm:py-0">
          Developer and Designer
        </h3>
        <p className=" my-8 leading-8 text-2xl max-sm:text-[14.7px] max-sm:max-w-[530px] max-w-lg mx-auto">
          I am a professional{" "}
          <span className=" font-bold bg-gradient-to-t from-teal-600 to-slate-600 bg-clip-text text-transparent ">
            Frontend Developer
          </span>{" "}
          <br />
          based in Pune, India. Specializing on creating (and occasionally
          designing ) interactive and exceptional digital experience on the web.
        </p>
      </div>
      <div className=" text-5xl flex justify-center gap-16 py-5 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillInstagram />
      </div>
      <div className=" bg-gradient-to-b from-teal-500  rounded-full p-3.5  mx-auto w-80 mt-8 max-sm:w-[230px]">
        <img src={image} alt="" />
      </div>
    </>
  );
}

export default Hero;

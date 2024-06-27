import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import tailwind from "../assets/images/tailwind.png";
import github from "../assets/images/github.png";
function Technology() {
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <h1 className=" my-20 text-center text-4xl  max-sm:text-2xl">
        Technologies
      </h1>
      <div className=" flex flex-wrap item-center justify-center gap-4">
        <div className="rounded-2xl border-4 p-3 border-neutral-800 ">
          <img src={html} width={50} alt="" />
        </div>
        <div className="rounded-2xl border-4 p-3 border-neutral-800">
          <img src={css} width={50} alt="" />
        </div>
        <div className="rounded-2xl border-4 p-3 border-neutral-800">
          <img src={javascript} width={50} alt="" />
        </div>
        <div className="rounded-2xl border-4 p-3 border-neutral-800">
          <img src={react} width={50} alt="" />
        </div>
        <div className="rounded-2xl border-4 p-3 border-neutral-800">
          <img src={tailwind} width={50} alt="" />
        </div>
        <div className="rounded-2xl border-4 p-3 border-neutral-800">
          <img
            className=" bg-black rounded-full"
            src={github}
            width={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;

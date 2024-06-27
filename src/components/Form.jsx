export default function Form() {
  return (
    <div className=" text-center p-5">
      <div>
        <h1 className="  my-10 text-center text-4xl  max-sm:text-2xl">
          Get in touch
        </h1>
        <p className="text-center  text-xl py-2 leading-8 text-gray-600 max-sm:text-[14.7px]">
          Although you can provide details here, they may not function
          correctly. However, there's no need to worry because I am proficient
          in using React.js and TailwindCSS for frontend development. If you
          allow me to create the form, it will function properly. <br />
        </p>
      </div>

      <form action="" className=" flex flex-col">
        <div className=" flex sm:flex flex-col">
          <input
            type="text"
            className=" flex-1 m-5 border-black rounded-xl px-10 py-2  shadow-xl shadow-slate-400 "
            placeholder="Your name"
          />
          <input
            type="email"
            className=" flex-1 m-5 border-black rounded-xl px-10 py-2 shadow-xl shadow-slate-400"
            placeholder="Your email"
          />
        </div>

        <input
          type="text"
          className=" m-5 border-black rounded-xl px-10 py-2 shadow-xl shadow-slate-400"
          placeholder="Subject"
        />

        <input
          type="text"
          className=" m-5 border-black rounded-xl px-10 py-10 shadow-xl shadow-slate-400"
          placeholder="Your Message"
        />

        <input
          type="submit"
          className=" m-5 py-5 rounded-xl bg-red-500 text-white"
        />
      </form>
    </div>
  );
}

function Navbar() {
  return (
    <nav className=" max-sm:text-xs py-10 mb-12 flex justify-between">
      <h1 className=" max-sm:text-xs  text-xl  font-mono">developedbyrin</h1>
      <ul className=" flex items-center">
        <li>
          <a
            className=" bg-gradient-to-tr from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

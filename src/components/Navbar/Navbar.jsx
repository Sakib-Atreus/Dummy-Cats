import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-2 bg-base-200 rounded-b-xl mb-6">
      <div>
        <a href="/" className="text-cyan-500 font-bold text-3xl">
          Dummy Cat{"'"}s
        </a>
      </div>
      <div className="flex items-center">
        <Link to="/addUser" className="me-4 font-semibold text-xl text-cyan-500">Add User</Link>
        <img
          className="w-16 h-16 rounded-full"
          src="https://i.postimg.cc/tCry2RTD/1000-F-556022830-DMTczgmgx-Uz-S05-Dm-A6u-BOcb-Ji-WLGodat.jpg"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;

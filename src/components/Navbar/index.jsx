import Link from "next/link";
import InputSearch from "./InputSearch.jsx";
import UserSignIn from "./UserSignIn.jsx";

const Navbar = () => {
  return (
    <header className="bg-color-transparent border-b-4 border-color-secondary">
      <div className="flex md:flex-row flex-col justify-between items-center p-4 gap-2">
        <Link href="/" className="font-bold test-2xl text-color-secondary">
          NAVBAR
        </Link>
        <InputSearch />
        <UserSignIn />
      </div>
    </header>
  );
};
export default Navbar;

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2">
        <Link href="/" className="font-bold test-2xl">
          NAVBAR
        </Link>
        <input type="text" placeholder="Search" className="" />
      </div>
    </header>
  );
};
export default Navbar;

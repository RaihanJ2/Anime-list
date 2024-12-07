import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="py-4 px-6 flex justify-between items-center bg-color-secondary my-4">
      <h1 className="text-2xl font-bold text-color-white">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className=" md:text-xl text-sm hover:text-color-accent text-color-white transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;

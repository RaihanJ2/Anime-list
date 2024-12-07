import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="mt-8 flex flex-col justify-center items-center gap-2 text-color-secondary ">
      <h5 className="text-2xl font-bold">Hello, {user?.name}</h5>
      <Image
        className="rounded-md"
        src={user?.image}
        width={250}
        height={250}
      />
      <div className="py-8 flex gap-4 flex-wrap">
        <Link
          href="/users/dashboard/collection"
          className="bg-color-secondary text-color-white font-bold px-4 py-3 text-xl rounded-md"
        >
          My Collection
        </Link>
        <Link
          href="/users/dashboard/review"
          className="bg-color-secondary text-color-white font-bold px-4 py-3 text-xl rounded-md"
        >
          My Review
        </Link>
      </div>
    </div>
  );
};

export default Page;

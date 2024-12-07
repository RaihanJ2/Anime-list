import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserSignIn = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex gap-2 justify-between">
      {user ? (
        <Link
          href="/users/dashboard"
          className="py-1 text-color-white hover:text-color-secondary duration-500 ease-in-out"
        >
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="py-1 px-12 inline-block rounded-md text-color-white hover:text-color-secondary duration-500 ease-in-out"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserSignIn;

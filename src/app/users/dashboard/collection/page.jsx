import Header from "@/components/dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/libs/prisma";

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: {
      user_email: user.email,
    },
  });
  console.log({ collection });
  return (
    <>
      <section className="mt-4 px-6 w-full">
        <Header title={" My Collection"} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {collection.map((collect, index) => {
            return (
              <Link
                key={index}
                href={`/anime/${collect.mal_id}`}
                className="relative rounded-md"
              >
                <Image
                  src={collect.anime_image}
                  alt=""
                  width={350}
                  height={350}
                  className="w-full"
                />
                <div className="absolute flex items-center justify-center bottom-0 w-full bg-color-secondary h-16">
                  <h5 className="text-xl text-center text-color-white">
                    {collect.anime_title}
                  </h5>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Page;

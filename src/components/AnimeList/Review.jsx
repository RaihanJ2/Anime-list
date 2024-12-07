import prisma from "@/libs/prisma";
import Image from "next/image";

const Review = async (mal_id) => {
  const reviews = await prisma.review.findMany({ where: { mal_id } });
  console.log(reviews);
  return (
    <div className="">
      <h1 className="text-color-white text-3xl bg-color-secondary rounded-md p-3">
        Reviews
      </h1>
      <div className="flex flex-col gap-2 my-8">
        {reviews.map((review) => {
          return (
            <div
              className="text-color-white bg-transparent border-color-secondary border-2 rounded-xl"
              key={review.id}
            >
              <p className="bg-color-secondary w-full p-2 rounded-t-md">
                {review.username}
              </p>
              <p className="p-4 pb-5">{review.review}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Review;

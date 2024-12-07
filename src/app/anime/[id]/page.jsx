import { getAnimeResponse } from "@/libs/services";
import VideoPlayer from "@/components/Utilities/videoplayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import ReviewInput from "@/components/AnimeList/ReviewInput";
import Review from "@/components/AnimeList/Review";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, mal_id: id },
  });
  return (
    <>
      <div className="p-4">
        <h3 className="text-2xl text-color-white">
          {anime.data.title} - ({anime.data.year})
        </h3>
        {!collection && user && (
          <CollectionButton
            mal_id={id}
            user_email={user?.email}
            anime_image={anime.data.images.webp.image_url}
            anime_title={anime.data.title}
          />
        )}
      </div>
      <div className="p-4 flex gap-2 text-color-white overflow-x-auto">
        <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-secondary">
          <h3>Rank</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-secondary">
          <h3>Scores</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-secondary">
          <h3>Members</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="p-2 w-36 flex flex-col justify-center items-center rounded border border-color-secondary">
          <h3>Episodes</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>
      <div className="p-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-white">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={350}
          height={350}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl px-4 text-color-white">
          {anime.data.synopsis}
        </p>
      </div>
      <div className="p-4">
        <Review />
        <ReviewInput
          mal_id={id}
          user_email={user?.email}
          username={user?.name}
          anime_title={anime.data.title}
        />
      </div>
      <div className="rounded-md">
        <VideoPlayer youtubeid={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default Page;

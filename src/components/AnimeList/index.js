import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image
        src={images}
        alt={title}
        width={350}
        height={350}
        className="max-h-96 object-contain"
      />
      <h3 className="font-bold md:text-xl text-md p-4 text-center">{title}</h3>
    </Link>
  );
};
export default AnimeList;

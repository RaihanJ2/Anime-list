import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/services";

export default async function Page() {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  let recommendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );

  recommendedAnime = reproduce(recommendedAnime, 8);
  return (
    <>
      <section>
        <Header title="Popular" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation" linkHref="/recommandations" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
}

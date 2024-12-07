import prisma from "@/libs/prisma";

export async function POST(request) {
  const { mal_id, user_email, review, username, anime_title } =
    await request.json();
  const data = { mal_id, user_email, review, username, anime_title };

  const createReview = await prisma.review.create({ data });

  if (!createReview) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}

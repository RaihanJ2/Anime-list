import prisma from "@/libs/prisma";

export async function POST(request) {
  const { mal_id, user_email, anime_image, anime_title } = await request.json();
  const data = { mal_id, user_email, anime_image, anime_title };

  const createCollection = await prisma.collection.create({ data });

  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}

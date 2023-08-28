import type { LayoutServerLoad } from "./$types";
import { prisma } from "$lib/prisma";

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.getSession();
  const userEmail = session?.user?.email;
  let userId;

  if (session && userEmail) {
    const user = await prisma.user.findUnique({ where: { email: userEmail } });
    if (user) userId = user.id;
  }

  return {
    session,
    userId
  };
};
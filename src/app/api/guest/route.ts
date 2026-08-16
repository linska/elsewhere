import { prisma } from '@/shared/lib/prisma';

export async function POST() {
  const user = await prisma.user.create({
    data: {},
  });

  return Response.json(user, {
    status: 201,
  });
}

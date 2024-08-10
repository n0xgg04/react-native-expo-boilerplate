import { prisma } from '@/shared/instants/prisma';

export function useAuthData() {
  return prisma.authencation.useFindFirst({
    where: {
      id: 1,
    },
  });
}

export async function updateAuthData(userData: { username: string; id: number }) {
  const user = await prisma.authencation.findFirst({
    where: {
      id: 1,
    },
  });
  if (user) await prisma.authencation.update({});
  else
    await prisma.authencation.create({
      data: userData,
    });
}

import { PrismaClient } from '@prisma/client/react-native';
import { reactiveHooksExtension } from '@prisma/react-native';

const baseClient = new PrismaClient({
  log: [{ emit: 'event', level: 'query' }],
});

export const prisma = baseClient.$extends(reactiveHooksExtension());

export async function initializePrisma() {
  try {
    await baseClient.$applyPendingMigrations();
  } catch (e) {
    console.error('Failed to initialize prisma');
    // throw new Error('Failed to initialize prisma');
  }
}

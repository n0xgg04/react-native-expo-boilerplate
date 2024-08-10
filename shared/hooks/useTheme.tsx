import { type Theme } from '@/shared/constants/themes';
import { useTheme as useShopifyTheme } from '@shopify/restyle';

export function useTheme() {
  return useShopifyTheme<Theme>();
}

import { Dimensions, PixelRatio } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const maxWidth = 500;
const guidelineBaseWidth = 430;

const flexWidth = Math.min(width, maxWidth);

export const scaleSize = (size: number) => (flexWidth / guidelineBaseWidth) * size;

export const scaleFontSize = (size: number) =>
  PixelRatio.getFontScale() >= 1 ? size : size * PixelRatio.getFontScale();

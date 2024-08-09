import * as React from 'react';
import {
  Canvas,
  Rect,
  RadialGradient as RadialGradientSkia,
  vec,
  RectProps,
  CanvasProps,
  SkPoint,
  AnimatedProp,
} from '@shopify/react-native-skia';

type Props = {
  canvasStyle: CanvasProps['style'];
  r: AnimatedProp<number>;
  c: AnimatedProp<SkPoint>;
  colors: string[];
} & RectProps;

export function RadialGradient({
  r = 128,
  c = vec(128, 128),
  canvasStyle = {
    flex: 1,
  },
  colors,
  ...props
}: Props) {
  return (
    <Canvas style={canvasStyle}>
      <Rect x={0} y={0} width={256} height={256} {...props}>
        <RadialGradientSkia r={r} c={c} colors={colors} />
      </Rect>
    </Canvas>
  );
}

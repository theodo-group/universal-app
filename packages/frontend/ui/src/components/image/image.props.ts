export interface FullResolution {
  fill: true;
}
export interface PartialResolution {
  width: number;
  height: number;
}

export type ImageProps = {
  resolution: FullResolution | PartialResolution;
  src: string;
  alt: string;
  unoptimised?: boolean;
  absolutePosition?: boolean;
};

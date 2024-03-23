/**
 * 선형보간법(Linear Interpolation)
 * @see https://thd0011.tistory.com/11
 */
export const lerp = (start: number, end: number, t: number): number =>
  start + t * (end - start);

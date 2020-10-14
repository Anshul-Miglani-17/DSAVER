import { swap } from "./Utility";

export function getSelectionSortAnimations(arr) {
  const copy = [...arr];
  const animations = [];
  for (let i = 0; i < copy.length; i++) {
    for (let j = i+1; j < copy.length; j++) {
      animations.push([[i,j], false]);
      if (copy[i ] >copy[j]) {
        animations.push([[ j,copy[i]], true]);
        animations.push([[ i,copy[j]], true]);
        swap(copy, j, i);
      } else continue;
    }
  }
  return animations;
}
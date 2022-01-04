import { Colors } from "./../interfaces/Colors";
import { Sizes } from "./../interfaces/Sizes";
import { Forms } from "./../interfaces/Forms";

export function createFilterArr(
  filterObj: Sizes | Forms | Colors,
  constArr: string[]
) {
  let arr: string[] = [];
  if (!Object.values(filterObj).filter((val) => val).length) arr = constArr;
  else
    Object.values(filterObj).forEach((value, index) => {
      if (value) arr.push(constArr[index]);
    });
  return arr;
}

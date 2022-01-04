import data from "../../../../data";

export const sortingDataByRule = (rule: string) => {
  const sortedArr = data.slice(0);
  switch (rule) {
    case "byNameAcs": {
      return sortedArr.sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
    }
    case "byNameDesc": {
      return sortedArr.sort((a, b) => {
        const x = a.name.toLowerCase();
        const y = b.name.toLowerCase();
        return x > y ? -1 : x < y ? 1 : 0;
      });
    }
    case "byYearAcs": {
      return sortedArr.sort(function (a, b) {
        return +a.year - +b.year;
      });
    }
    case "byYearDesc": {
      return sortedArr.sort(function (a, b) {
        return +b.year - +a.year;
      });
    }
    default:
      return;
  }
};

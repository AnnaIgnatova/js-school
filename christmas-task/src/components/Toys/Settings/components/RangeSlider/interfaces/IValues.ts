interface IValues {
  min: number;
  max: number;
  changeValues: (min: number, max: number) => void;
  values: number[];
}

export default IValues;

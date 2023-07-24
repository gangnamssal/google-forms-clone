export default function arrayValueModify<T>(arr: T[], index: number, inputValue: string) {
  return arr.map((multiple, order) => {
    const newValue = { value: inputValue };
    return index === order ? newValue : multiple;
  });
}

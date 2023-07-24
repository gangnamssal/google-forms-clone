export default function arrayValueDelete<T>(arr: T[], index: number) {
  return arr.filter((_, order) => {
    return order !== index;
  });
}

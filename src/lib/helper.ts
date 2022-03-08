export const findArrayInObjIndex = ({
  arr,
  key,
  value,
}: {
  arr: any[]
  key: string
  value: string | number | boolean
}) => {
  return arr.findIndex((item) => item[key] === value)
}

export const getArrayValue = ({ arr, index }: { arr: any[]; index: number }) => {
  return index >= arr.length ? arr[0] : index >= 0 ? arr[index] : arr[arr.length - 1]
}

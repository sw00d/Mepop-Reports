
export const formatNum = (type, num) => {
  return type + num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

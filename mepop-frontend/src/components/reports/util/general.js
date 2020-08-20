
export const formatNum = (type, num, minDigits) => {
  return type + num.toLocaleString(undefined, {
    minimumFractionDigits: typeof minDigits === 'number' ? minDigits : 2,
    maximumFractionDigits: typeof minDigits === 'number' ? minDigits : 2
  })
}

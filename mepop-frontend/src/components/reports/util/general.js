
export const formatNum = (type, num, minDigits) => {
  const formatted = parseFloat(num).toLocaleString(undefined, {
    minimumFractionDigits: typeof minDigits === 'number' ? minDigits : 2,
    maximumFractionDigits: typeof minDigits === 'number' ? minDigits : 2
  })
  return type ? type + formatted : formatted
}

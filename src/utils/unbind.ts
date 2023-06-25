export default function unbind(variable: any) {
  let unboundObject: any, i: number

  if (typeof variable !== 'object') return variable
  if (!variable) return variable
  if (Object.prototype.toString.apply(variable) === '[object Array]') {
    unboundObject = []
    for (i = 0; i < variable.length; i += 1) {
      unboundObject[i] = unbind(variable[i])
    }
    return unboundObject
  }

  unboundObject = {}
  for (const i in variable) {
    if (Object.prototype.hasOwnProperty.call(variable, i)) {
      unboundObject[i] = unbind(variable[i])
    }
  }
  return unboundObject
}

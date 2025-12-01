type ClassValue = string | number | boolean | undefined | null | ClassValue[]

function toVal(mix: ClassValue): string {
  let str = ""

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (let k = 0; k < mix.length; k++) {
        if (mix[k]) {
          const y = toVal(mix[k])
          if (y) {
            str && (str += " ")
            str += y
          }
        }
      }
    }
  }

  return str
}

export function cn(...inputs: ClassValue[]) {
  let str = ""
  for (let i = 0; i < inputs.length; i++) {
    const tmp = toVal(inputs[i])
    if (tmp) {
      str && (str += " ")
      str += tmp
    }
  }
  return str
}

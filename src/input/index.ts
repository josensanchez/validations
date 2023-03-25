
export const isNumber = (value:unknown) => {
    if (value === null) {
      return false;
    }
    if (value === undefined) {
      return false;
    }
    if (Array.isArray(value)) {
      return false;
    }
    return typeof value === "number" || !isNaN(value as any);
}

export const isString = (value:unknown): value is string => {
    if (Array.isArray(value)) {
      return false;
    }
    return typeof value === "string" || value instanceof String;
}

export const isEmpty = (value:unknown) => {
    if (value === null) {
      return true;
    }
    if (value === undefined) {
      return true;
    }
   if (isNumber(value) && value === 0){
    return true;
   }
   if (isString(value) && value === ""){
    return true;
   }
   if (Array.isArray(value) && value.length == 0){
    return true;
   }
   return false;
}

export const len = (length: number) => (value:unknown) => {
    if (Array.isArray(value)) {
      return value.length === length;
    }
    if (isString(value)) {
      return value.length === length;
    }
    if (isNumber(value)) {
      return `${value}`.length === length;
    }
    return false;
}

export const match = (pattern: string) => (value:string) => {
  const re = new RegExp(pattern);
  return re.test(value);
}

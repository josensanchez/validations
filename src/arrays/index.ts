export const emptyData = (rows: number, cols = 1): string[][] => {
  const res = Array(rows)
    .fill('')
    .map(() =>
      Array(cols)
        .fill('')
        .map(() => '')
    );
  return res;
};

export const isEmptyArray = (arr: Array<string>): boolean => arr.join('') == '';

export const isNotEmptyArray = (arr: Array<string>): boolean => !isEmptyArray(arr);

export const nonUnq = (list: Array<string | number>): Array<string | number> => list.filter((e, i, a) => a.lastIndexOf(e) != i);

export const unique =
  <T>(keys: Array<keyof T>) =>
  (list: Array<T>): Array<string> => {
    return list.map((item) => concatKeys(keys)(item)).filter((elem, pos, c) => c.indexOf(elem) === pos);
  };

export const concatKeys =
  <T>(keys: Array<keyof T>) =>
  (item: T): string =>
    keys.map((k) => item[k]).join('_');

export const pasteInPlace =
  <T>(keys: Array<keyof T>) =>
  (source: Array<T>) =>
  (paste: Array<T>): Array<T> => {
    return source.map((item) => {
      const elem = paste.find((it) => concatKeys(keys)(it).trim() == concatKeys(keys)(item).trim());
      if (elem) {
        return elem;
      }
      return item;
    });
  };


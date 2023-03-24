type Func = (...args: unknown[]) => boolean;

export const and =
  (f?: Func, ...fs: Array<Func>) =>
  (...args: unknown[]): boolean =>
    f == undefined ? true : f.apply(this, args) && and(...fs).apply(this, args);

export const or =
  (f?: Func, ...fs: Array<Func>) =>
  (...args: unknown[]): boolean =>
    f == undefined ? false : f.apply(this, args) || or(...fs).apply(this, args);


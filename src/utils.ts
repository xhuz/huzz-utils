export abstract class Utils {

  static copy<T extends object>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  static copyEx<T extends object>(obj: T, hash = new WeakMap()): T {
    if (!Utils.isObj(obj)) {
      return obj;
    }
    if (hash.has(obj)) {
      return hash.get(obj);
    }

    const result: any = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      const item = obj[key];
      result[key] = this.isObj(obj[key]) ? Utils.copyEx(item as unknown as object, hash) : obj[key];
    }

    return result;
  }

  static isObj(obj: any) {
    return (typeof obj === 'object' || typeof obj === 'function') && !!obj;
  }
}

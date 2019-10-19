export class Storages {
  private storage: Storage;

  constructor(type: 'localStorage' | 'sessionStorage') {
    if (!window) {
      throw new Error('must be running in browser');
    }
    if (!('localStorage' in window && 'sessionStorage' in window)) {
      throw new Error('current browser does not support storage');
    }
    if (type === 'localStorage') {
      this.storage = localStorage;
    } else {
      this.storage = sessionStorage;
    }
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  setObject(key: string, data: object) {
    this.storage.setItem(key, JSON.stringify(data));
  }

  getObject(key: string) {
    return JSON.parse(this.storage.getItem(key) || '{}');
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  getAll() {
    const result: {[key: string]: any} = {};
    const all = Object.entries(this.storage);
    for (const [key, value] of all) {

      result[key] = value ? JSON.parse(value) : value;
    }
    return result;
  }

  clear() {
    this.storage.clear();
  }
}

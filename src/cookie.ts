export class Cookie {

  cookie: Document['cookie'];

  constructor() {
    if (!window) {
      throw new Error('must bu running in browser');
    }
    this.cookie = document.cookie;
  }

  get(key: string) {
    const reg = new RegExp(key + '=([^;]*)');
    const m = this.cookie.match(reg);
    if (m && m.length > 1) {
      return m[1];
    }
    return null;
  }

  set(key: string, data: string, time?: number, path?: string) {
    const exp = new Date();
    if (time) {
      exp.setTime(exp.getTime() + time);
    } else {
      exp.setTime(exp.getTime() + 23.9 * 60 * 60 * 1000);
    }
    if (path) {
      this.cookie = `${key}=${data};expires=${exp.toUTCString()};path=${path}`;
    }
    this.cookie = `${key}=${data};expires=${exp.toUTCString()}`;
  }

  remove(key: string, path?: string) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const data = this.get(key);
    if (path) {
      this.cookie = `${key}=${data};expires=${exp.toUTCString()};path=${path}`;
    } else {
      this.cookie = `${key}=${data};expires=${exp.toUTCString()}`;
    }
  }
}

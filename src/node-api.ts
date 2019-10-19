import * as fs from 'fs';
import {dirname} from 'path';

export abstract class NodeApi {

  static readDir(dir: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        err ? reject(err) : resolve(files);
      });
    });
  }

  static mkdirSync(dir: string) {
    if (fs.existsSync(dir)) {
      return true;
    } else {
      if (NodeApi.mkdirSync(dirname(dir))) {
        fs.mkdirSync(dir);
        return true;
      }
    }
  }

  static readFile(path: fs.PathLike | number, options?: string): Promise<string>;
  static readFile(path: fs.PathLike | number, options: {encoding: string, flag?: string}): Promise<string>;
  static readFile(path: fs.PathLike | number, options: {encoding?: null, flag?: string}): Promise<Buffer>;
  static readFile(path: fs.PathLike | number, options?: {encoding?: string | null; flag?: string;} | string | null): Promise<string | Buffer> {
    return new Promise((resolve, reject) => {
      if (!options) {
        fs.readFile(path, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      } else {
        fs.readFile(path, options, (err, data) => {
          err ? reject(err) : resolve(data);
        });
      }
    });
  }

}

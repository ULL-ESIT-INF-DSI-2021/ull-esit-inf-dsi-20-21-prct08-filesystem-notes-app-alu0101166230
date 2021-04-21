/* eslint-disable max-len */
import {Template} from './template';

/**
 * Implemented the reduce method substracting the list
 */
export class SubMapReduce extends Template {
  constructor(protected list:number[], protected applyFuntion: (a:number) => number) {
    super(list, applyFuntion);
  }


  reduce():number {
    const mapList:number[] = this.map();
    let output: number = 0;
    mapList.forEach((element) => {
      output -= element;
    });
    return output;
  }
}

/* eslint-disable max-len */
import {Template} from './template';

/**
 * Implemented the reduce method multiplying  the list
 */
export class ProductMapReduce extends Template {
  constructor(protected list:number[], protected applyFuntion: (a:number) => number) {
    super(list, applyFuntion);
  }


  reduce():number {
    const mapList:number[] = this.map();
    let output: number = 1;
    mapList.forEach((element) => {
      output = output * element;
    });
    return output;
  }
}

import {Template} from './template';

export class Subclass extends Template {
  constructor(protected list:number[]) {
    super(list);
  }

  map(inputFunction: (a:number)=> number):number[] {
    const outputList: number[] = [];
    this.list.forEach((element) => {
      outputList.push(inputFunction(element));
    });
    return outputList;
  }

  reduce():number[] {
    return this.map(Math.sqrt);
  }

  addMapReduce(funtionToApply:(a:number[]) => number):number {
    return 0;
  }
}

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

  reduce(numberList:number[]):number {
    return 8;
  };
}

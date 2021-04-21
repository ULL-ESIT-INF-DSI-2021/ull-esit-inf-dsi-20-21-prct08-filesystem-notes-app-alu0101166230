export abstract class Template {
  constructor(protected list:number[]) {}

  map(inputFunction: (a:number)=> number):number[] {
    const outputList: number[] = [];
    this.list.forEach((element) => {
      outputList.push(inputFunction(element));
    });
    return outputList;
  }

  abstract reduce(numberList:number[]):number;
}

// const temp = new Template([4, 9, 81]);

// console.log(temp.map(Math.sqrt));


